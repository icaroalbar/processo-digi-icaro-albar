import Icon from "@/components/icon";

export default function Footer() {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div className="flex w-full justify-center bg-muted py-2">
      <div className="flex items-center gap-x-2">
        <span>{currentYear} - Feito com</span> <Icon name="Heart" size={18} />
        por
        <a
          target="_blank"
          href={`https://www.linkedin.com/in/icaro-albar/`}
          className="font-semibold capitalize hover:underline"
        >
          icaro albar
        </a>
      </div>
    </div>
  );
}
