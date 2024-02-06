import React from 'react'

function Products() {
  return (
    <div>
        <ul className='flex flex-wrap'>
            <li className='w-full md:w-[50%] h-[592px] bg-[rgba(240,240,240,0.8)] border-[6px] border-solid border-[#FFF]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >VisionOS</h3>
                        <div className='flex justify-center'>
                            <img className='w-[440px] h-[257px] mt-[100px]' src="https://developer.apple.com/home/images/tile-vision-dev/vision-home-large_2x.png?1" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[rgba(240,240,240,0.8)] border-[6px] border-solid border-[#FFF]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >iOS 17</h3>
                        <div className='flex justify-center'>
                            <img className='w-[165px] h-[330px] mt-[100px]' src="https://developer.apple.com/home/images/tile-ios-17/ios-17-large_2x.png?1" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[rgba(240,240,240,0.8)] border-[6px] border-solid border-[#FFF]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >iPadOS 17</h3>
                        <div className='flex justify-center'>
                            <img className='w-[439px] h-[318px] mt-[100px]' src="https://developer.apple.com/home/images/tile-ipados-17/ipados-17-b-large_2x.png?1" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[rgba(240,240,240,0.8)] border-[6px] border-solid border-[#FFF]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >macOS Sonoma</h3>
                        <div className='flex justify-center'>
                            <img className='w-[576px] h-[336px] mt-[100px]' src="https://developer.apple.com/home/images/tile-macos-14/macos-14-c-large_2x.png" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[rgba(240,240,240,0.8)] border-[6px] border-solid border-[#FFF]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >watchOS 10</h3>
                        <div className='flex justify-center'>
                            <img className='w-[191px] h-[319px] mt-[100px]' src="https://developer.apple.com/home/images/tile-watchos-10/watchos-10-large_2x.png?1" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[rgba(240,240,240,0.8)] border-[6px] border-solid border-[#FFF]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >tvOS 17</h3>
                        <div className='flex justify-center'>
                            <img className='w-[500px] h-[279px] mt-[100px]' src="https://developer.apple.com/home/images/tile-tvos/tvos-device-b_2x.png " alt="" />
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        
    </div>
  )
}

export default Products
