"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      defaultValue={searchParams.get("sort") ?? ""}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-md border px-3 py-2"
    >
      <option value="">Sort By</option>
      <option value="title">Title</option>
      <option value="price">Price</option>
    </select>
  );
}