import Link from "next/link";

const NavbarMobile = ({ item1, item2, item3 }) => {
  return (
    <div className="flex lg:hidden justify-center items-center gap-3 text-[#fff] text-[17.2px] font-thin bg-primary">
      <Link
        href="#event"
        className="cursor-pointer p-2 hover:border-b border-black"
      >
        {item1}
      </Link>
      <Link
        href="https://www.lesalamamarrakech.com/menu/"
        target="_blank"
        className="cursor-pointer p-2 hover:border-b border-black"
      >
        {item2}
      </Link>
      <Link
        href="#gallery"
        className="cursor-pointer p-2 hover:border-b border-black"
      >
        {item3}
      </Link>
    </div>
  );
};

export default NavbarMobile;
