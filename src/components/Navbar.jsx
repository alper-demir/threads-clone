import React, { useEffect, useState } from 'react'
import "../assets/css/navbar.css"
import { Link, NavLink } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import img from "../assets/images/2.jpg"


const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const Navbar = () => {

    const [post, setPost] = useState(""); // for you or follow topics
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        const status = localStorage.getItem("post-status") || "Senin için";
        setPost(status)
    }, [])
    const changePostStatus = () => {
        if (post === "Senin için") {
            setPost("Takip")
            localStorage.setItem("post-status", "Takip")
        } else {
            setPost("Senin için")
            localStorage.setItem("post-status", "Senin için")
        }
    }

    const dropDownSettings = () => {
        const settings = document.getElementById("settings");
        if (settings.classList.contains("hidden")) {
            settings.classList.remove("hidden")
        }
        else {
            settings.classList.add("hidden")
        }
    }

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
                            {
                                post === "Senin için" ? (
                                    <svg aria-label="Ana Sayfa" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="rgb(0, 0, 0)" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ana Sayfa</title><path d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>
                                ) : (
                                    <svg aria-label="Ana Sayfa" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ana Sayfa</title><path clip-rule="evenodd" d="M2.25 12.8859V20.7501C2.25 21.8546 3.14543 22.7501 4.25 22.7501H5.31715C5.36391 22.7501 5.4042 22.7183 5.41503 22.6728C5.94965 20.4272 7.90428 17.5 13 17.5C18.0957 17.5 20.0504 20.4272 20.585 22.6728C20.5958 22.7183 20.6361 22.7501 20.6829 22.7501H21.75C22.8546 22.7501 23.75 21.8546 23.75 20.7501V12.8859C23.75 11.3768 23.0685 9.94851 21.8954 8.99919L16.1454 4.34576C14.3112 2.86131 11.6888 2.86131 9.85455 4.34576L4.10455 8.9992C2.93153 9.94851 2.25 11.3768 2.25 12.8859ZM17.5 12C17.5 14.4853 15.4853 16.5 13 16.5C10.5147 16.5 8.5 14.4853 8.5 12C8.5 9.51472 10.5147 7.5 13 7.5C15.4853 7.5 17.5 9.51472 17.5 12Z" fill="currentColor" fill-rule="evenodd"></path><path d="M21.8954 8.99919L22.6818 8.02753L22.6818 8.02753L21.8954 8.99919ZM16.1454 4.34576L15.3591 5.31742L15.3591 5.31742L16.1454 4.34576ZM9.85455 4.34576L9.06819 3.37409L9.06819 3.37409L9.85455 4.34576ZM4.10455 8.9992L4.89091 9.97086L4.89091 9.97086L4.10455 8.9992ZM20.585 22.6728L21.801 22.3833L20.585 22.6728ZM3.5 20.7501V12.8859H1V20.7501H3.5ZM4.25 21.5001C3.83579 21.5001 3.5 21.1643 3.5 20.7501H1C1 22.545 2.45507 24.0001 4.25 24.0001V21.5001ZM5.31715 21.5001H4.25V24.0001H5.31715V21.5001ZM6.63104 22.9623C6.84954 22.0445 7.35491 21.0048 8.30616 20.1971C9.24186 19.4026 10.7054 18.75 13 18.75V16.25C10.1989 16.25 8.13724 17.0609 6.68804 18.2914C5.25439 19.5088 4.51514 21.0555 4.19901 22.3833L6.63104 22.9623ZM13 18.75C15.2946 18.75 16.7581 19.4027 17.6938 20.1971C18.6451 21.0048 19.1505 22.0445 19.369 22.9623L21.801 22.3833C21.4849 21.0555 20.7456 19.5088 19.312 18.2914C17.8628 17.0609 15.8011 16.25 13 16.25V18.75ZM21.75 21.5001H20.6829V24.0001H21.75V21.5001ZM22.5 20.7501C22.5 21.1643 22.1642 21.5001 21.75 21.5001V24.0001C23.5449 24.0001 25 22.545 25 20.7501H22.5ZM22.5 12.8859V20.7501H25V12.8859H22.5ZM21.1091 9.97086C21.9889 10.6828 22.5 11.7541 22.5 12.8859H25C25 10.9996 24.1481 9.21417 22.6818 8.02753L21.1091 9.97086ZM15.3591 5.31742L21.1091 9.97086L22.6818 8.02753L16.9318 3.37409L15.3591 5.31742ZM10.6409 5.31743C12.0166 4.20409 13.9834 4.20409 15.3591 5.31742L16.9318 3.37409C14.639 1.51853 11.361 1.51853 9.06819 3.37409L10.6409 5.31743ZM4.89091 9.97086L10.6409 5.31743L9.06819 3.37409L3.31819 8.02753L4.89091 9.97086ZM3.5 12.8859C3.5 11.7541 4.01115 10.6828 4.89091 9.97086L3.31819 8.02753C1.85191 9.21418 1 10.9996 1 12.8859H3.5ZM13 17.75C16.1756 17.75 18.75 15.1756 18.75 12H16.25C16.25 13.7949 14.7949 15.25 13 15.25V17.75ZM7.25 12C7.25 15.1756 9.82436 17.75 13 17.75V15.25C11.2051 15.25 9.75 13.7949 9.75 12H7.25ZM13 6.25C9.82436 6.25 7.25 8.82436 7.25 12H9.75C9.75 10.2051 11.2051 8.75 13 8.75V6.25ZM18.75 12C18.75 8.82436 16.1756 6.25 13 6.25V8.75C14.7949 8.75 16.25 10.2051 16.25 12H18.75ZM19.369 22.9623C19.5141 23.572 20.0583 24.0001 20.6829 24.0001V21.5001C21.2138 21.5001 21.6775 21.8647 21.801 22.3833L19.369 22.9623ZM5.31715 24.0001C5.94166 24.0001 6.4859 23.572 6.63104 22.9623L4.19901 22.3833C4.32249 21.8647 4.78616 21.5001 5.31715 21.5001V24.0001Z" fill="currentColor"></path></svg>
                                )
                            }
                        </NavLink>
                        <NavLink to="/search" className='hover:bg-[#F5F5F5] py-[20px] px-[32px] rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer'>
                            <svg aria-label="Ara" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ara</title><path clip-rule="evenodd" d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                        </NavLink>
                        <li onClick={handleOpen} className='hover:bg-[#F5F5F5] py-[20px] px-[32px] rounded-md my-[4px] mx-[2px] cursor-pointer'>
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

                {/* settings-dropdown */}
                <div className="group cursor-pointer max-[700px]:absolute max-[700px]:top-[25px] max-[700px]:right-5 relative">
                    <svg onClick={dropDownSettings} aria-label="Daha Fazla" class="text-[#b8b8b8] group-hover:text-black transition-colors duration-300" fill="rgb(184, 184, 184)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Daha Fazla</title><rect fill="currentColor" height="2.5" rx="1.25" width="21" x="3" y="7"></rect><rect fill="currentColor" height="2.5" rx="1.25" width="14" x="10" y="15"></rect></svg>
                    <div id='settings' className='absolute top-7 -left-[8.5rem] border-[1px] border-gray-100 rounded-xl w-[174px] font-semibold text-[15px] hidden'>
                        <ul className='flex flex-col'>
                            <li className='p-3 border-b-[1px]'>Görünümü değiştir</li>
                            <li className='p-3 border-b-[1px]'>Hakkında</li>
                            <li className='p-3 border-b-[1px]'>Sorun bilir</li>
                            <li className='p-3'>Çıkış yap</li>
                        </ul>
                    </div>
                </div>

                <div className='fixed bottom-8 left-10 hover:scale-105 duration-200 cursor-pointer flex w-[40%] justify-center max-[700px]:justify-center max-[700px]:left-0 max-[700px]:flex max-[700px]:w-full max-[700px]:bottom-24 z-10'>
                    <div className='flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-sm border-[1px] border-gray-100 shadow-md bg-white' onClick={changePostStatus}>
                        <span>{post}</span> <svg aria-hidden="true" className='text-[#b8b8b8]' fill="none" height="16" viewBox="0 0 12 16" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M0.640625 11.0645C0.640625 10.8594 0.722656 10.6484 0.86914 10.5078L4.16211 7.25586C4.31445 7.10937 4.51367 7.02148 4.70703 7.02148C5.14062 7.02148 5.43359 7.33203 5.43359 7.74805C5.43359 7.97656 5.3457 8.14062 5.20508 8.27539L3.86914 9.57617L2.91406 10.373L4.25 10.3145L11.041 10.3145C11.498 10.3145 11.8145 10.6191 11.8145 11.0645C11.8145 11.5098 11.498 11.8145 11.041 11.8145L4.25 11.8145L2.91406 11.7559L3.86914 12.5527L5.20508 13.8535C5.3457 13.9883 5.43359 14.1523 5.43359 14.3809C5.43359 14.7969 5.14062 15.1074 4.70703 15.1074C4.51367 15.1074 4.31445 15.0195 4.16211 14.873L0.86914 11.6211C0.722656 11.4746 0.640625 11.2695 0.640625 11.0645ZM0.640625 4.92969C0.640625 4.48437 0.957031 4.17969 1.41406 4.17969L8.20508 4.17969L9.54102 4.23828L8.58594 3.44141L7.25 2.14648C7.10937 2.00586 7.02148 1.8418 7.02148 1.61328C7.02148 1.19727 7.31445 0.892578 7.74805 0.892578C7.94141 0.892578 8.14062 0.980469 8.29297 1.12695L11.5859 4.37305C11.7324 4.51953 11.8145 4.72461 11.8145 4.92969C11.8145 5.13477 11.7324 5.3457 11.5859 5.48633L8.29297 8.73828C8.14062 8.88477 7.94141 8.97266 7.74805 8.97266C7.31445 8.97266 7.02148 8.66797 7.02148 8.25195C7.02148 8.02344 7.10937 7.85937 7.25 7.72461L8.58594 6.41797L9.54102 5.62109L8.20508 5.68555L1.41406 5.68555C0.957031 5.68555 0.640625 5.375 0.640625 4.92969Z" fill="currentColor"></path></svg>
                    </div>
                </div>

                {/* bottonav */}
                <nav className='hidden max-[700px]:block fixed bottom-0 left-0 w-full bg-white z-10 opacity-95'>
                    <ul className='flex justify-around'>
                        <NavLink to="/" className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            {
                                post === "Senin için" ? (
                                    <svg aria-label="Ana Sayfa" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="rgb(0, 0, 0)" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ana Sayfa</title><path d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>
                                ) : (
                                    <svg aria-label="Ana Sayfa" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ana Sayfa</title><path clip-rule="evenodd" d="M2.25 12.8859V20.7501C2.25 21.8546 3.14543 22.7501 4.25 22.7501H5.31715C5.36391 22.7501 5.4042 22.7183 5.41503 22.6728C5.94965 20.4272 7.90428 17.5 13 17.5C18.0957 17.5 20.0504 20.4272 20.585 22.6728C20.5958 22.7183 20.6361 22.7501 20.6829 22.7501H21.75C22.8546 22.7501 23.75 21.8546 23.75 20.7501V12.8859C23.75 11.3768 23.0685 9.94851 21.8954 8.99919L16.1454 4.34576C14.3112 2.86131 11.6888 2.86131 9.85455 4.34576L4.10455 8.9992C2.93153 9.94851 2.25 11.3768 2.25 12.8859ZM17.5 12C17.5 14.4853 15.4853 16.5 13 16.5C10.5147 16.5 8.5 14.4853 8.5 12C8.5 9.51472 10.5147 7.5 13 7.5C15.4853 7.5 17.5 9.51472 17.5 12Z" fill="currentColor" fill-rule="evenodd"></path><path d="M21.8954 8.99919L22.6818 8.02753L22.6818 8.02753L21.8954 8.99919ZM16.1454 4.34576L15.3591 5.31742L15.3591 5.31742L16.1454 4.34576ZM9.85455 4.34576L9.06819 3.37409L9.06819 3.37409L9.85455 4.34576ZM4.10455 8.9992L4.89091 9.97086L4.89091 9.97086L4.10455 8.9992ZM20.585 22.6728L21.801 22.3833L20.585 22.6728ZM3.5 20.7501V12.8859H1V20.7501H3.5ZM4.25 21.5001C3.83579 21.5001 3.5 21.1643 3.5 20.7501H1C1 22.545 2.45507 24.0001 4.25 24.0001V21.5001ZM5.31715 21.5001H4.25V24.0001H5.31715V21.5001ZM6.63104 22.9623C6.84954 22.0445 7.35491 21.0048 8.30616 20.1971C9.24186 19.4026 10.7054 18.75 13 18.75V16.25C10.1989 16.25 8.13724 17.0609 6.68804 18.2914C5.25439 19.5088 4.51514 21.0555 4.19901 22.3833L6.63104 22.9623ZM13 18.75C15.2946 18.75 16.7581 19.4027 17.6938 20.1971C18.6451 21.0048 19.1505 22.0445 19.369 22.9623L21.801 22.3833C21.4849 21.0555 20.7456 19.5088 19.312 18.2914C17.8628 17.0609 15.8011 16.25 13 16.25V18.75ZM21.75 21.5001H20.6829V24.0001H21.75V21.5001ZM22.5 20.7501C22.5 21.1643 22.1642 21.5001 21.75 21.5001V24.0001C23.5449 24.0001 25 22.545 25 20.7501H22.5ZM22.5 12.8859V20.7501H25V12.8859H22.5ZM21.1091 9.97086C21.9889 10.6828 22.5 11.7541 22.5 12.8859H25C25 10.9996 24.1481 9.21417 22.6818 8.02753L21.1091 9.97086ZM15.3591 5.31742L21.1091 9.97086L22.6818 8.02753L16.9318 3.37409L15.3591 5.31742ZM10.6409 5.31743C12.0166 4.20409 13.9834 4.20409 15.3591 5.31742L16.9318 3.37409C14.639 1.51853 11.361 1.51853 9.06819 3.37409L10.6409 5.31743ZM4.89091 9.97086L10.6409 5.31743L9.06819 3.37409L3.31819 8.02753L4.89091 9.97086ZM3.5 12.8859C3.5 11.7541 4.01115 10.6828 4.89091 9.97086L3.31819 8.02753C1.85191 9.21418 1 10.9996 1 12.8859H3.5ZM13 17.75C16.1756 17.75 18.75 15.1756 18.75 12H16.25C16.25 13.7949 14.7949 15.25 13 15.25V17.75ZM7.25 12C7.25 15.1756 9.82436 17.75 13 17.75V15.25C11.2051 15.25 9.75 13.7949 9.75 12H7.25ZM13 6.25C9.82436 6.25 7.25 8.82436 7.25 12H9.75C9.75 10.2051 11.2051 8.75 13 8.75V6.25ZM18.75 12C18.75 8.82436 16.1756 6.25 13 6.25V8.75C14.7949 8.75 16.25 10.2051 16.25 12H18.75ZM19.369 22.9623C19.5141 23.572 20.0583 24.0001 20.6829 24.0001V21.5001C21.2138 21.5001 21.6775 21.8647 21.801 22.3833L19.369 22.9623ZM5.31715 24.0001C5.94166 24.0001 6.4859 23.572 6.63104 22.9623L4.19901 22.3833C4.32249 21.8647 4.78616 21.5001 5.31715 21.5001V24.0001Z" fill="currentColor"></path></svg>
                                )
                            }
                        </NavLink>
                        <NavLink to="/search" className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <svg aria-label="Ara" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Ara</title><path clip-rule="evenodd" d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                        </NavLink>
                        <li onClick={handleOpen} className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <svg aria-label="Oluştur" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Oluştur</title><path d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path><path d="M21.75 4.25L13.75 12.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>
                        </li>
                        <NavLink to="/activity" className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <svg aria-label="Bildirimler" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Bildirimler</title><path d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z" stroke="currentColor" stroke-width="2.5"></path></svg>
                        </NavLink>
                        <NavLink to="/profile" className='hover:bg-[#F5F5F5] py-5 px-8 rounded-md my-[4px] mx-[2px] transition-all duration-500 cursor-pointer max-[700px]:px-4'>
                            <svg aria-label="Profil" class="x1lliihq x1n2onr6" color="rgb(184, 184, 184)" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26"><title>Profil</title><circle cx="13" cy="7.25" r="4" stroke="currentColor" stroke-width="2.5"></circle><path d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z" stroke="currentColor" stroke-width="2.5"></path></svg>
                        </NavLink>

                    </ul>
                </nav>

            </header>
            {/* create-modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box className='flex flex-col justify-center items-center' sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <span className='text-white font-bold text-[16px]'>Yeni yazışma</span>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className="bg-white rounded-2xl flex flex-col w-[618px] max-[755px]:w-[378px] max-[378px]:w-[250px]">
                        <Typography>
                            <div className='flex gap-x-3 text-[15px] text-[#999999] p-6 pb-4'>
                                <div>
                                    <img src={img} alt="" className='h-9 w-9 rounded-full object-cover' />
                                </div>
                                <div className='flex flex-col -mt-[2px] w-full'>
                                    <div className='font-semibold text-black'>alper.iron</div>
                                    <div className='-mt-[2px]'><input type="text" placeholder='Bir yazışma başlat...' className='border-none outline-none text-black w-full' /></div>
                                    <div className='mt-2 cursor-pointer'>
                                        <svg aria-label="Medya ekle" class="x1lliihq x1n2onr6" color="rgb(153, 153, 153)" fill="rgb(153, 153, 153)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Medya ekle</title><g><path clip-rule="evenodd" d="M2.00207 9.4959C1.65132 7.00019 1.47595 5.75234 1.82768 4.73084C2.13707 3.83231 2.72297 3.05479 3.50142 2.50971C4.38639 1.89005 5.63425 1.71467 8.12996 1.36392L10.7047 1.00207C13.2004 0.651325 14.4482 0.47595 15.4697 0.827679C16.3682 1.13707 17.1458 1.72297 17.6908 2.50142C17.9171 2.82454 18.0841 3.19605 18.2221 3.65901C17.7476 3.64611 17.2197 3.64192 16.6269 3.64055C16.5775 3.5411 16.5231 3.44881 16.4621 3.36178C16.0987 2.84282 15.5804 2.45222 14.9814 2.24596C14.3004 2.01147 13.4685 2.12839 11.8047 2.36222L7.44748 2.97458C5.78367 3.20841 4.95177 3.32533 4.36178 3.73844C3.84282 4.10182 3.45222 4.62017 3.24596 5.21919C3.01147 5.90019 3.12839 6.73209 3.36222 8.3959L3.97458 12.7531C4.15588 14.0431 4.26689 14.833 4.50015 15.3978C4.50083 16.3151 4.50509 17.0849 4.53201 17.7448C4.13891 17.4561 3.79293 17.1036 3.50971 16.6991C2.89005 15.8142 2.71467 14.5663 2.36392 12.0706L2.00207 9.4959Z" fill="currentColor" fill-rule="evenodd"></path><g id="Frame 290280"><g clip-path="url(#clip0_16905_4767)"><rect fill="none" height="15.5" rx="3.75" stroke="currentColor" stroke-width="1.5" width="15.5" x="6.75" y="5.8894"></rect><path d="M6.6546 17.8894L8.59043 15.9536C9.1583 15.3857 10.0727 15.3658 10.6647 15.9085L12.5062 17.5966C12.9009 17.9584 13.5105 17.9451 13.8891 17.5665L17.8181 13.6376C18.4038 13.0518 19.3536 13.0518 19.9394 13.6375L22.0663 15.7644" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"></path><circle cx="10.75" cy="9.8894" fill="currentColor" r="1.25"></circle></g></g></g><defs><clipPath id="clip0_16905_4767"><rect fill="white" height="17" rx="4.5" width="17" x="6" y="5.1394"></rect></clipPath></defs></svg>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                        <Typography>
                            <div className='p-6 text-[15px]'>
                                <div className="flex justify-between">
                                    <div className='text-[#999999]'>
                                        Herkes yanıtlayabilir
                                    </div>
                                    <div>
                                        <button className='px-4 border-[1px] py-1 rounded-xl border-gray-200 text-black'>Paylaş</button>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Navbar