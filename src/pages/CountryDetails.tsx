import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import Wrapper from "../components/Wrapper";
import { useGetCountry } from "../hooks/useGetCountry";
import { useCountries } from "../contexts/CountriesContext";
import Message from "../components/Message";
import CountryDetailsSkeleton from "../components/CountryDetailsSkeleton";

const CountryDetails = () => {
  const navigate = useNavigate();
  const { countryId } = useParams();

  const { country, error, isLoading } = useGetCountry(countryId);

  const { getCountryById } = useCountries();

  if (error) return <Message message={error} />;

  if (isLoading) return <CountryDetailsSkeleton />;
  return (
    <Wrapper className="px-0 md:py-12">
      <button
        className="flex *:block gap-2 items-center bg-white dark:bg-dark-blue px-8 py-2 justify-center rounded shadow-md cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
        <span>Back</span>
      </button>

      <div className="mt-16 md:mt-20 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32">
        <div className="w-full md:w-1/2 xl:pr-8">
          {/* This padding to limit flag width */}
          <img
            src={country?.flag.url}
            alt={country?.flag.alt}
            className="object-cover size-full shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 flex gap-8 lg:gap-12 flex-col justify-center">
          <h2 className="font-extrabold text-2xl max-sm:text-base">
            {country?.name}
          </h2>

          <div className="capitalize flex gap-4 lg:gap-32 max-md:flex-col">
            <div>
              <p>
                Native name:
                <span className="font-extralight px-1">
                  {country?.nativeName}
                </span>
              </p>

              <p>
                Population:
                <span className="font-extralight px-1">
                  {country?.population.toLocaleString()}
                </span>
              </p>

              <p>
                Region:
                <span className="font-extralight px-1">{country?.region}</span>
              </p>

              <p>
                Sub Region:
                <span className="font-extralight px-1">
                  {country?.subregion}
                </span>
              </p>

              <p>
                capital:
                <span className="font-extralight px-1">{country?.capital}</span>
              </p>
            </div>

            <div>
              {country?.tld && (
                <p>
                  Top level domain:
                  <span className="font-extralight px-1">{country?.tld}</span>
                </p>
              )}

              {country?.currencies?.length ? (
                <p>
                  currencies:
                  <span className="font-extralight px-1">
                    {country?.currencies.join(", ")}
                  </span>
                </p>
              ) : null}
              <p>
                Languages:
                <span className="font-extralight px-1">
                  {country?.languages.join(", ")}
                </span>
              </p>
            </div>
          </div>

          {country?.borders?.length ? (
            <div className="flex gap-4 max-xl:flex-col">
              <p>Border Countries:</p>
              <ul className="flex gap-x-2">
                {country?.borders?.map((countryId) => (
                  <li key={countryId}>
                    <Link
                      className="bg-white dark:bg-dark-blue px-2 py-1 rounded shadow-md font-extralight text-xs"
                      to={`/country/${countryId}`}
                    >
                      {getCountryById(countryId)?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};

export default CountryDetails;
