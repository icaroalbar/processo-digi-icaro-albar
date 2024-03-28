import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Link } from "react-router-dom";

export async function AddToCart(data: any) {
  await axios.post("http://localhost:3002/cart", data);
  toast({
    title: "Produto adicionado!",
    description: "Clique no carrinho ao lado para finalizar suas compras.",
    action: (
      <Button variant={"outline"} asChild>
        <Link to="/">
          <Icon name="ShoppingCart" />
        </Link>
      </Button>
    ),
  });
}
