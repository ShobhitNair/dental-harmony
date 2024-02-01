import { useState } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

const Home = ()=>{
    const [currentIndex,setCurrentIndex] = useState(0)
    const slides = [
        {
            url:"https://fermeliadental.com/wp-content/uploads/2019/05/benefits-of-regular-dental-visits.jpeg"
        },
        {
            url:"https://sabkadentist.com/wp-content/uploads/2020/01/dental-checkup.jpg"
        },
        {
            url:"https://images.ctfassets.net/wp1lcwdav1p1/26cD4zZ5vts5kSx7hcCVmJ/1dbbe3be4d820ee9ccda24ccbc10a60d/GettyImages-1372506124.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive"
        },
        {
            url:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/01/Dentist_Appointment_1296x728-header-1296x729.jpg?w=1155&h=2268"
        }]
    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        console.log(newIndex);
        setCurrentIndex(newIndex);
    }
    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex)
    }

    return(
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
           <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-lg bg-center bg-cover duration-500"></div>
           <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-1 bg-black opacity-45 hover:opacity-70 text-white cursor-pointer ">
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
           </div>
           <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-1 bg-black opacity-45 hover:opacity-70 text-white cursor-pointer ">
                <BsChevronCompactRight  onClick={nextSlide} size={30}/>
           </div>
           <div className="flex top-4 justify-center py-2">
                {slides.map((slides, slideIndex)=>(
                    <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className="cursor-pointer"><RxDotFilled/></div>
                ))}
           </div>
        </div>
    )
}

export default Home;