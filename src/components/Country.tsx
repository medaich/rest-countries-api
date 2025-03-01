import { Country as CountryType } from "../contexts/CountriesContext";

const Country = ({ country }: { country: CountryType }) => {
  return <li>{country.name}</li>;
};

export default Country;
