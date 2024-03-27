import { ModeToggle } from "./mode-toggle";

export function Nav() {
  return (
    <nav className="container flex justify-between py-6">
      <p>logo</p>
      <ModeToggle />
    </nav>
  );
}
