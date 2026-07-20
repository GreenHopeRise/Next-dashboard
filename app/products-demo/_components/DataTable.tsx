// import { Product } from "@/app/types/products";
import Image from "next/image";
import { Product } from "../types/products";
import { productColumns } from "../_data/columns";
// import { Button } from "@base-ui/react";
// import { Product } from "../_types/product";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";

type DataTableProps = {
  products: Product[];
};

export default function DataTable({ products }: DataTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          {productColumns.map((p) => (
            <th key={p.key} className="p-3 text-left">
              {p.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b hover:bg-gray-50">
            <td className="p-3">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={50}
                height={50}
                className="rounded-md"
              />
            </td>

            <td className="p-3">{product.title}</td>

            <td className="p-3">${product.price}</td>

            <td className="p-3">{product.stock}</td>

            <td className="p-3">{product.category}</td>
<td className="space-x-2">
  <Button size="icon" variant="outline">
    <Eye className="h-4 w-4" />
  </Button>

  <Button size="icon" variant="outline">
    <Pencil className="h-4 w-4" />
  </Button>

  <Button size="icon" variant="destructive">
    <Trash2 className="h-4 w-4" />
  </Button>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
