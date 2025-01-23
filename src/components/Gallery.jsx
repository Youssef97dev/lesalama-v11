"use client";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1731148689/Salama/yakitd32v7jwvcvm45s2.jpg",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/yakitd32v7jwvcvm45s2.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1731148691/Salama/icfrcmy3sxst4bobsp5r.jpg",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/icfrcmy3sxst4bobsp5r.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1731148691/Salama/d1gdfswhhqvzjnpa6lng.jpg",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/d1gdfswhhqvzjnpa6lng.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/dfxqvtqmzk0eog6mwphj",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/dfxqvtqmzk0eog6mwphj",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/lbhwn2jkfj2egatvhlku",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/lbhwn2jkfj2egatvhlku",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/aed9h6xneawaaqh9aqz4",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/aed9h6xneawaaqh9aqz4",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/yakitd32v7jwvcvm45s2",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/yakitd32v7jwvcvm45s2",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/s9ddjvzdlmsosy5zywop",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/s9ddjvzdlmsosy5zywop",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/ni7vfkrlwb87zqrvpxnu",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/ni7vfkrlwb87zqrvpxnu",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/nmwytdeubaz8azwsyrlk",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/nmwytdeubaz8azwsyrlk",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/vqnebomqlz2s34thqys2",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/vqnebomqlz2s34thqys2",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/po692czexw9alolb2qll",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/po692czexw9alolb2qll",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/peyfhcymxdbseeza9zxx",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/peyfhcymxdbseeza9zxx.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/bxpnohdtvqaeryobn6wh",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/bxpnohdtvqaeryobn6wh",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/iht5iucpauq4binptfn1",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/iht5iucpauq4binptfn1",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/l82088oouatpkpnzghps",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/l82088oouatpkpnzghps",
  },

  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/xwerxxpgsfov4tzwbwvs",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/xwerxxpgsfov4tzwbwvs",
  },

  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/ljiyhenxkorfy9e6qgdl",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/ljiyhenxkorfy9e6qgdl",
  },

  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/fj3o2usyohqiowhaldis",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/fj3o2usyohqiowhaldis",
  },

  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/t5qztbehs1jl5ph1bz8h",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/t5qztbehs1jl5ph1bz8h",
  },

  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/uqwxcsj3f0mqw4ywfd0u",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/uqwxcsj3f0mqw4ywfd0u",
  },
  {
    original:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/xuo6kwzujw4obks5pyns",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_800,w_800/Salama/xuo6kwzujw4obks5pyns",
  },
];

const Gallery = () => {
  return (
    <div id="gallery" className="my-2 bg-[#000000] w-full">
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
