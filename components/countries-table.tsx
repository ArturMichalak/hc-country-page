"use client";

import { MouseEventHandler, useEffect, useState } from "react";

import { Country } from "@/helpers/sort";

export interface CountriesTableProps {
  countries: Country[];
  rev: boolean;
  onHeaderClickSort: (
    propName: string
  ) => MouseEventHandler<HTMLTableCellElement>;
}

function CountriesTable({
  onHeaderClickSort,
  countries,
  rev
}: CountriesTableProps) {

  const onClick: MouseEventHandler<HTMLTableRowElement> = (e) => {};

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
            <th onClick={onHeaderClickSort("name")}>Name</th>
            <th onClick={onHeaderClickSort("population")}>Population</th>
            <th onClick={onHeaderClickSort("area")}>
              Area (km<sup>2</sup>)
            </th>
            <th onClick={onHeaderClickSort("region")}>Region</th>
          </tr>
        </thead>
        <tbody>
          {shownCountries.map(({ flag, name, population, area, region }) => (
            <tr
              role="link"
              className="h-9 py-px hover:underline cursor-pointer"
              key={name.official}
              onClick={onClick}
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
