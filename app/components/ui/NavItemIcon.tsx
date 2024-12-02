'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type NavItemIconProps = {
  category: {
    id: number;
    name: string;
    slug: string;
  };
};

const NavItemIcon = ({ category }: NavItemIconProps) => {
  // Obtenemos los parámetros de la URL, params como props no esta disponible en componente solo en page y layout
  const params = useParams<{category: string}>();

  return (
    <div
      className={`${category.slug === params.category ? 'bg-gray-100 border-r-8 border-r-amber-500' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
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
