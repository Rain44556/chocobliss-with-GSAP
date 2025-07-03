import chocolate from '../assets/images/chocolate.png'
import drink from '../assets/images/chocolate-drink.png'
import chocolate2 from '../assets/images/choclate2.png'
import chocolate3 from '../assets/images/chocolate-3.png'
import chocolate4 from '../assets/images/chocolate.png'
import bgChocolate from '../assets/images/bg-chocolate.jpg'

const Hero = () => {
const imagesCSS = "absolute transition-all duration-[0.5s] ease-[cubic-bezier(0.19,1,0.22,1)]";

  return (
    <>
      <div
        className="header relative flex items-center justify-center w-full h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgChocolate})` }}
      >
        <h1 className="font-extrabold text-yellow-100 text-[20vw]">
          Chocolate
        </h1>
        <img
          id="chocolate"
          className={`${imagesCSS} top-[8%] left-[30%] w-[15%] z-[1]`}
          src={chocolate}
          alt=""
        />
        <img
          id="drink"
          className={`${imagesCSS} w-[25%] z-[2]`}
          src={drink}
          alt=""
        />
        <img
          id="chocolate2"
          className={`${imagesCSS} top-[68%] right-[30%] w-[12%] z-[3]`}
          src={chocolate2}
          alt=""
        />
        <img
          id="chocolate3"
          className={`${imagesCSS} top-[2%] right-[30%] w-[25%] z-[3]`}
          src={chocolate3}
          alt=""
        />
        <img
          id="chocolate4"
          className={`${imagesCSS} top-[65%] left-[5%] w-[25%] z-[3]`}
          src={chocolate4}
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
