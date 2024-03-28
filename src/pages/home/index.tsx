import { HighLight, ProductList } from "./partials/index";

export default function Home() {
  return (
    <div className="h-screen md:mb-16">
      <HighLight />
      <ProductList />
    </div>
  );
}
