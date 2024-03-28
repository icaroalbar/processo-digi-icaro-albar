import { useFetch } from "@/hooks";
import { ProductItem } from "@/pages/home/components/product-item";
import { useEffect, useRef, useState } from "react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  offer?: string;
  image: string;
}

export function ProductList() {
  const { data, error } = useFetch("http://localhost:3001/products/");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isMouseDown) return;
      container.scrollLeft -= event.movementX;
      event.preventDefault();
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseDown]);

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <section
      ref={containerRef}
      className="container flex w-full cursor-grabbing gap-4 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden"
    >
      {data.map((product: ProductProps) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          offer={product.offer}
          image={product.image}
        />
      ))}
    </section>
  );
}
