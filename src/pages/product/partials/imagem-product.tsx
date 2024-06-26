interface ImagemProductProps {
  image: string;
  offer: string;
}

export default function ImagemProduct({ image, offer }: ImagemProductProps) {
  return (
    <div className="col-span-2 flex justify-center md:col-span-1">
      <img
        src={offer === "HERO" ? "http://placehold.it/300x300/999/CCC" : image}
        width={0}
        height={0}
        alt="Imagem illustrativa"
        className="w-3/4 rounded-lg"
      />
    </div>
  );
}
