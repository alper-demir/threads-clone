import SearchRecommendedUsers from '../components/SearchRecommendedUsers'
import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"
import image5 from "../assets/images/5.jpg"
import image7 from "../assets/images/7.jpg"
import image8 from "../assets/images/8.jpg"
import image9 from "../assets/images/9.jpg"
import Footer from './../components/Footer';
const Search = () => {

  const users = [
    {
      id: 1,
      image: image1,
      username: "mando",
      fullname: "Din Djarin",
      follower: 1566
    },
    {
      id: 2,
      image: image2,
      username: "bo-kryze",
      fullname: "Bo-Katan Kryze",
      follower: 8443
    },
    {
      id: 3,
      image: image3,
      username: "chosenone",
      fullname: "Darth Vader",
      follower: 666.666
    },
    {
      id: 4,
      image: image4,
      username: "palpatine_sheev",
      fullname: "Darth Sidious",
      follower: 884.111
    },
    {
      id: 5,
      image: image5,
      username: "ashla",
      fullname: "Ahsoka Tano",
      follower: 188.765
    },
    {
      id: 7,
      image: image7,
      username: "triss",
      fullname: "Triss Merigold",
      follower: 109.999
    },
    {
      id: 8,
      image: image8,
      username: "ciri",
      fullname: "Cirilla",
      follower: 55.951
    },
    {
      id: 9,
      image: image9,
      username: "olsen.elizabeth",
      fullname: "Elizabeth Olsen",
      follower: 163.944
    }
  ]

  return (
    <div className='max-w-[572px] mx-auto flex justify-center flex-col mt-2 relative text-[15px] max-sm:p-2'>

      {/* input-area */}
      <div className='mb-3'>
        <input type="text" placeholder='Ara' className='bg-[#FAFAFA] pl-[52px] px-4 py-[17px] rounded-2xl border-[1px] outline-none w-full dark:bg-[#0A0A0A] dark:text-white dark:border-opacity-30 dark:border-[#777777] placeholder:text-[#777777]' />
        <div className='absolute left-5 top-[14px] p-2 max-sm:left-7 max-sm:top-[22px]'>
          <svg aria-label="Ara" class="x1lliihq x1n2onr6 dark:text-[#4d4d4d]" color="rgb(184, 184, 184)" fill="transparent" height="16" role="image" viewBox="0 0 26 26" width="16"><title>Ara</title><path clip-rule="evenodd" d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z" fill="currentColor" fill-rule="evenodd"></path></svg>
        </div>
      </div>

      {/* recommended-pages-users */}

      <div className='mt-3'>

        {users.map((user) => (
          <SearchRecommendedUsers key={user.id} user={user} />
        )
        )}
      </div>


      <div className='h-32'></div>
      <div className="flex items-center justify-center"><Footer /></div>
    </div>

  )
}

export default Search