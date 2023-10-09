import React from 'react'
import img from "../assets/images/2.jpg"


const Posts = ({ post }) => {
    return (
        <div className='w-full mt-3 relative border-b-[1px] dark:border-opacity-20 border-gray-200 pb-3 text-[15px] max-sm:p-2 max-sm:pb-3'>

            <div className='flex gap-3'>
                <div className='relative'>
                    <img src={img} alt="" className='min-w-[36px] h-9 w-9 object-cover rounded-full' />
                    <div className='absolute rounded-full border-2 border-white dark:border-black bg-black top-5 -right-1 h-5 w-5 fill-black dark:bg-white flex justify-center items-center hover:scale-105 duration-200 cursor-pointer' title='Takip et'>
                        <svg aria-label="Takip et" class="text-white dark:text-black" color="currentColor" fill="currentColor" height="10" role="img" viewBox="0 0 10 9" width="10"><title>Takip et</title><path d="M4.99512 8.66895C4.64355 8.66895 4.35059 8.36621 4.35059 8.03418V5.12891H1.50391C1.17188 5.12891 0.864258 4.83594 0.864258 4.47949C0.864258 4.12793 1.17188 3.83008 1.50391 3.83008H4.35059V0.924805C4.35059 0.583008 4.64355 0.290039 4.99512 0.290039C5.35156 0.290039 5.64453 0.583008 5.64453 0.924805V3.83008H8.49121C8.83301 3.83008 9.13086 4.12793 9.13086 4.47949C9.13086 4.83594 8.83301 5.12891 8.49121 5.12891H5.64453V8.03418C5.64453 8.36621 5.35156 8.66895 4.99512 8.66895Z" fill="currentColor"></path></svg>
                    </div>
                </div>
                <div className='flex flex-col justify-center -mt-1 gap-y-1 dark:text-white'>
                    <div className='font-semibold'>{post.user}</div>
                    <div>{post.content}</div>


                    {
                        post.media.media && post.media.type === "image" ? (
                            <img src={post.media.content} alt="content" className='max-h-[462px] rounded-lg object-cover' />
                        ) :
                            (
                                <video controls src={post.media.content} className='max-h-[462px] rounded-lg'></video>
                            )
                    }
                    {/* icons */}
                    <div className='flex gap-1 -ml-2'>
                        <div className='hover:bg-[#F5F5F5] dark:hover:bg-[#1E1E1E] p-2 rounded-full transition-colors duration-200 cursor-pointer'>
                            <svg aria-label="Beğen" class="x1lliihq x1n2onr6 dark:text-white" color="rgb(0, 0, 0)" fill="transparent" height="19" role="img" viewBox="0 0 24 22" width="20"><title>Beğen</title><path d="M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z" stroke="currentColor" stroke-width="2"></path></svg>
                        </div>
                        <div className='hover:bg-[#F5F5F5] dark:hover:bg-[#1E1E1E] p-2 rounded-full transition-colors duration-200 cursor-pointer'>
                            <svg aria-label="Yorum Yap" class="x1lliihq x1n2onr6 dark:text-white" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Yorum Yap</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                        </div>
                        <div className='hover:bg-[#F5F5F5] dark:hover:bg-[#1E1E1E] p-2 rounded-full transition-colors duration-200 cursor-pointer'>
                            <svg aria-label="Yeniden paylaş" class="x1lliihq x1n2onr6 dark:text-white dark:fill-white" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Yeniden paylaş</title><path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path></svg>
                        </div>
                        <div className='hover:bg-[#F5F5F5] dark:hover:bg-[#1E1E1E] p-2 rounded-full transition-colors duration-200 cursor-pointer'>
                            <svg aria-label="Paylaş" class="x1lliihq x1n2onr6 dark:text-white" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Paylaş</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                    </div>

                    <div className='flex gap-1 text-[#999999] dark:text-[#777777]'>
                        <span>{post.comment} yanıt</span>
                        <span>&nbsp;·&nbsp;</span>
                        <span>{post.like} beğenme</span>
                    </div>
                </div>



            </div>



            {/* date */}
            <div className='absolute right-0 -top-2 flex gap-1 items-center text-[#999999] dark:text-[#777777] cursor-pointer'>
                <div title='30 Eylül 2023 15:50'>
                    34d
                </div>
                <div className='hover:bg-[#F5F5F5] dark:hover:bg-[#1E1E1E] p-2 rounded-full transition-colors duration-200'>
                    <svg aria-label="Daha Fazla" class="x1lliihq x1n2onr6 dark:fill-white" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Daha Fazla</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
            </div>
        </div>
    )
}

export default Posts