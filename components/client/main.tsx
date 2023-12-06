"use client";

import {
  useEffect,
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useDeferredValue,
  useRef,
  useState,
} from "react";

import sort, { Country } from "@/helpers/sort";
import usePrevious from "@/utils/hooks/usePrevious";

import CountriesTable, { CountriesTableProps } from "../countries-table";
import Search from "../search";
import RegionsFilter from "./regions-filter";
import Sort from "./sort";
import StatusFilter from "./status-filter";

export type SortType = "Population" | "Area" | "Region" | "Name";
export type CountryProp = keyof Country;

export const defaultSortKey: CountryProp = "population";

const filtersLabels = {
  unMember: "Member of the United Nations",
  independent: "Independent",
};

export default function Main({
  countries,
}: Omit<CountriesTableProps, "onHeaderClickSort" | "rev">) {
  const sortBy = useRef<CountryProp>(defaultSortKey);
  const regions = useRef({
    Americas: false,
    Antarctic: false,
    Africa: false,
    Asia: false,
    Europe: false,
    Oceania: false,
  });

  const filters = useRef({
    unMember: false,
    independent: false,
  });

  const search = useRef("");

  type Region = keyof typeof regions.current;
  type Filter = keyof typeof filters.current;

  const [shownCountriesPreload, setShownCountries] = useState(countries);
  const shownCountries = useDeferredValue(shownCountriesPreload);

  const prev = usePrevious(sortBy.current, shownCountries);

  const filterCountries = useCallback((countries: Country[]) => {
    if (filters.current.independent)
      countries = countries.filter((x) => x.independent);
    if (filters.current.unMember)
      countries = countries.filter((x) => x.unMember);

    if (Object.values(regions.current).some((x) => x)) {
      const keys = Object.keys(regions.current).filter(
        (key) => regions.current[key as Region]
      ) as Region[];
      countries = countries.filter((x) =>
        keys.some((area) => area === x.region)
      );
    }

    if (search.current.length) {
      const searchPhrase = search.current.toLowerCase().split(" ");
      countries = countries.filter((x) =>
        searchPhrase.every(
          (word) =>
            x.name.common.toLowerCase().includes(word) ||
            x.name.official.toLowerCase().includes(word) ||
            x.region.toLowerCase().includes(word) ||
            x.subregion?.toLowerCase().includes(word)
        )
      );
    }

    return countries;
  }, []);

  const sortCountries = useCallback(
    (countries: Country[]) => sort(countries, sortBy.current),
    []
  );

  const onSortChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    sortBy.current = (e.target.value[0].toLowerCase() +
      e.target.value.slice(1)) as CountryProp;
    setShownCountries([...sortCountries(shownCountriesPreload)]);
  };

  const onRegionToggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    regions.current[e.target.id as Region] = e.target.checked;
    setShownCountries([...sortCountries(filterCountries(countries))]);
  };

  const onStatusChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    filters.current[e.target.id as Filter] = e.target.checked;
    setShownCountries([...sortCountries(filterCountries(countries))]);
  };

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    search.current = e.target.value;
    setShownCountries([...sortCountries(filterCountries(countries))]);
  };

  const [rev, setRev] = useState(false);

  const onHeaderClickSort: (
    propName: string
  ) => MouseEventHandler<HTMLTableCellElement> = (propName) => (e) => {
    sortBy.current = (propName[0].toLowerCase() +
      propName.slice(1)) as CountryProp;

    setShownCountries([...sortCountries(filterCountries(countries))]);
  };

  useEffect(() => {
    if (prev) {
      if (prev === sortBy.current) setRev((r) => !r);
      else setRev(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shownCountries]);

  return (
    <div className="flex flex-col flex-grow">
      <nav className="flex items-center justify-between mb-10">
        <span>
          Found {shownCountries.length}{" "}
          {shownCountries.length !== 1 ? "countries" : "country"}
        </span>
        <Search autoFocus value={search.current} onChange={onSearchChange} />
      </nav>
      <div className="flex-grow flex items-stretch">
        <form className="max-w-[260px] mr-8 flex flex-col gap-8">
          <Sort sortBy={sortBy.current} sortFn={onSortChange} />
          <RegionsFilter
            toggleState={regions.current}
            toggleFn={onRegionToggle}
          />
          <StatusFilter
            labels={filtersLabels}
            toggleState={filters.current}
            toggleFn={onStatusChange}
          />
        </form>
        <CountriesTable
          rev={rev}
          countries={shownCountries}
          onHeaderClickSort={onHeaderClickSort}
        />
      </div>
    </div>
  );
}
