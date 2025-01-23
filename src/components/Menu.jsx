import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="h-full lg:h-screen w-full flex flex-col-reverse lg:flex-row justify-center items-center px-8 lg:px-28 gap-5 lg:gap-10 py-8 lg:py-0 bg-color_3">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 text-color_1  text-center">
        <h1 className="text-[40px] leading-[40px] font-extralight">Menu</h1>
        <p className="font-thin text-[16px] leading-[24px] px-4 text-[#000000]">
          {`Notre menu est un mélange savoureux de saveurs marocaines et internationales. Des tajines traditionnels aux plats gastronomiques,`}
        </p>
        <p className="font-thin text-[16px] leading-[24px] px-4 text-[#000000]">
          {`chaque assiette est préparée avec des ingrédients frais, offrant un véritable festin pour vos sens.`}
        </p>
        <Link
          href="/menu/menu_palace_fr.pdf"
          target="_blank"
          className="bg-color_1 text-white px-4 py-2"
        >
          Voir le menu
        </Link>
      </div>
      <div className="w-full h-full py-0 lg:py-24">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/platmobile_muezyg"
          alt="le salama menu"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Menu;
