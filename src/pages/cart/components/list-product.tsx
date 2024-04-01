import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/icon";

interface ListProductProps {
  id: string;
  image: string;
  offer?: string;
  name: string;
  price: string;
  onClick: () => void;
  totalQuantity: () => void;
}

export default function ListProduct({
  id,
  image,
  offer,
  name,
  price,
  onClick,
  totalQuantity,
}: ListProductProps) {
  return (
    <Card
      className="grid grid-cols-3 items-center justify-between rounded-none border-x-transparent border-t-transparent md:flex"
      key={id}
    >
      <CardContent className="max-w-44">
        <img
          src={offer === "HERO" ? "http://placehold.it/300x300/999/CCC" : image}
          width={0}
          height={0}
          alt="Imagem illustrativa"
          className="w-3/4 rounded-lg"
        />
      </CardContent>
      <CardContent>
        <CardTitle className="capitalize">{name}</CardTitle>
        <CardDescription className="capitalize">código {id}</CardDescription>
      </CardContent>
      <CardContent>
        <CardTitle>Quantidade</CardTitle>
        <CardDescription>{totalQuantity}</CardDescription>
      </CardContent>
      <CardContent>
        <CardTitle>Valor unitário</CardTitle>
        <CardDescription>R${price}</CardDescription>
      </CardContent>
      <CardContent>
        <CardTitle>Valor total</CardTitle>
        <CardDescription>R${price * totalQuantity}</CardDescription>
      </CardContent>
      <CardContent>
        <Button onClick={onClick} variant={"ghost"} size={"icon"}>
          <Icon name="Trash2" size={18} />
        </Button>
      </CardContent>
    </Card>
  );
}
