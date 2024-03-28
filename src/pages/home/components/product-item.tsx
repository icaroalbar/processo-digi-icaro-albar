import { Link } from "react-router-dom";
import Icon from "../../../components/icon";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
  offer?: string;
  image: string;
}

export function ProductItem({
  id,
  name,
  price,
  offer,
  image,
}: ProductItemProps) {
  return (
    <Card className="container space-y-4 border-none p-0">
      <CardHeader className="relative p-0">
        <Badge className={`absolute left-4 top-4 ${!offer && "hidden"}`}>
          {offer === "HERO" ? (
            "Lançamento"
          ) : (
            <>
              <Icon name="ArrowDown" size={16} /> 25%
            </>
          )}
        </Badge>
        <img
          src={offer === "HERO" ? "http://placehold.it/300x300/999/CCC" : image}
          width={0}
          height={0}
          alt="Imagem illustrativa"
          className="w-auto max-w-56 rounded-lg"
        />
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="text-lg capitalize">{name}</CardDescription>
        <div className="flex justify-between">
          <CardTitle className="flex items-center justify-between gap-x-3">
            <div>
              <div className={`text-muted line-through ${!offer && "hidden"}`}>
                <span className="mr-1">R$</span>
                {(price * 1.25).toFixed(2)}
              </div>
              <div>
                <span className="mr-1">R$</span>
                {price}
              </div>
            </div>
          </CardTitle>
          <Button size={"sm"} asChild>
            <Link to={`/product/${id}`}>Saiba mais</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
