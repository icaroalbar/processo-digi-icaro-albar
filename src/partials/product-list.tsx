import { useFetch } from "@/hooks";
import { ProductItem } from "@/components/product-item";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  offer?: string;
  image: string;
}

export default function ProductList() {
  const { data, error } = useFetch("products");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5">
      {data.map((product: ProductProps) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          offer={product.offer}
          image={product.image}
        />
      ))}
    </div>
  );
}
