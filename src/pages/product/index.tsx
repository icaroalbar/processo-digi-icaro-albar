import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks";
import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import ImagemProduct from "./partials/imagem-product";
import ProductDetails from "./partials/product-details";

export default function Product() {
  const { id } = useParams();
  const { data, error } = useFetch(`products/${id}`);

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="container pb-16 md:h-screen">
      <div className="container grid grid-cols-2 gap-4 py-10">
        <ImagemProduct image={data.image} offer={data.offer} />
        <div className="col-span-2 flex flex-col justify-between md:col-span-1">
          <ProductDetails
            id={data.id}
            name={data.name}
            offer={data.offer}
            price={data.price}
            info={data.info}
          />
          <Button className="flex items-center gap-x-3">
            <Icon name="ShoppingCart" />
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {data.detail} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis perspiciatis optio, suscipit nisi deserunt sed laboriosam
          explicabo laudantium libero, sapiente inventore provident quos omnis
          excepturi nam natus ea aperiam deleniti.
        </p>
      </div>
    </div>
  );
}
