import { useCountries } from "../contexts/CountriesContext";
import Country from "./Country";
import Message from "./Message";
import Wrapper from "./Wrapper";

const Countries = () => {
  const { countries, error, isLoading } = useCountries();

  if (error) return <Message message={error} />;

  if (isLoading) return <p>Loading...</p>;

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
