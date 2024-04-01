import { useFetch } from "@/hooks";
import { ProductItem } from "@/pages/home/components/product-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  offer?: string;
  image: string;
}

export function ProductList() {
  const { data, error } = useFetch("http://localhost:3001/products/");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="container max-w-7xl"
    >
      <CarouselContent>
        {data.map((product: ProductProps) => (
          <CarouselItem key={product.id} className="lg:basis-2/2 md:basis-1/5">
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              offer={product.offer}
              image={product.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
