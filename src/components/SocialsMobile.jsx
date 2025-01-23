import Link from "next/link";
import {
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareEnvelope,
} from "react-icons/fa6";
import Image from "next/image";

const SocialsMobile = ({ lang }) => {
  return (
    <div className="w-full flex justify-between items-center bg-color_3 text-color_1 px-10  lg:hidden">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo-salama.png"
          alt="le salama logo"
          width={75}
          height={75}
          className="cursor-pointer"
        />
      </Link>
      <div className="w-full flex justify-end items-center">
        <Link target="_blank" href="mailto:reservations@lesalamamarrakech.com">
          <FaSquareEnvelope size={25} className="cursor-pointer" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/lesalamamarrakech/"
        >
          <FaSquareInstagram size={25} className="cursor-pointer" />
        </Link>
        <Link target="_blank" href="http://wa.me/212675480018">
          <FaSquareWhatsapp size={25} className="cursor-pointer" />
        </Link>
        {lang === "en" ? (
          <Link href="/" className="pl-3">
            <img src="/france.png" className="w-8 h-8" />
          </Link>
        ) : (
          <Link href="/en" className="pl-3">
            <img src="/english.png" className="w-8 h-8" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SocialsMobile;
