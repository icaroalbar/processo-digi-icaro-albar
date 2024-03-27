interface ProductItemProps {
  name: string;
  price: number;
  offer?: string;
  image: string;
}

export function ProductItem({ name, price, offer, image }: ProductItemProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm">{price}</p>
      <p className="text-sm">{offer}</p>
      <p className="text-sm">{image}</p>
    </div>
  );
}
