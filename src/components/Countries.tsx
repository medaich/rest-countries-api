import { useCountries } from "../contexts/CountriesContext";
import Country from "./Country";

const Countries = () => {
  const { countries, error } = useCountries();
  console.log(error);

  return (
    <section>
      <h2 className="sr-only">Countries</h2>
      <ul>
        {countries.map((country) => (
          <Country country={country} key={country.countryId} />
        ))}
      </ul>
    </section>
  );
};

export default Countries;
