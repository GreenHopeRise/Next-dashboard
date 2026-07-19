import { Product } from "@/app/types/products";
import SearchBox from "./_components/SearchBox";
import getProducts from "@/app/services/products";
import DeleteProductDialog from "./_components/DeleteProductDialog";

type ProductsPageProps = {
  searchParams: Promise<{
    search?: string;
    // page?: string;
  }>;
};
export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { search=''} = await searchParams;
  const product:Product[]= await getProducts(search)
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Products</h1>
      <DeleteProductDialog/>

      <SearchBox />


      <ol className="space-y-2" >
        {product.map((p) => (
          <li key={p.id}>
            {p.title}
          </li>
        ))}
      </ol>
    </div>
  );
}
