import { Link } from "react-router-dom";

const Card = ({ imgSrc, title,id }) => {
  return (
    <div className="relative group  mt-[50px] mb-[30px] overflow-hidden rounded-lg shadow-lg">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <Link to={"/ProductPage"}>
        <button className="bg-white text-black px-4 py-2 rounded">Yana...</button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full text-center ">
        {title}
      </div>
      <div>
        {id}
      </div>
    </div>
  );
};

const Cardes = () => {
  const cards = [
    { imgSrc: '/burger.jpeg', title: 'Burger',id:1 },
    { imgSrc: '/hot.jpeg', title: 'Xod Dog',id:2},
    { imgSrc: '/istockphoto-1286331298-612x612.jpeg', title: 'Limanad',id:3 },
    { imgSrc: '/171026-better-coffee-boost-se-329p.jpeg', title: 'Coffee',id:4 },
    { imgSrc: '/piza.jpeg', title: 'Pizza',id:5 },
    { imgSrc: '/lavash.jpeg', title: 'Burger',id:6 },
  ];

  return (
    <div className="grid grid-cols-1 px-[40px] xl:grid-cols-3 sm:grid-cols-2 sm:px-[20px] justify-between gap-0 sm:gap-10 lg:gap-20 xl:gap-20  mt-4 sm:mt-[3vh] xl:mt-[8vh] lg:px-[50px] xl:px-0  max-w-[1440px] mx-auto">
      {cards.map((card) => (
        <Card key={card.id} imgSrc={card.imgSrc} title={card.title} />
      ))}
    </div>
  );
};

export default Cardes;