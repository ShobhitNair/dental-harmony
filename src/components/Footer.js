import { SocialIcon } from 'react-social-icons'

const Footer = ()=>{
    return(
        <div className=" bg-sky-800 ">
            <div className="flex justify-between px-10">
            <div className="p-2">
                <h1 className="text-white font-bold text-xl">Social</h1>
            </div>
            <div className="p-2">
                <h1 className="text-white font-bold text-xl">Service</h1>
            </div>
            <div className="p-2">
                <h1 className="text-white font-bold text-xl">Our Office</h1>
            </div>
            <div className="p-2">
                <h1 className="text-white font-bold text-xl">Contact Us</h1>
            </div>  
            </div>
            
        </div>
    )
}

export default Footer;