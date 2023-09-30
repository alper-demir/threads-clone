import React from 'react'
import StartPost from './../components/StartPost';
import Posts from '../components/Posts';
import gif from "../assets/images/ahsokavsvader.gif"
import sunset from "../assets/images/sunset.jpg"
import triss from "../assets/images/triss.jpg"
import cs2 from "../assets/video/cs2.mp4"
import { Link } from 'react-router-dom';
const HomeMain = () => {

  const posts = [
    {
      id: 1,
      user: "alper.iron",
      content: "Ahsoka bölüm 5 Anakin vs Padawan Ahsoka",
      like: 15.654,
      comment: 4.154,
      media: {
        media: true,
        type: "image",
        content: gif
      }
    },
    {
      id: 2,
      user: "anotheruser",
      content: "sunset.",
      like: 3.465,
      comment: 864,
      media: {
        media: true,
        type: "image",
        content: sunset
      }
    },
    {
      id: 3,
      user: "trissmerigold",
      content: "Kızıl sahire.",
      like: 744.623,
      comment: 55.384,
      media: {
        media: true,
        type: "image",
        content: triss
      }
    },
    {
      id: 4,
      user: "xFelonious",
      content: "Cs2'de yeni maceralar..",
      like: 102,
      comment: 8,
      media: {
        media: true,
        type: "video",
        content: cs2
      }
    },
  ]

  return (

    <div>
      <div className='max-w-[572px] mx-auto flex justify-center flex-col'>

        <StartPost />
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        )
        )}

        <div className='h-40 flex justify-center items-center max-sm:mb-28'>
          <Link to="/login" className='p-3 bg-blue-700 hover:opacity-80 text-white rounded-xl'>Kayıt ol sayfasını gördün mü??</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeMain