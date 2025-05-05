import Hero from "../components/Hero";
import Card from "../components/Card";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import pic from "../assets/bg-2.jpg";
const Home = () => {
  useEffect(() => {
    document.title = "Home | Soul & Soil";
  }, []);

  const data = useLoaderData();
  // console.log(data)

  return (
    <div>
      {/* <section className="relative h-[100vh] w-full">
        <div className="absolute top-0 left-0 w-full h-full z-20">
          <Hero />
        </div>
      </section> */}

      <section className="absolute top-0 sm:hidden lg:flex">
        <Hero></Hero>
      </section>
      {/* cards heading 
      | Prefix | Min Width |
      | ------ | --------- |
      | `sm`   | 640px     |
      | `md`   | 768px     |
      | `lg`   | 1024px    |
      | `xl`   | 1280px    |
      | `2xl`  | 1536px    |
      */}
      <section className="lg:mt-135 xl:mt-170 2xl:mt-205 mb-10">
        <div className="py-5 w-11/12 mx-auto  justify-items-center">
          <h1 className="text-4xl text-center font-semibold text-[#3F3F3F] max-w-xl ">
            Explore Destinations From Our Travel Diaries
          </h1>
          <p className="pt-2 text-center text-sm max-w-xl">
            From bustling cities to hidden gems tucked away off the beaten path
            — these are the places we've explored, fallen in love with, and
            wholeheartedly recommend to fellow travelers like you.
          </p>
        </div>
      </section>
      {/* cards */}
      <section className="grid grid-cols-1 max-w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  justify-items-center lg:mb-20">
        {data.map((oneAdv) => (
          <Card key={oneAdv.id} advInfo={oneAdv}></Card>
        ))}
      </section>
      {/* guidelines ui */}
      <section className="bg-black pb-15">
        <div className="flex flex-col md:flex-row text-white py-16 px-6 md:px-20 gap-10">
          {/* Left Texts */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
              Enjoy the Journey, <br /> Respect the World
            </h2>
            <p>Universal Travel Guidelines to Honor Locals Wherever You Go</p>

            <div className="grid grid-cols-1 divide-y divide-gray-700">
              <div className="py-4 flex justify-between items-center">
                <span>1. Prepare with Purpose</span>
                <FaChevronDown size={14} />
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>2. Documents in Hand, Respect in Heart</span>
                <FaChevronDown size={14} />
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>3. Build a Mindful Itinerary</span>
                <FaChevronDown size={14} />
              </div>
            </div>
          </div>

          {/* Right Texts */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-400 max-w-md">
              “Wherever you go becomes a part of you somehow.” But it's just as
              true that you become a part of wherever you go—so tread gently.
            </p>

            <button className="bg-white text-black px-6 py-3 rounded-full font-medium w-fit">
              LEARN MORE
            </button>

            <div className="grid grid-cols-1 divide-y divide-gray-700">
              <div className="py-4 flex justify-between items-center">
                <span>4. Read Before You Roam</span>
                <FaChevronDown size={14} />
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>5. Budget with Local Impact in Mind</span>
                <FaChevronDown size={14} />
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>6. Use Resources That Empower Respectful Travel</span>
                <FaChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-20">
            <img
              src={pic}
              alt="Tour Experience"
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
