import Icon from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductDetailsProps {
  id: string;
  name: string;
  offer?: string;
  price: number;
  info: string;
}

export default function ProductDetails({
  id,
  name,
  offer,
  price,
  info,
}: ProductDetailsProps) {
  return (
    <div>
      <Button asChild variant="ghost">
        <div className="flex items-center gap-x-2 capitalize">
          <Icon name="ArrowLeft" size={16} /> <Link to={`/`}>voltar</Link>
        </div>
      </Button>
      <p className="text-end text-sm capitalize text-muted-foreground">
        código: {id}
      </p>
      <h2 className="mb-2 scroll-m-20 border-b pb-2 text-3xl font-semibold uppercase tracking-tight first:mt-0">
        {name}
      </h2>
      <Badge className={`${!offer && "hidden"}`}>
        {offer === "HERO" ? (
          "Lançamento"
        ) : (
          <>
            <Icon name="ArrowDown" size={16} /> 25%
          </>
        )}
      </Badge>
      <div className="mb-4 ">
        <div className="flex gap-x-4">
          <h1 className="flex scroll-m-20 items-start pt-6 text-4xl font-semibold tracking-tight lg:text-5xl">
            <span className="pr-2 pt-1 text-lg">R$</span>
            {price}
          </h1>
          <h1
            className={`flex scroll-m-20 items-start pt-6 text-4xl font-medium tracking-tight text-muted line-through lg:text-5xl ${!offer && "hidden"} ${offer === "HERO" && "hidden"}`}
          >
            <span className="pr-2 pt-1 text-lg">R$</span>
            {(price * 1.25).toFixed(2)}
          </h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{info}</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          ratione necessitatibus vero nam ipsum nulla recusandae totam. At
          provident earum excepturi natus maiores, enim ad saepe ipsa numquam.
          Dolorum, nemo.
        </p>
      </div>
    </div>
  );
}
