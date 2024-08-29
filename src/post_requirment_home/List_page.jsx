import React from 'react'
import livingRoomImage from '../C-Room_Photo/house-158939_1280.webp' // Adjust according to actual path

export const List_page = () => {
  return (
    <div className='container'>
      <div className='flex justify-between items-center mt-5'>
        <div></div>
        <p className='font-bold'>C-Room</p>
        <button className='w-8 h-8 border border-black rounded-full'>X</button>
      </div>
      <div className='text-center mt-16'>
        <h1 className='text-3xl'>Post Your Requirement</h1>
        <p className='mt-6 font-thin leading-7'>
          Find your perfect roommate or room effortlessly. Just post your <br />
          requirement and let the matching begin!
        </p>
      </div>
      <div className='flex items-center justify-center gap-12 mt-12'>
        <div className='w-80 h-80 bg-red-500 p-8'>
          <h1 className='font-bold text-xl'>Need <br />Room/Flat</h1>
          <p>with roommate</p>
          <figure className='w-36 h-28 md:w-30 md:h-30 shrink-1 md:shrink-0 mt-20 ml-auto'>
            <img src={livingRoomImage} className='w-full h-full object-cover' alt="Room" />
          </figure>
        </div>
        <div className='w-80 h-80 bg-red-500 p-8'>
          <h1 className='font-bold text-xl'>Need<br />Roommate</h1>
          <p>for your room</p>
          <figure className='md:w-28 md:h-36 shrink-1 md:shrink-0 mt-10 ml-auto'>
            <img src="https://www.flatmate.in/home_roommates.png" className='w-full h-full object-cover' alt="Roommate" />
          </figure>
        </div>
      </div>
    </div>
  )
}
