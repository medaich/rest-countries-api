import { useCountries } from "../contexts/CountriesContext";
import Country from "./Country";
import CountrySkeleton from "./CountrySkeleton";
import Message from "./Message";
import Wrapper from "./Wrapper";

const Countries = () => {
  const { countries, error, isLoading } = useCountries();

  if (error) return <Message message={error} />;

  return (
    <section>
      <h2 className="sr-only">Countries</h2>

      <Wrapper className="px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <ul>
          {isLoading
            ? Array(8)
                .fill(0)
                .map((_, key) => <CountrySkeleton key={key} />)
            : countries.map((country) => (
                <Country country={country} key={country.countryId} />
              ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Countries;
