import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CountriesContextType {
  countries: Country[];
  error: string;
}

interface ApiCountry {
  cca3: string;
  population: number;
  region: string;
  capital?: string[];
  name: {
    official: string;
    common?: string;
  };
}

export interface Country {
  countryId: string;
  population: number;
  region: string;
  capital: string;
  name: string;
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

export function CountriesProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(function () {
    async function getCountries() {
      try {
        const fetched = await fetch(
          "https://restcountries.com/v3.1/all?fields=cca3,name,region,population,capital"
        );

        if (!fetched.ok) {
          throw new Error(`HTTP error! Status: ${fetched.status}`);
        }

        const countrs = await fetched.json();
        console.log(countrs);

        setCountries(
          countrs.map((country: ApiCountry) => {
            return {
              population: country.population,
              region: country.region,
              countryId: country.cca3,
              capital: country?.capital?.[0] || "No capital",
              name: country.name.official,
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
    <CountriesContext.Provider value={{ countries, error }}>
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
