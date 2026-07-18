export default async function getProducts(search: string) {
  const url = search
    ? `https://dummyjson.com/products/search?q=${search}`
    : `https://dummyjson.com/products`;

  const response = await fetch(url);
  const data = await response.json();

  return data.products;
}