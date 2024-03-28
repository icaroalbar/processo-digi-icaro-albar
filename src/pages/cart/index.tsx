import { useFetch } from "@/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { data, error } = useFetch(`http://localhost:3002/cart/`);
  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  // Filtrar os dados para remover produtos duplicados com base no ID
  const uniqueProducts = [];
  const uniqueProductIds = [];
  data.forEach((product: any) => {
    if (!uniqueProductIds.includes(product.id)) {
      uniqueProductIds.push(product.id);
      uniqueProducts.push(product);
    }
  });

  // Calcular o valor total do carrinho
  let totalPrice = 0;
  uniqueProducts.forEach((product: any) => {
    const totalQuantity = data.filter((p: any) => p.id === product.id).length;
    totalPrice += product.price * totalQuantity;
  });

  return (
    <section className="container flex flex-col gap-y-3 py-10">
      {uniqueProducts.map((product: any) => {
        // Calcular a quantidade total de cada produto no carrinho
        const totalQuantity = data.filter(
          (p: any) => p.id === product.id,
        ).length;

        return (
          <Card
            className="flex items-center justify-between rounded-none border-x-transparent border-t-transparent"
            key={product.id}
          >
            <CardContent className="max-w-44">
              <img
                src={
                  product.offer === "HERO"
                    ? "http://placehold.it/300x300/999/CCC"
                    : product.image
                }
                width={0}
                height={0}
                alt="Imagem illustrativa"
                className="w-3/4 rounded-lg"
              />
            </CardContent>
            <CardContent>
              <CardTitle className="capitalize">{product.name}</CardTitle>
              <CardDescription className="capitalize">
                código {product.id}
              </CardDescription>
            </CardContent>
            <CardContent>
              <CardTitle>Quantidade</CardTitle>
              <CardDescription>{totalQuantity}</CardDescription>
            </CardContent>
            <CardContent>
              <CardTitle>Valor unitário</CardTitle>
              <CardDescription>R${product.price}</CardDescription>
            </CardContent>
            <CardContent>
              <CardTitle>Valor total</CardTitle>
              <CardDescription>
                R${product.price * totalQuantity}
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
      <div className="flex items-center justify-around">
        <div>
          <h2 className="text-xl font-bold">Valor Total do Carrinho:</h2>
          <p className="text-lg font-semibold">R${totalPrice.toFixed(2)}</p>
        </div>
        <Button>Finalizar compra</Button>
      </div>
    </section>
  );
}
