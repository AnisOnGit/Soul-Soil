import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bg from "../assets/bg-3.jpg";
import "animate.css";

const Hero = () => {
  return (
    <div className=" relative ">
      <div className="bg-black">
        <img src={bg} className="opacity-40" />
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper opacity-70"
        >
          <SwiperSlide>
            <img src="https://adventure.com/wp-content/uploads/2024/03/Hero-Hawaii-tourism-drew-farwell-FJlKndLiOvM-unsplash_-1920x1080.jpg" />{" "}
          </SwiperSlide>{" "}
          <SwiperSlide>
            {" "}
            <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Nepal-Everest-Base-Campview-with-Ama-Dablam-1193774981-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg" />{" "}
          </SwiperSlide>{" "}
          <SwiperSlide>
            {" "}
            <img src="https://cdn.mos.cms.futurecdn.net/3DcRkYfzB9zE7M2akscWQZ.jpg" />{" "}
          </SwiperSlide>{" "}
        </Swiper> */}
      </div>
      <div className="absolute w-full lg:top-1/3 ">
        <div className=" w-11/12 mx-auto max-w-screen-xl text-[#e9e9e9]">
          <h1 className="text-8xl font-bold animate__animated animate__bounceInLeft">
            Explore Earth’s Beauty, Sustainably.
          </h1>
          <button className="bg-white text-xl font-bold rounded-3xl px-6 py-2 mt-5 text-black animate__animated animate__bounce [--animate-duration:3s]">
            Explore now ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// {/* <div className="relative hero">
//         {/* Background Image Layer */}
//         <div className="absolute inset-0 z-0">
//           <Swiper
//             spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             navigation={true}
//             modules={[Autoplay, Pagination, Navigation]}
//             className="mySwiper opacity-50"
//           >
//             <SwiperSlide>
//               <img src="https://adventure.com/wp-content/uploads/2024/03/Hero-Hawaii-tourism-drew-farwell-FJlKndLiOvM-unsplash_-1920x1080.jpg" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Nepal-Everest-Base-Campview-with-Ama-Dablam-1193774981-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src="https://cdn.mos.cms.futurecdn.net/3DcRkYfzB9zE7M2akscWQZ.jpg" />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//         {/* Hero Content */}
//         <div className="hero-content relative z-20 text-neutral-content text-center">
//           <div className="max-w-md text-black">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div> */}
