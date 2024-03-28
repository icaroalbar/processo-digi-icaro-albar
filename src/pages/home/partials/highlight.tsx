import { useFetch } from "@/hooks";

import { Card } from "@/components/ui/card";

interface ProductHighLightImageProps {
  id: number;
  image: string;
  offer: string;
}

export function HighLight() {
  const { data, error } = useFetch("products");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  const productHighLight = data.filter(
    (product: ProductHighLightImageProps) => product.offer === "HERO",
  );

  return (
    <section className="py-10">
      {productHighLight.map((product: ProductHighLightImageProps) => (
        <Card key={product.id} className="container w-full border-none">
          <img
            src={product.image}
            width={0}
            height={0}
            className="w-full rounded-lg"
            alt="Imagem illustrativa"
          />
        </Card>
      ))}
    </section>
  );
}
