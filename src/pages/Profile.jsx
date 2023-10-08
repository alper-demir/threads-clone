import img from "../assets/images/4.jpg"
import img2 from "../assets/images/8.jpg"
import img3 from "../assets/images/7.jpg"
import { NavLink, Outlet } from "react-router-dom"
import "../assets/css/profile-link.css"
import Footer from './../components/Footer';
const Profile = () => {
  return (
    <div className='max-w-[572px] mx-auto flex justify-center mt-2 relative text-[15px] h-[92vh] max-sm:-mt-2'>
      <div className="flex flex-col w-full">
        <div className='flex justify-between items-center w-full mt-2 max-sm:px-2'>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">alper.iron</div>
            <div className="flex gap-x-1 items-center">
              <div>alper.iron</div>
              <div><button className="bg-[#F5F5F5] text-[#999999] text-xs text-[11px] py-1 px-2 rounded-2xl">threads.net</button></div>
            </div>
          </div>
          <div><img src={img} alt="" className="w-[84px] h-[84px] rounded-full object-cover max-sm:w-16 max-sm:h-16" /></div>
        </div>

        <div className="flex justify-between mt-3 max-sm:px-2">

          <div className="flex gap-x-5 items-center relative">
            <div className="flex">
              <div><img src={img2} alt="" className="h-5 w-5 object-cover rounded-full border-white border-2" /></div>
              <div className="absolute top-[10px] left-[14px] z-10"><img src={img3} alt="" className="h-5 w-5 object-cover rounded-full border-white border-2" /></div>
            </div>
            <div className="text-[#A7A7A7] hover:underline cursor-pointer">152 takipçi</div>
          </div>
          <div className="hover:bg-gray-100 rounded-full transition-colors duration-200 p-2 cursor-pointer">
            <svg aria-label="Instagram" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Instagram</title><path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path></svg>
          </div>
        </div>

        <div className="flex items-center text-center mt-3 h-12 text-[#999999] font-semibold w-full">
          <NavLink to="/profile" className="w-1/3 border-b-[1px] border-gray-200 pb-3">Yazışmalar</NavLink>
          <NavLink to="/profile/replies" className="w-1/3 border-b-[1px] border-gray-200 pb-3">Yanıtlar</NavLink>
          <NavLink to="/profile/reposts" className="w-1/3 border-b-[1px] border-gray-200 pb-3 max-[405px]:mb-[22px]">Yeniden paylaşımlar</NavLink>
        </div>

        <div className="flex justify-center items-center h-full text-[#999999]">
          <Outlet />
        </div>

        <div className='h-14 max-sm:h-40'></div>
        <div className="flex items-center justify-center"><Footer /></div>

      </div>

    </div>
  )
}

export default Profile