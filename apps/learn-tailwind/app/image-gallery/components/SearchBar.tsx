import SearchIcon from "@/app/image-gallery/components/SearchIcon";
import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (!e.nativeEvent.isComposing && e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-between border-b">
      <input
        className="ml-6 border-none placeholder:font-thin focus:outline-none md:w-80"
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={handleSubmit}>
        <SearchIcon />
      </button>
    </div>
  );
}
