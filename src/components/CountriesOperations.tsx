import Wrapper from "./Wrapper";
import SearchCountries from "./SearchCountries";
import FilterCountries from "./FilterCountries";

const CountriesOperations = () => {
  return (
    <section>
      <h2 className="sr-only">Countries Operations</h2>
      <Wrapper className="px-0 max-sm:px-0 flex max-md:flex-col gap-y-12 justify-between w-full">
        <SearchCountries />
        <FilterCountries />
      </Wrapper>
    </section>
  );
};

export default CountriesOperations;
