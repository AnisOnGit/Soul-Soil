import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";

const AdvDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    document.title = "Detail | Soul & Soil";
  }, []);
  const { id } = useParams();
  const allData = useLoaderData();
  const FoundDataOfId = allData.find(
    (matchedIdData) => matchedIdData.id === id
  );
  const {
    image,
    adventureTitle,
    shortDescription,
    categoryName,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = FoundDataOfId;
  const handleTlkWiExp = () => {
    const dateNow = new Date();
    const currentHour = dateNow.getHours();
    // console.log(currentHour);
    if (currentHour < 20 && currentHour >= 10) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      // console.log("Outside consultation hours.");
      setModalIsOpen(true);
    }
  };
  const modalClose = () => {
    setModalIsOpen(false);
  };

  //   id": "EA001",
  // adventureTitle": "Ra---
  // image": "https://exa---
  // shortDescription": "---
  // categoryName
  // adventureCost
  // bookingAvailability
  // location
  // duration
  // adventureLevel
  // includedItems
  // ecoFriendlyFeatures
  // maxGroupSize
  // specialInstructions

  return (
    <div className="max-w-11/12 mx-auto mb-10 border-1 p-5 my-5 rounded-2xl">
      <div className="card card-side gap-5">
        <figure>
          <img src={image} className="rounded-2xl" alt={adventureTitle} />
        </figure>
        <div className="flex flex-col gap-8 p-6 text-[--card-fs] [--card-fs:0.875rem] [--card-p:1.5rem] justify-center border-1 rounded-2xl">
          <div className="flex justify-between border-b-1 pb-5">
            <h2 className=" max-w-2/3 card-title text-3xl">{adventureTitle}</h2>
            <p className=" text-2xl text-right font-semibold max-w-1/3">
              ${adventureCost}
            </p>
          </div>

          <div className="border-b-1 pb-4">
            <p>{shortDescription}</p>
            <p>
              <span className="font-semibold">Adventure type</span>:{" "}
              {categoryName}
            </p>
            <div className="flex gap-2 items-center">
              <span className="font-semibold">Availability</span>:{" "}
              {bookingAvailability ? <FaRegThumbsUp /> : <CgUnavailable />}
            </div>
            <div className="flex gap-2 items-center ">
              <FaMapMarkerAlt /> {location}
            </div>
            <div className="flex gap-2 items-center">
              <IoIosTimer /> {duration}
            </div>
            <p>Difficulty: {adventureLevel}</p>
            <span>
              <span className="font-semibold">Items include</span>:{" "}
              {includedItems.map((items,idx)=><p key={idx}>{items}</p>)}
            </span>
          </div>

          <div className="">
            <span>
              <span className="font-semibold">Features</span>:{" "}
              {ecoFriendlyFeatures.map((feature, idx) => (
                <p key={idx}>- {feature}</p>
              ))}
            </span>
            <div className="flex gap-2 items-center">
              <FaPeopleGroup /> Group size: {maxGroupSize}
            </div>
            <span>
              <span className="font-semibold">Special Instructions</span>:{" "}
              {specialInstructions.map((spIns, idx) => (
                <p key={idx}>- {spIns}</p>
              ))}
            </span>

            <div className="card-actions mt-2">
              <button
                className="border-1 text-black p-1 rounded-xl hover:text-white hover:bg-black hover:cursor-pointer"
                onClick={handleTlkWiExp}
              >
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card card-side shadow-sm ">
        <figure className="max-w-1/2">
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{adventureTitle}</h2>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleTlkWiExp}>
              Talk With an Expert
            </button>
          </div>
        </div>
      </div> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        className="flex flex-col gap-2 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg text-black rounded-2xl"
      >
        <p className="text-xl font-bold text-center">
          Consultation Hour is between 10.00 Am to 8.00 pm
        </p>
        <p className="text-center">Comeback again during consultation hours</p>
        <button className="btn btn-secondary max-w-15" onClick={modalClose}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AdvDetail;
