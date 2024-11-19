"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, ReactElement, useRef, useState, useTransition } from "react";
import { Button } from "./ui/button";

const SearchBar: FC = ({}): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const search = () => {
    if (!query) {
      return;
    }
    startTransition(() => {
      router.push(`search?query=${query}`);
    });
  };

  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              inputRef.current?.blur();
            }
            if (e.key === "Enter") {
              search();
            }
          }}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />
        <Button onClick={search} size={"sm"} className="absolute right-0 inset-y-0 h-full rounded-l-none">
          <Search className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
