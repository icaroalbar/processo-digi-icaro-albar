import { useFetch } from "@/hooks";

import { Card, CardContent } from "@/components/ui/card";

interface ProductHighLightProps {
  highlight: boolean;
}

interface ProductHighLightImageProps {
  id: number;
  image: string;
}

export function HighLight() {
  const { data, error } = useFetch("products");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  const productHighLight = data.filter(
    (product: ProductHighLightProps) => product.highlight === true,
  );

  return (
    <Card className="container max-w-[1024px] border-none">
      {productHighLight.map((product: ProductHighLightImageProps) => (
        <CardContent
          key={product.id}
          className="flex items-center justify-center overflow-hidden"
        >
          <img
            src={product.image}
            width={1024}
            alt="Imagem illustrativa"
            className="rounded-lg"
          />
        </CardContent>
      ))}
    </Card>
  );
}
