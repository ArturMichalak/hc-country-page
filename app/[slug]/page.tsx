import _ from 'lodash';
import { Metadata } from 'next';

import { getCountries } from '@/app/page';
import MainCard from '@/components/main-card';
import Details from '@/fragments/details';
import { Country, CountryDetails } from '@/helpers/sort';

export async function generateMetadata({params} : {params: any}): Promise<Metadata> {
  const {slug} = params;
  const countriesRaw = getCountries();
  const [countries] = await Promise.all([countriesRaw]);

  const country = countries.find(
    (x) =>
      _.kebabCase(x.name.common) === slug ||
      _.kebabCase(x.name.official) === slug
  ) as CountryDetails;
  return {
    title: `${country.name.common || country.name.official} - World Ranks`
  }
}

export default async function Country({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const countriesRaw = getCountries();
  const [countries] = await Promise.all([countriesRaw]);

  const country = countries.find(
    (x) =>
      _.kebabCase(x.name.common) === slug ||
      _.kebabCase(x.name.official) === slug
  ) as CountryDetails;

  return country ? (
    <MainCard>
      <Details country={country} countries={countries} />
    </MainCard>
  ) : null;
}
