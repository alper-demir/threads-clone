import React from 'react'
import avatar from "../assets/images/avatar.jpg"
const StartPost = () => {

    return (
        <div className='w-full max-md:hidden relative mt-3'>
            <div className='w-full border-gray-200 border-b-[1px] p-2 pb-8 outline-none pl-10' />
            <div className='absolute -top-3 left-0 text-[#999999] flex justify-between w-full items-center'>
                <div className='flex items-center gap-3 w-full'>
                    <img src={avatar} alt="avatar" className='w-9 h-9 rounded-full object-cover select-none' />
                    <span className='block cursor-text w-full'>Bir yazışma başlat...</span>
                </div>
                <div>
                    <button className='py-1 px-4 font-semibold border-[1px] rounded-xl cursor-not-allowed'>Paylaş</button>
                </div>
            </div>
        </div>
    )
}

export default StartPost