import React from 'react'

function Promo() {
  return (
    <div>
        <ul className='flex flex-wrap'>
            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[#FFF] border-solid'>
                <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-hello-developer/jan24-rthf/hello-dev-jan24-large_2x.jpg')] bg-cover h-full bg-center">
                    <a href="">
                        <h3 className='text-[40px] font-bold mt-[52px]'>Hello Developer</h3>
                        <p className='text-[21px]'>The first edition of 2024 is all about <br /> Apple Vision Pro.</p>
                    </a>
                </div>
            </li> 

            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[#FFF] border-solid'> 
                <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-events-promo/events-coding-small_2x.jpg')] bg-cover h-full bg-center">
                    <a href="">
                        <h3 className='text-[40px] font-bold mt-[52px]'>Meet with Apple Experts</h3>
                        <p className='text-[21px]'>Explore worldwide activities.</p>
                    </a>
                </div>
            </li>

            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[#FFF] border-solid text-white'>
                <div className=" flex justify-center overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-event-asa-2023/w-large_2x.jpg?2')] bg-cover h-full bg-center">
                    <a href="">
                        <h3><img className='w-[310px] mt-[50px]' src="https://developer.apple.com/home/images/tile-event-asa-2023/app-store-awards-2023.svg" alt="" /></h3>
                        <p className='text-[21px]'>2023</p>
                    </a>
                </div>
            </li>

            <li className='bg-[rgba(240,240,240,0.8)] w-full md:w-[50%] h-[592px] border-[6px] border-[#FFF] border-solid '> 
                <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-ssc/large_2x.png?2')] bg-cover h-full bg-center">
                    <a href="">
                        <h3 className='text-[40px] font-bold mt-[52px]'>Swift Student Challenge</h3>
                        <p className='text-[21px]'>The future is yours to create.</p>
                    </a>
                </div>
            </li>

        </ul>
    </div>
  )
}

export default Promo
