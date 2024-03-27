import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import Icon from "@/components/icon";

import MenuUser from "./menu-user";

export function Nav() {
  return (
    <nav className="container flex items-center justify-between border-b py-6">
      <MenuUser />

      <h4 className="scroll-m-20 text-xl font-bold uppercase tracking-tight">
        Processo Digi
      </h4>
      <div className="space-x-2">
        <Button variant="outline" size="icon" className="border-none">
          <Icon name="ShoppingCart" className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
