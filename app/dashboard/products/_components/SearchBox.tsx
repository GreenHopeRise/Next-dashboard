"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/dashboard/products?${params.toString()}`);
  }

  return (
    <input
      type="text"
      placeholder="Search products..."
      defaultValue={searchParams.get("search") ?? ""}
      onChange={handleSearch}
      className="border rounded-md px-3 py-2"
    />
  );
}