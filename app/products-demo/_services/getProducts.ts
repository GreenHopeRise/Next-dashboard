// import { Product } from "../_types/product";

import { Product } from "../types/products";

export async function getProducts(
  search = ""
): Promise<Product[]> {
  const url = search
    ? `https://dummyjson.com/products/search?q=${search}`
    : `https://dummyjson.com/products`;

  const res = await fetch(url);

  const data = await res.json();

  return data.products;
}