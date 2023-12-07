"use client";

import _ from "lodash";
import { useRouter } from "next/navigation";
import { KeyboardEventHandler, MouseEventHandler } from "react";

import { MainProps } from "@/fragments/main";

export interface CountriesTableProps extends MainProps {
  rev: boolean;
  sortFn: (propName: string) => MouseEventHandler<HTMLTableCellElement>;
}

function CountriesTable({ sortFn, countries, rev }: CountriesTableProps) {
  const { push } = useRouter();
  const onClick: (country: string) => MouseEventHandler<HTMLTableRowElement> =
    (country: string) => (e) => {
      push(`/${_.kebabCase(country)}`, { shallow: true });
    };

  const onKeyDown: (
    country: string
  ) => KeyboardEventHandler<HTMLTableRowElement> = (country: string) => (e) => {
    e.key === "Enter" && push(`/${_.kebabCase(country)}`, { shallow: true });
  };

  const shownCountries =
    (Array.isArray(countries) &&
      (rev ? [...countries].reverse() : countries)) ||
    [];

  return countries ? (
    <div className="flex-grow relative overflow-auto">
      <table className="w-full absolute">
        <thead className="sticky top-0 bg-shark">
          <tr>
            <th>Flag</th>
            <th onClick={sortFn("name")}>Name</th>
            <th onClick={sortFn("population")}>Population</th>
            <th onClick={sortFn("area")}>
              Area (km<sup>2</sup>)
            </th>
            <th onClick={sortFn("region")}>Region</th>
          </tr>
        </thead>
        <tbody>
          {shownCountries.map(({ flag, name, population, area, region }) => (
            <tr
              role="link"
              tabIndex={0}
              key={name.official}
              className="h-9 py-px hover:underline cursor-pointer"
              onClick={onClick(name.common || name.official)}
              onKeyDown={onKeyDown(name.common || name.official)}
            >
              <td>
                <i className="inline-block not-italic text-[50px] leading-[38px]">
                  {flag}
                </i>
              </td>
              <td>{name.common || name.official}</td>
              <td>{population}</td>
              <td>{area}</td>
              <td>{region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}

export default CountriesTable;
