import React from 'react'

function Banner() {
  return (
    <header className='bg-[rgba(223,221,221,0.12)] overflow-hidden text-center'>
      <div className='my-10'>
        <h1 className='text-[56px] max-md:text-[32px] font-bold'>Ready, set, submit.</h1>
        <h2 className='text-[27px] max-md:text-[19px]'>
          Learn how to prepare and submit your apps to the <br />
          App Store for Apple Vision Pro.
        </h2>

        <div className='flex justify-center'>
          <img className='w-[750px] mt-[100px]' src="https://developer.apple.com/home/images/tile-visionos-labs/vision-side_2x.webp" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Banner
