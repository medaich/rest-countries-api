import { useEffect, useState } from "react";
import { ApiCountry, Country } from "../contexts/CountriesContext";

interface ApiCountryDetailed extends ApiCountry {
  subregion?: string;
  borders?: string[];
  tld?: string[];
  currencies?: { [currencyCode: string]: { name: string; symbol: string } };
  languages: { [languageCode: string]: string };
}

interface CountryDetailed extends Country {
  nativeName: string;
  subregion: string;
  tld?: string;
  currencies?: string[];
  languages: string[];
  borders?: string[];
}

export function useGetCountry(countryId?: string) {
  const [country, setCountry] = useState<CountryDetailed | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCountry() {
        try {
          if (!countryId) throw new Error("CountryId not provided");

          setIsLoading(true);
          const fetched = await fetch(
            `https://restcountries.com/v3.1/alpha/${countryId}`
          );

          if (!fetched.ok) {
            throw new Error(`Error fetching country status: ${fetched.status}`);
          }

          const data = await fetched.json();
          const countryApi: ApiCountryDetailed = data[0];

          setCountry({
            population: countryApi.population,
            region: countryApi.region,
            countryId: countryApi.cca3,
            capital: countryApi?.capital?.[0] || "No capital",
            name: countryApi.name.common || countryApi.name.official,
            flag: {
              url: countryApi.flags.svg,
              alt: `flag of ${countryApi.name.official}`,
            },
            currencies:
              countryApi.currencies &&
              Object.values(countryApi.currencies).map((curr) => curr.name),
            subregion: countryApi?.subregion || "unknown",
            tld: countryApi.tld && countryApi.tld[0],
            languages: Object.values(countryApi.languages),
            nativeName: Object.values(countryApi.name.nativeName)[0].common,
            borders: countryApi.borders,
          });
        } catch (error) {
          console.error(error);

          if (error instanceof Error) setError(error.message);
          else setError("Unknown error occured");
        } finally {
          setIsLoading(false);
        }
      }

      fetchCountry();
    },
    [countryId]
  );

  return { country, isLoading, error };
}
