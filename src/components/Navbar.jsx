import React from 'react'
import "../assets/css/navbar.css"
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='h-[74px] w-[81%] mx-auto max-[1247px]:w-full'>
            <header className='flex justify-around items-center h-full max-[1247px]:justify-between max-[1247px]:mx-5 max-[700px]:justify-center'>
                <div className='max-w-[32px] min-w-[32px] cursor-pointer'>
                    <Link to="/">
                        <svg aria-label="Threads" className='hover:scale-105 duration-200' fill="rgb(0, 0, 0)" height="100%" role="img" viewBox="0 0 192 192" width="100%" xmlns="http://www.w3.org/2000/svg"><path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
                    </Link>
                </div>
                <div className='max-[700px]:hidden'>
                    <ul className='flex'>
                        <NavLink to="/" className='hover:bg-[#F5F5F5] py-[20px] px-[32px] rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer'>
                            <svg aria-label="Ana Sayfa" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="rgb(0, 0, 0)" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ana Sayfa</title><path d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>
                        </NavLink>
                        <NavLink to="/search" className='hover:bg-[#F5F5F5] py-[20px] px-[32px] rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer'>
                            <svg aria-label="Ara" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ara</title><path clip-rule="evenodd" d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                        </NavLink>
                        <li className='hover:bg-[#F5F5F5] py-[20px] px-[32px] rounded-md my-[4px] mx-[2px] cursor-pointer'>
                            <svg aria-label="Oluştur" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Oluştur</title><path d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path><path d="M21.75 4.25L13.75 12.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>
                        </li>
                        <NavLink to="/activity" className='hover:bg-[#F5F5F5] py-[20px] px-[32px] rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer'>
                            <svg aria-label="Bildirimler" class="x1lliihq x1n2onr" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Bildirimler</title><path d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z" stroke="currentColor" stroke-width="2.5"></path></svg>
                        </NavLink>
                        <NavLink to="/profile" className='hover:bg-[#F5F5F5] py-[20px] px-[32px] rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer'>
                            <svg aria-label="Profil" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Profil</title><circle cx="13" cy="7.25" r="4" stroke="currentColor" stroke-width="2.5"></circle><path d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z" stroke="currentColor" stroke-width="2.5"></path></svg>
                        </NavLink>

                    </ul>
                </div>

                <div className="more group cursor-pointer max-[700px]:absolute max-[700px]:top-[25px] max-[700px]:right-5">
                    <svg aria-label="Daha Fazla" class="text-[#b8b8b8] group-hover:text-black transition-colors duration-300" fill="rgb(184, 184, 184)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Daha Fazla</title><rect fill="currentColor" height="2.5" rx="1.25" width="21" x="3" y="7"></rect><rect fill="currentColor" height="2.5" rx="1.25" width="14" x="10" y="15"></rect></svg>
                </div>

                <div className='fixed bottom-8 left-10 hover:scale-105 duration-200 cursor-pointer flex w-[40%] justify-center max-[700px]:justify-center max-[700px]:left-0 max-[700px]:flex max-[700px]:w-full max-[700px]:bottom-28'>
                    <div className='flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-sm border-[1px] border-gray-100 shadow-md'>
                        <span>Senin için</span> <svg aria-hidden="true" className='text-[#b8b8b8]' fill="none" height="16" viewBox="0 0 12 16" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M0.640625 11.0645C0.640625 10.8594 0.722656 10.6484 0.86914 10.5078L4.16211 7.25586C4.31445 7.10937 4.51367 7.02148 4.70703 7.02148C5.14062 7.02148 5.43359 7.33203 5.43359 7.74805C5.43359 7.97656 5.3457 8.14062 5.20508 8.27539L3.86914 9.57617L2.91406 10.373L4.25 10.3145L11.041 10.3145C11.498 10.3145 11.8145 10.6191 11.8145 11.0645C11.8145 11.5098 11.498 11.8145 11.041 11.8145L4.25 11.8145L2.91406 11.7559L3.86914 12.5527L5.20508 13.8535C5.3457 13.9883 5.43359 14.1523 5.43359 14.3809C5.43359 14.7969 5.14062 15.1074 4.70703 15.1074C4.51367 15.1074 4.31445 15.0195 4.16211 14.873L0.86914 11.6211C0.722656 11.4746 0.640625 11.2695 0.640625 11.0645ZM0.640625 4.92969C0.640625 4.48437 0.957031 4.17969 1.41406 4.17969L8.20508 4.17969L9.54102 4.23828L8.58594 3.44141L7.25 2.14648C7.10937 2.00586 7.02148 1.8418 7.02148 1.61328C7.02148 1.19727 7.31445 0.892578 7.74805 0.892578C7.94141 0.892578 8.14062 0.980469 8.29297 1.12695L11.5859 4.37305C11.7324 4.51953 11.8145 4.72461 11.8145 4.92969C11.8145 5.13477 11.7324 5.3457 11.5859 5.48633L8.29297 8.73828C8.14062 8.88477 7.94141 8.97266 7.74805 8.97266C7.31445 8.97266 7.02148 8.66797 7.02148 8.25195C7.02148 8.02344 7.10937 7.85937 7.25 7.72461L8.58594 6.41797L9.54102 5.62109L8.20508 5.68555L1.41406 5.68555C0.957031 5.68555 0.640625 5.375 0.640625 4.92969Z" fill="currentColor"></path></svg>
                    </div>
                </div>

                {/* bottonav */}
                <nav className='hidden max-[700px]:block fixed bottom-0 left-0 w-full'>
                    <ul className='flex justify-around'>
                        <li className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <NavLink to="/">
                                <svg aria-label="Ana Sayfa" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="rgb(0, 0, 0)" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ana Sayfa</title><path d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>
                            </NavLink>
                        </li>
                        <li className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <NavLink to="/search">
                                <svg aria-label="Ara" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ara</title><path clip-rule="evenodd" d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                            </NavLink>
                        </li>
                        <li className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <svg aria-label="Oluştur" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Oluştur</title><path d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path><path d="M21.75 4.25L13.75 12.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>
                        </li>
                        <li className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <NavLink to="/activity">
                                <svg aria-label="Bildirimler" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Bildirimler</title><path d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z" stroke="currentColor" stroke-width="2.5"></path></svg>
                            </NavLink>
                        </li>
                        <li className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <NavLink to="/profile">
                                <svg aria-label="Profil" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Profil</title><circle cx="13" cy="7.25" r="4" stroke="currentColor" stroke-width="2.5"></circle><path d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z" stroke="currentColor" stroke-width="2.5"></path></svg>
                            </NavLink>
                        </li>

                    </ul>
                </nav>



            </header>
        </div>
    )
}

export default Navbar