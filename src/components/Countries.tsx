import { useCountries } from "../contexts/CountriesContext";
import Country from "./Country";
import Wrapper from "./Wrapper";

const Countries = () => {
  const { countries, error } = useCountries();

  return (
    <section>
      <h2 className="sr-only">Countries</h2>
      <ul>
        <Wrapper className="px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {countries.map((country) => (
            <Country country={country} key={country.countryId} />
          ))}
        </Wrapper>
      </ul>
    </section>
  );
};

export default Countries;
