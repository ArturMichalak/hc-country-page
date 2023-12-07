import MainCard from '@/components/main-card';
import Main from '@/fragments/main';
import sort, { Country } from '@/helpers/sort';

export const getCountries = async () => {
  const countries = await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  );
  return countries as Country[];
};

export default async function Home() {
  const defaultSortKey: keyof Country = "population";
  const countriesRaw = getCountries();
  const [countries] = await Promise.all([countriesRaw]);

  return (
    <MainCard isWide>
      <Main countries={sort(countries, defaultSortKey)} />
    </MainCard>
  );
}
