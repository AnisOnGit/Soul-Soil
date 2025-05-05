import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ advInfo }) => {
  const {
    adventureTitle,
    // ecoFriendlyFeatures,
    location,
    adventureCost,
    image,
    id,
  } = advInfo;
  return (
    <>
      <div className="relative w-72 h-96 rounded-3xl overflow-hidden hover:shadow-2xl">
        <img
          src={image}
          alt={adventureTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
          <div>
            <h3 className="text-lg max-w-35 font-semibold">{adventureTitle}</h3>

            {/* <p className="text-[#dfdfdf] my-1">
            {
              ecoFriendlyFeatures.map((feature,idx) => <li key={idx}>{feature}</li>)
            }
          </p> */}

            <div className="flex items-center text-sm text-gray-300 font-semibold max-w-42">
              <FaMapMarkerAlt className="mr-1" />
              {location}
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-300">Start From</p>
            <p className="text-xl font-bold">${adventureCost}</p>
            <div className="card-actions">
              <Link to={`/detail/${id}`} className="bg-gray-400 rounded-2xl text-xs p-1 hover:bg-white hover:text-black">
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card border-1 border-cyan-500 w-full max-w-90 hover:shadow-2xl">
        <figure className="h-62 w-full overflow-hidden">
          <img
            src={image}
            alt={adventureTitle}
            className="w-full h-full object-cover rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="flex gap-2 text-[1.125rem] font-semibold">
            {adventureTitle}
          </h2>
          <p className="text-[#3F3F3F]">
            {
              ecoFriendlyFeatures.map((feature,idx) => <li key={idx}>{feature}</li>)
            }
          </p>
          <div className="card-actions">
            <Link to={`/detail/${id}`} className="btn">Explore Now</Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;

// {/* <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
//       {/* Background Image */}
//       <img
//         src="https://turuhi.com/resources/wp-content/uploads/2024/07/Title-SkyCab-Langkawi.jpg"
//         alt="Kelingking"
//         className="w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-semibold">Kelingking</h2>
//             <div className="flex items-center text-sm gap-1 opacity-80">
//               <FaMapMarkerAlt />
//               <span>Indonesia</span>
//             </div>
//           </div>

//           <div>
//             <p className="text-sm opacity-70">Start From</p>
//             <p className="text-2xl font-bold">$20</p>
//           </div>
//         </div>
//       </div>
//     </div> */}
