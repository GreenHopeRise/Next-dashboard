import DataTable from "./_components/DataTable";
import SearchBox from "./_components/SearchBox";
import SortSelect from "./_components/SortSelect";
import { getProducts } from "./_services/getProducts";

type Props = {
  searchParams: Promise<{
    search?: string;
    sort?: string;
  }>;
};

export default async function ProductsDemoPage({
  searchParams,
}: Props) {
  const { search = "" , sort= ''} = await searchParams;

  const products = await getProducts(search);
  if (sort === "price") {
  products.sort((a, b) => a.price - b.price);
}

if (sort === "title") {
  products.sort((a, b) => a.title.localeCompare(b.title));
}

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Products Demo
      </h1>
      <p>Search : {search}</p>
<p>Sort : {sort}</p>

      <SearchBox />
      <SortSelect/>

      <DataTable products={products} />
    </div>
  );
}