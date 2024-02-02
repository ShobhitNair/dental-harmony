import { SocialIcon } from 'react-social-icons'

const Footer = ()=>{
    return(
        <div className=" bg-sky-800 ">
            <div className="flex justify-between px-10 py-5">
            <div className="p-2 flex flex-col">
                <h1 className="text-white font-serif font-bold text-2xl">Social</h1>
                <div className='py-1'>
                <SocialIcon network='facebook'  url='https://facebook.com' />
                </div>
                <div className='py-1'>
                <SocialIcon network='instagram' url='https://instagram.com' />
                </div>
            </div>
            <div className="p-2">
                <h1 className="text-white font-serif font-bold text-2xl">Services</h1>
                <h1 className='text-white  font-serif py-2'>General</h1>
                <h1 className='text-white font-bold font-serif py-2'>Cosmetic</h1>
                <h1 className='text-white font-bold font-serif py-2'>Surgical</h1>
            </div>
            <div className="p-2">
                <h1 className="text-white font-serif font-bold text-2xl">Our Office</h1>
                <h1 className='text-white  font-serif py-2'>Home</h1>
                <h1 className='text-white font-bold font-serif py-2'>About Us</h1>
                <h1 className='text-white font-bold font-serif py-2'>Service</h1>
                <h1 className='text-white font-bold font-serif py-2'>Contact</h1>
            </div>
            <div className="p-2">
                <h1 className="text-white font-serif font-bold text-2xl">Contact Us</h1>
                <p className='text-white font-bold font-serif py-2'>L.B.S Nagar, Vidisha</p>
                <p className='text-white font-bold font-serif py-2'>shohit842160@gmail.com</p>
            </div>  
            </div>
            
        </div>
    )
}

export default Footer;