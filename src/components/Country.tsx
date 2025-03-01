import { Link } from "react-router";
import { Country as CountryType } from "../contexts/CountriesContext";

const Country = ({ country }: { country: CountryType }) => {
  return (
    <li className="rounded-md shadow-md">
      <Link to={`/country/${country.countryId}`}>
        <div className="h-40">
          <img
            src={country.flag.url}
            alt={country.flag.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 mb-6">
          <h3 className="py-4">{country.name}</h3>
          <p className="font-semibold text-sm">
            Population: <span className="font-light">{country.population}</span>
          </p>
          <p className="font-semibold text-sm">
            Region: <span className="font-light">{country.region}</span>
          </p>
          <p className="font-semibold text-sm">
            Capital: <span className="font-light">{country.capital}</span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default Country;
