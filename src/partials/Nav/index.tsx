import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import Icon from "@/components/icon";

import MenuUser from "./menu-user";
import { useFetch } from "@/hooks/useFetch";

export function Nav() {
  const { data } = useFetch("http://localhost:3002/cart");

  const cart = data ? data.length : 0;

  return (
    <nav className="container flex items-center justify-between border-b py-6">
      <MenuUser />

      <h4 className="scroll-m-20 text-xl font-bold uppercase tracking-tight">
        Processo Digi
      </h4>
      <div className="space-x-2">
        <Button asChild variant="outline" size="icon" className=" border-none">
          <a href="/cart" className="relative">
            <div
              className={`${cart < 1 && "hidden"} absolute -right-1 top-0 flex h-5 w-5 items-center justify-center  rounded-full bg-red-600 font-semibold text-white opacity-100`}
            >
              {cart}
            </div>
            <Icon name="ShoppingCart" className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
