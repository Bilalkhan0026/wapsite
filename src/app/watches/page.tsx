import React from "react";
import Image from "next/image";

const Watches = () => {
  const watchData = [
    {
      id: 1,
      name: "Rolix",
      price: 12000,
      description: "Luxury watch",
      image: "/6img.jpg",
    },
    {
      id: 2,
      name: "Rolix",
      price: 10000,
      description: "Luxury watch",
      image: "/3img.jpg",
    },
    {
      id: 3,
      name: "Rolix",
      price: 9000,
      description: "Luxury watch",
      image: "/5img.webp",
    },
    {
      id: 4,
      name: "Rolix",
      price: 13000,
     
      description: "Luxury watch",
      image: "/4img.jpeg",
    },
    {
      id: 5,
      name: "Rolix",
      price: 14000,
      description: "Luxury watch",
      image: "/2img.jpg",
    },
    {
      id: 6,
      name: "Rolix",
      price: 12000,
      description: "Luxury watch",
      image: "/1 img.webp",
    },
  ];
  return (
  <div>
    <div className="watches">
      { watchData.map((watch) => (
        <div key={watch.id} className="watches-card">
          <Image src={watch.image} alt={watch.name}/>
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className="prices">${watch.price}</div>
          <button>Add to Cart</button>
          </div>
      ))}
  </div>
  </div>
)};

export default Watches;
