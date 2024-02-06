import React from 'react'

function Build() {
  return (
    <section className='bg-gradient-to-b from-[#00172b] to-[#0f72c5] py-[50px] text-white'>
        <div>
            <div className='flex justify-center text-center'>
                <div className='w-[692px]'>
                    <h2 className='text-[32px] font-bold'>Build apps. Build  your future.</h2>
                    <h5 className='text-[19px]'>Whether you’re just entering the workforce or 
                        you‘re an experienced developer or 
                        entrepreneur, take advantage of free resources 
                        to gain skills that help you succeed in Apple’s 
                        growing app economy, which provides millions 
                        of jobs in technology across the globe.
                    </h5>
                </div>
            </div>
            <figure className='bg-[url("https://developer.apple.com/home/images/hero-build-apps/build-apps_2x.png")] mt-[-50px] h-[376px] bg-[length:1680px] bg-no-repeat bg-center ' src="" alt="" />
        </div>
    </section>
  )
}

export default Build
