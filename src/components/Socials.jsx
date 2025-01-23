import Link from "next/link";
import {
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareEnvelope,
} from "react-icons/fa6";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="hidden fixed top-[50%] left-7 text-color_1 lg:flex flex-col justify-center items-center gap-5 z-50">
      <Link target="_blank" href="mailto:reservations@lesalamamarrakech.com">
        <FaSquareEnvelope size={30} className="cursor-pointer" />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/lesalamamarrakech/">
        <FaSquareInstagram size={30} className="cursor-pointer" />
      </Link>
      <Link target="_blank" href="http://wa.me/212675480018">
        <FaSquareWhatsapp size={30} className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Socials;
