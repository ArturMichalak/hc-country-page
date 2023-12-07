"use client";

import _ from 'lodash';
import Link from 'next/link';

import { MainProps } from '@/fragments/main';
import { Country, CountryDetails } from '@/helpers/sort';

export interface DetailsProps extends MainProps {
  country: CountryDetails;
}

export default function Details({ country, countries }: DetailsProps) {
  interface CountryPreviewProps {
    country?: Country;
  }

  const CountryPreview = ({ country }: CountryPreviewProps) => {
    return country ? (
      <li>
        <Link
          className="flex flex-col cursor-pointer"
          href={`/${_.kebabCase(country.name.common || country.name.official)}`}
        >
          <span className="leading-[60px] text-[80px]">{country.flag}</span>
          {country.name.common || country.name.official}
        </Link>
      </li>
    ) : null;
  };

  return (
    <div className="flex flex-col flex-grow">
      <header className="flex flex-col items-center relative -top-[73px] text-iron">
        <i
          className="w-full max-w-[260px] aspect-[65/49] overflow-hidden flex items-center justify-center bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url('${country.flags.svg}')` }}
        ></i>
        <h1 className="mt-8 mb-1 border-b border-transparent">
          {country.name.common || country.name.official}
        </h1>
        {country.name.common && country.name.common !== country.name.official && (
          <p className="font-normal">{country.name.official}</p>
        )}
      </header>
      <ul className="relative flex w-full justify-evenly leading-9 -top-9 mb-1">
        <li className="min-h-[52px] px-4 flex items-center rounded-xl bg-shark-light py-[6px]">
          <span className="pr-5 mr-5 border-r border-r-shark">Population</span>
          <span className="text-iron">
            {country.population.toLocaleString("en-US")}
          </span>
        </li>
        <li className="min-h-[52px] px-4 flex items-center rounded-xl bg-shark-light">
          <span className="pr-5 mr-5 border-r border-r-shark">
            Area (km<sup>2</sup>)
          </span>
          <span className="text-iron">
            {country.area.toLocaleString("en-US")}
          </span>
        </li>
      </ul>
      <ul className="w-full">
        <li className="flex justify-between items-center min-h-[68px] border-t border-t-shark-light">
          <span>Capital</span>
          <span className="text-iron">{country.capital.join(", ")}</span>
        </li>
        <li className="flex justify-between items-center min-h-[68px] border-t border-t-shark-light">
          <span>Subregion</span>
          <span className="text-iron">{country.subregion}</span>
        </li>
        <li className="flex justify-between items-center min-h-[68px] border-t border-t-shark-light">
          <span>Language</span>
          <span className="text-iron">
            {Object.values(country.languages).join(", ")}
          </span>
        </li>
        <li className="flex justify-between items-center min-h-[68px] border-t border-t-shark-light">
          <span>Currencies</span>
          <span className="text-iron">
            {Object.values(country.currencies)
              .map((x) => x.name)
              .join(", ")}
          </span>
        </li>
        <li className="flex justify-between items-center min-h-[68px] border-t border-t-shark-light">
          <span>Continents</span>
          <span className="text-iron">{country.continents.join(", ")}</span>
        </li>
        <li>
          <span className="flex items-center border-t border-t-shark-light min-h-[68px]">
            Neighboring Countries
          </span>
          <ul className="flex gap-4 flex-wrap text-iron">
            {country.borders.map((countryCode) => (
              <CountryPreview
                key={countryCode}
                country={countries.find((x) => x.cca3 === countryCode)}
              />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
