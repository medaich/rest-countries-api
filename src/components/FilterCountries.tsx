import { ChevronDown } from "lucide-react";
import { Region, useCountries } from "../contexts/CountriesContext";

const FilterCountries = () => {
  const regions: Region[] = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];
  const { setRegion } = useCountries();

  return (
    <div className="relative inline-block">
      <label className="sr-only" htmlFor="filter">
        Filter by region
      </label>

      {/* Select Container */}
      <div className="relative">
        <select
          id="filter"
          className="bg-white dark:bg-dark-blue shadow-mdappearance-none p-4 px-8 rounded w-full pr-10"
          onChange={(e) => setRegion(e.target.value as Region)}
        >
          <option value="All">Filter by Region</option>
          {regions.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>

        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
};

export default FilterCountries;
