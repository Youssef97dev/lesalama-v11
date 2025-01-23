import Image from "next/image";
import Link from "next/link";

const Footer = ({ title1, title2 }) => {
  return (
    <div className="h-full lg:h-[60vh] w-full bg-color_3 flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-8 text-center py-5 lg:py-0 px-10 lg:px-28">
      <div className="w-full h-full flex flex-col justify-center items-center font-thin text-[16px] leading-[24px] text-color_1 gap-2 lg:gap-5">
        <h1 className="font-medium">{title1}</h1>
        <h1 className="font-medium">{`Le Salama Marrakech Restaurant.`}</h1>
        <h1 className="font-medium">{title2}</h1>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Link href="/">
          <Image
            src="/logo-salama-humberger.png"
            alt="le salama logo"
            width={200}
            height={200}
            className="cursor-pointer lg:block hidden"
          />
          <Image
            src="/logo-salama-humberger.png"
            alt="le salama logo"
            width={100}
            height={100}
            className="cursor-pointer lg:hidden block"
          />
        </Link>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center text-[16px] leading-[24px] text-color_1 gap-2 lg:gap-5 font-medium">
        <h1>{`40 Rue des Banques, Marrakech 40000, Maroc`}</h1>
        <h1>{`reservations@lesalamamarrakech.com`}</h1>
        <h1>{`+212 675-480018`}</h1>
      </div>
    </div>
  );
};

export default Footer;
