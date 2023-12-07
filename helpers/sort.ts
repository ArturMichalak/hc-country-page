export interface Country {
  area: number;
  independent: boolean;
  population: number;
  region: "Americas" | "Antarctic" | "Africa" | "Asia" | "Europe" | "Oceania";
  subregion: string;
  unMember: boolean;
  name: {
    official: string;
    common: string;
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  flag: string;
  cca3: string;
}

export interface CountryDetails extends Country {
  capital: string[];
  languages: { [key: string]: string };
  currencies: { [key: string]: { name: string; symbol: string } };
  continents: string[];
  borders: string[];
}

export type CountryProp = keyof Country;

const sort = (countries: Country[], sortBy: keyof Country) => {
  countries = countries.sort((a, b) => (a.population < b.population ? 1 : -1));

  if (sortBy == "name")
    countries = countries.sort((a, b) =>
      (a.name.common || a.name.official).localeCompare(
        b.name.common || b.name.official
      )
    );
  else countries = countries.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));

  return countries;
};

export default sort;
