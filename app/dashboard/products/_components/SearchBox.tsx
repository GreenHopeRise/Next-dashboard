"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
const handleSearch= useDebouncedCallback((value:string)=>{
    const params = new URLSearchParams(searchParams);

  if (value.trim()) {
    params.set("search", value);
    params.set('page','1')
  } else {
    params.delete("search");
  }

  router.push(`/dashboard/products?${params.toString()}`);
},3000)


  return (
    <input
      type="text"
      placeholder="Search products..."
      defaultValue={searchParams.get("search") ?? ""}
      onChange={(e)=>handleSearch(e.target.value)}
      className="border rounded-md px-3 py-2"
    />
  );
}