import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import card1 from "../img/image4.jpg";
import card2 from "../img/image5.jpg";
import card3 from "../img/image6.jpg";
import background1 from "../img/image3.jpg";
import card4 from "../img/image7.png";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://fermeliadental.com/wp-content/uploads/2019/05/benefits-of-regular-dental-visits.jpeg",
    },
    {
      url: "https://sabkadentist.com/wp-content/uploads/2020/01/dental-checkup.jpg",
    },
    {
      url: "https://images.ctfassets.net/wp1lcwdav1p1/26cD4zZ5vts5kSx7hcCVmJ/1dbbe3be4d820ee9ccda24ccbc10a60d/GettyImages-1372506124.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive",
    },
    {
      url: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/01/Dentist_Appointment_1296x728-header-1296x729.jpg?w=1155&h=2268",
    },
  ];
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    // Auto-slide every 3 seconds (adjust the interval as needed)
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      // Clear the interval on component unmount
      clearInterval(autoSlideInterval);
    };
  }, [currentIndex]);
  return (
    <div>
      {/* carousel */}
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-lg bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-1 bg-black opacity-45 hover:opacity-70 text-white cursor-pointer ">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-1 bg-black opacity-45 hover:opacity-70 text-white cursor-pointer ">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slides, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* about company */}
      <div>
        <div>
          <div className="relative">
            <img className="" src={background1}></img>
          </div>

          <div className="absolute border-2 border-white w-10/12 mx-24 rounded-3xl -mt-96  h-5/6  -translate-y-72 flex   ">
            <div className="px-20 py-24">
              <h1 className="text-white font-serif font-bold text-3xl">
                Dentistry Done Right
              </h1>
              <div className="w-3/4 py-4">
                <h1 className="text-white ">
                  Adults and kids, we welcome patients of all ages! Our team is
                  passionate about building lifetime relationships through
                  positive experiences, featuring:
                </h1>
                <div className="py-6">
                  <li className="text-white">Transparent Pricing</li>
                  <li className="text-white">Unparalleled Warrenty</li>
                  <li className="text-white">Free Whitening</li>
                </div>
                <h1 className="font-serif font-bold text-white">
                  “Our word is our worth. We promise to do it right, timely, and
                  for a fair price.”
                </h1>
              </div>
            </div>
            <div >
                <img className="w-3/4 rounded-2xl bg-black my-24" src={card4}></img>
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="bg-gray-200">
        <div className="p-2 flex justify-center">
          <h1 className="font-bold font-serif text-2xl text-blue-500">
            Comprehensive care, one convenient location
          </h1>
        </div>
        <div className="flex">
          <div className="flex flex-col  bg-white mx-10 p-1 rounded-lg my-2 hover:transform hover:-translate-y-3  transition-transform duration-300 ease-out">
            <img className="rounded-lg" src={card1}></img>
            <h1 className="font-bold font-serif text-lg text-blue-500 py-2">
              General
            </h1>
            <p className="font-serif py-2">
              Everything you expect and then some.Cleaning,fillings,and x-rays
              are just the beggining.
            </p>
          </div>
          <div className="flex flex-col p-1 mx-10 bg-white my-2 rounded-lg hover:transform hover:-translate-y-3  transition-transform duration-300 ease-out">
            <img className="rounded-lg" src={card2}></img>
            <h1 className="font-bold font-serif text-lg text-blue-500 py-2">
              Cosmetic
            </h1>
            <p className="font-serif py-2">
              Everything you expect and then some.Cleaning,fillings,and x-rays
              are just the beggining.
            </p>
          </div>
          <div className="flex flex-col p-1 mx-10 bg-white  my-2 rounded-lg hover:transform hover:-translate-y-3  transition-transform duration-300 ease-out">
            <img className="rounded-lg" src={card3}></img>
            <h1 className="font-bold font-serif text-lg text-blue-500 py-2">
              Surgical
            </h1>
            <p className="font-serif py-2">
              Everything you expect and then some.Cleaning,fillings,and x-rays
              are just the beggining.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
