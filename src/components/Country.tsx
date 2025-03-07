import { Link } from "react-router";
import { Country as CountryType } from "../contexts/CountriesContext";

const Country = ({ country }: { country: CountryType }) => {
  return (
    <li className="rounded shadow-md">
      <Link to={`/country/${country.countryId}`}>
        <div className="h-40">
          <img
            src={country.flag.url}
            alt={country.flag.alt}
            className="size-full object-cover shadow-md rounded"
          />
        </div>
        <div className="p-4 mb-6">
          <h3 className="py-4">{country.name}</h3>
          <p className="text-sm">
            Population:{" "}
            <span className="font-extralight">{country.population}</span>
          </p>
          <p className="text-sm">
            Region: <span className="font-extralight">{country.region}</span>
          </p>
          <p className="text-sm">
            Capital: <span className="font-extralight">{country.capital}</span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default Country;
