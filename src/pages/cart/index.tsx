import { useFetch } from "@/hooks";
import { Button } from "@/components/ui/button";
import ListProduct from "./components/list-product";
import axios from "axios";
import { Link } from "react-router-dom";
import Icon from "@/components/icon";

export default function Cart() {
  const { data, error } = useFetch(`http://localhost:3002/cart/`);
  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  const deleteCartItem = async (productId) => {
    try {
      await axios.delete(`http://localhost:3002/cart/${productId}`);
    } catch (error) {
      console.error("Erro ao excluir o item do carrinho:", error);
    }
  };

  const uniqueProducts = [];
  const uniqueProductIds = [];
  data.forEach((product) => {
    if (!uniqueProductIds.includes(product.id)) {
      uniqueProductIds.push(product.id);
      uniqueProducts.push(product);
    }
  });

  let totalPrice = 0;
  uniqueProducts.forEach((product) => {
    const totalQuantity = data.filter((p) => p.id === product.id).length;
    totalPrice += product.price * totalQuantity;
  });

  return (
    <section className="container flex flex-col gap-y-3 py-8 md:h-screen">
      <Button asChild variant={"ghost"} size={"sm"} className="w-32">
        <Link className="mb-5 block text-end" to={"/"}>
          <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
          Página inicial
        </Link>
      </Button>

      {uniqueProducts.map((product) => {
        const totalQuantity = data.filter((p) => p.id === product.id).length;

        return (
          <ListProduct
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            totalQuantity={totalQuantity}
            key={product.id}
            offer={product.offer}
            onClick={() => deleteCartItem(product.id)} // Passando o ID do produto para a função de exclusão
          />
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
