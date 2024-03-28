import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks";
import Icon from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Product() {
  const { id } = useParams();
  const { data, error } = useFetch(`products/${id}`);

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="container">
      <div className="container grid grid-cols-2 gap-4 py-10">
        <div className="col-span-2 flex justify-center md:col-span-1">
          <img
            src={
              data.offer === "HERO"
                ? "http://placehold.it/300x300/999/CCC"
                : data.image
            }
            width={0}
            height={0}
            alt="Imagem illustrativa"
            className="w-3/4 rounded-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-end text-sm capitalize text-muted-foreground">
            código: {data.id}
          </p>
          <h2 className="mb-2 scroll-m-20 border-b pb-2 text-3xl font-semibold uppercase tracking-tight first:mt-0">
            {data.name}
          </h2>
          <Badge className={`${!data.offer && "hidden"}`}>
            {data.offer === "HERO" ? (
              "Lançamento"
            ) : (
              <>
                <Icon name="ArrowDown" size={16} /> 25%
              </>
            )}
          </Badge>
          <div className="mb-4 flex gap-x-4">
            <h1 className="flex scroll-m-20 items-start pt-6 text-4xl font-semibold tracking-tight lg:text-5xl">
              <span className="pr-2 pt-1 text-lg">R$</span>
              {data.price}
            </h1>
            <h1
              className={`flex scroll-m-20 items-start pt-6 text-4xl font-medium tracking-tight text-muted line-through lg:text-5xl ${!data.offer && "hidden"} ${data.offer === "HERO" && "hidden"}`}
            >
              <span className="pr-2 pt-1 text-lg">R$</span>
              {(data.price * 1.25).toFixed(2)}
            </h1>
          </div>
          <Button className="flex items-center gap-x-3">
            <Icon name="ShoppingCart" />
            Adicionar ao carrinho
          </Button>
          <p className="leading-7 [&:not(:first-child)]:mt-6">{data.info}</p>
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
