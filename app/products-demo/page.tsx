import DataTable from "./_components/DataTable";
import { getProducts } from "./_services/getProducts";

export default async function ProductsDemoPage() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Products Demo
      </h1>

      <DataTable products={products} />
    </div>
  );
}