import Image from "next/image";

const Events = () => {
  return (
    <div
      id="event"
      className="h-full lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center px-8 lg:px-28 gap-5 lg:gap-10 py-8 lg:py-0"
    >
      <div className="w-full h-full py-0 lg:py-24 ">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/po692czexw9alolb2qll"
          alt="le palace architecture"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-[40px] leading-[40px] font-extralight">
          Evénements
        </h1>
        <br />
        <p className="font-extralight text-[16px] leading-[24px] px-4">
          {`Le Salama organise des événements animés tous les soirs, allant de spectacles de danse orientale captivants à des performances musicales en direct.`}
        </p>
        <p className="font-thin text-[16px] leading-[24px] px-4">
          {`Que ce soit pour une célébration spéciale ou une soirée détendue, chaque moment est inoubliable.`}
        </p>
      </div>
    </div>
  );
};

export default Events;
