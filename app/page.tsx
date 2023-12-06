import Main from '@/components/client/main';
import sort, { Country } from '@/helpers/sort';

export default async function Home() {
  const defaultSortKey: keyof Country = "population";
  const getCountries = async () => {
    const countries = await fetch("https://restcountries.com/v3.1/all").then(
      (res) => res.json()
    );
    return countries as Country[];
  };

  const countriesRaw = getCountries();
  const [countries] = await Promise.all([countriesRaw]);

  return (
    <Main
      countries={sort(countries, defaultSortKey)}
    />
  );
}
