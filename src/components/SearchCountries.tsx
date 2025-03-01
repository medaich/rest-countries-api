import { Search } from "lucide-react";
import { useCountries } from "../contexts/CountriesContext";

const SearchCountries = () => {
  const { setQuery } = useCountries();

  return (
    <label className="*:block flex items-center ring ring-transparent focus-within:ring-current rounded-sm bg-white dark:bg-dark-blue py-4 px-6 text-sm gap-4 font-light text-dark-gray dark:text-inherit max-w-2/5">
      <span>
        <Search strokeWidth={1} className="w-6" />
      </span>
      <input
        type="text"
        placeholder="Search for a country..."
        className="outline-none placeholder:text-current"
        onChange={(e) => setQuery(e.target.value)}
      />
    </label>
  );
};

export default SearchCountries;
