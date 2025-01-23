import Image from "next/image";
import Link from "next/link";

const Bar = () => {
  return (
    <div className="h-full lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center px-8 lg:px-28 gap-5 lg:gap-10 py-8 lg:py-0">
      <div className="w-full h-full py-0 lg:py-24">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-2_kcekby"
          alt="le salama bar"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5  text-center text-white">
        <h1 className="text-[40px] leading-[40px] font-extralight">Le Bar</h1>
        <p className="font-thin text-[16px] leading-[24px] px-4">
          {`Au Salama, notre bar propose une expérience unique avec une sélection de cocktails exquis, de vins raffinés et de boissons locales. C’est l’endroit idéal pour se détendre, socialiser et profiter du charme de Marrakech dans une ambiance animée.`}
        </p>
        <Link href="#" className="bg-white text-color_1 px-4 py-2">
          Voir le menu
        </Link>
      </div>
    </div>
  );
};

export default Bar;
