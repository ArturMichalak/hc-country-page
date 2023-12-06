import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef, InputHTMLAttributes } from 'react';

import searchImage from '@/public/search.svg';

const Search = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, "placeholder" | "type">
>(function Search({ className, ...props }, ref) {
  return (
    <form className="flex bg-shark-light rounded-xl px-2 h-11" role="search">
      <button className="mr-3" aria-hidden disabled>
        <Image src={searchImage} role="presentation" alt="" />
      </button>
      <input
        ref={ref}
        type="search"
        className={classNames("w-72 pr-px", className)}
        placeholder="Search by Name, Region, Subregion"
        {...props}
      />
    </form>
  );
});

export default Search;
