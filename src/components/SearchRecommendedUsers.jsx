import React from 'react'

const SearchRecommendedUsers = ({ user }) => {
    return (
        <div className='flex gap-x-3 mb-3 dark:text-white'>
            <div className='mt-1'><img src={user.image} alt="" className='h-9 w-9 min-h-[36px] min-w-[36px] object-cover rounded-full' /></div>
            <div className='flex flex-col w-full border-b-[1px] pb-3 dark:border-[#777777] dark:border-opacity-30'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <div className='font-semibold'>{user.username}</div>
                        <div className='text-[#999999]'>{user.fullname}</div>
                    </div>
                    <div>
                        <button className='border-[1px] rounded-lg px-6 py-1 font-semibold dark:border-[#777777] dark:border-opacity-25'>Takip et</button>
                    </div>
                </div>
                <div className='mt-1'>{user.follower} takipçi</div>
            </div>
        </div>
    )
}

export default SearchRecommendedUsers