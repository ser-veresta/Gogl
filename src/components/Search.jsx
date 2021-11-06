import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Links } from "./Links";

import { useResultContext } from "../context/ResultContextProvider";

export const Search = () => {
  const [text, setText] = useState("Elon Musk");
  const { setSearch } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearch(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 ml-72 sm:-mt-12 mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 rounded-full border shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Seach Gogl"
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={() => setText("")}>
          X
        </button>
      )}
      <Links />
    </div>
  );
};
