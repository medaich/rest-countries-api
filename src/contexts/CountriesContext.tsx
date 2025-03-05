import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface CountriesContextType {
  countries: Country[];
  error: string;
  setRegion: React.Dispatch<React.SetStateAction<Region>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface ApiCountry {
  cca3: string;
  population: number;
  region: string;
  capital?: string[];
  name: {
    official: string;
    common?: string;
    nativeName?: string;
  };
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
}

export type Region =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Antarctic"
  | "Oceania"
  | "All";

export interface Country {
  countryId: string;
  population: number;
  region: string;
  capital: string;
  name: string;
  flag: {
    url: string;
    alt: string;
  };
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

export function CountriesProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");

  const [region, setRegion] = useState<Region>("All"); //Filter by region
  const [query, setQuery] = useState<string>(""); // Search query

  const displayedCountries = useMemo(
    () =>
      countries
        .filter(
          (country) =>
            country.name.toLowerCase().includes(query.toLowerCase()) &&
            (region === "All" ||
              country.region.toLowerCase() === region.toLowerCase())
        )
        .slice(0, 8),
    [countries, query, region]
  );

  useEffect(function () {
    async function getCountries() {
      try {
        const fetched = await fetch(
          "https://restcountries.com/v3.1/all?fields=cca3,name,region,population,capital,flags"
        );

        if (!fetched.ok) {
          throw new Error(`HTTP error! Status: ${fetched.status}`);
        }

        const countrs = await fetched.json();

        setCountries(
          countrs.map((country: ApiCountry): Country => {
            return {
              population: country.population,
              region: country.region,
              countryId: country.cca3,
              capital: country?.capital?.[0] || "No capital",
              name: country.name.common || country.name.official,
              flag: {
                url: country.flags.svg,
                alt: `flag of ${country.name.official}`,
              },
            };
          })
        );
      } catch (error: unknown) {
        if (error instanceof Error) setError(error.message);
        else setError("Unknown error occured");
      }
    }

    getCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{ countries: displayedCountries, error, setRegion, setQuery }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function useCountries() {
  const context = useContext(CountriesContext);
  if (!context)
    throw new Error("Countries context used outside its provider...");

  return context;
}
