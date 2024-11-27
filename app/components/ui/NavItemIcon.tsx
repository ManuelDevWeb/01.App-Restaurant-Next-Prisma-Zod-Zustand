import Image from "next/image";
import Link from "next/link";

type NavItemIconProps = {
  category: {
    id: number;
    name: string;
    slug: string;
  };
};

const NavItemIcon = ({ category }: NavItemIconProps) => {
  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className="w-12 h-12 relative">
        <Image
          fill
          src={`/icon_${category.slug}.svg`}
          alt={`Icono de ${category.name}`}
        />
      </div>
      <Link href={`/order/${category.slug}`} className="text-xl font-bold">{category.name}</Link>
    </div>
  );
};

export default NavItemIcon;
