import DataTable from "./_components/DataTable";
import SearchBox from "./_components/SearchBox";
import { getProducts } from "./_services/getProducts";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function ProductsDemoPage({
  searchParams,
}: Props) {
  const { search = "" } = await searchParams;

  const products = await getProducts(search);

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Products Demo
      </h1>

      <SearchBox />

      <DataTable products={products} />
    </div>
  );
}