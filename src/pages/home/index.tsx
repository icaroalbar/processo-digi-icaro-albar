import { HighLight, ProductList } from "./partials/index";

export default function Home() {
  return (
    <div className="h-screen md:mb-14">
      <HighLight />
      <ProductList />
    </div>
  );
}
