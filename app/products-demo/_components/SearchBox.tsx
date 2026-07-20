'use client'

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function SearchBox() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('search')??'')
    function handleSearch (){

        const params = new URLSearchParams(searchParams.toString())
        if (search) {
            params.set('search', search)           
        }else{
            params.delete('search')
        }
        router.push(`/products-demo/?${params.toString()}`)
    }
  return (
    <div className="mb-6 flex gap-2">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="rounded-md border px-3 py-2"
      />

      <button
        onClick={handleSearch}
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Search
      </button>
    </div>
    )}
