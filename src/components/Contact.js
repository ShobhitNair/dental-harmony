import React from 'react'
import banner from "../img/banner1.jpg"
import banner1 from "../img/image2.jpg"
const Contact = () => {
  return (
    <div>
        <div>
            <img className='w-full' src={banner}></img>
        </div>
        <div className=' bg-blue-100  '>
            <div className=''>
                <img className='w-full h-svh  ' src={banner1}></img>
            </div>
            <form className='absolute w-10/12 flex flex-col px-16 -mt-80 -translate-y-72'>
                <label className='py-2 font-serif font-bold text-blue-500'>Name</label>
                <input type='text' placeholder='Name' className='border border-black py-2 px-1 w-1/3 '></input>
                <label className='py-2 font-serif font-bold text-blue-500'>Email</label>
                <input type='text' placeholder='email' className='border border-black py-2 px-1 w-1/3 '></input>
                <label className=' py-2 font-serif font-bold text-blue-500'>Phone</label>
                <input type='number' placeholder='Phone' className='border border-black py-2 px-1 w-1/3 '></input>
                <label className='py-2 font-serif font-bold text-blue-500'>Message</label>
                <input type='text'  className='border border-black py-2 px-1 w-1/3 h-36 '></input>
                <button className='py-2 my-4 hover:bg-blue-400  rounded-md bg-sky-700 w-20'>Submit</button>
            </form>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Contact