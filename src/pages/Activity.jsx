import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"
import image5 from "../assets/images/5.jpg"
import image7 from "../assets/images/7.jpg"
import image8 from "../assets/images/8.jpg"
import image9 from "../assets/images/9.jpg"
import Activities from "../components/Activities"
import Footer from './../components/Footer';
const Activity = () => {

  const activities = [
    {
      id: 1,
      image: image1,
      username: "mando",
      status: "Threads'da yeni",
      statusCode: 0
    },
    {
      id: 2,
      image: image2,
      username: "bo-kryze",
      status: "Artık takip ediyorsun",
      statusCode: 1
    },
    {
      id: 3,
      image: image3,
      username: "chosenone",
      status: "Seni takip ediyor",
      statusCode: 1
    },
    {
      id: 11,
      image: image9,
      username: "olsen.elizabeth",
      status: "İlk yazışmasını paylaştı",
      statusCode: 2,
      content: "lorem ipsum color."
    },
    {
      id: 4,
      image: image4,
      username: "palpatine_sheev",
      status: "Seni takip ediyor",
      statusCode: 1
    },
    {
      id: 5,
      image: image5,
      username: "ashla",
      status: "Seni takip ediyor",
      statusCode: 1
    },
    {
      id: 7,
      image: image7,
      username: "triss",
      status: "Seni takip ediyor",
      statusCode: 1
    },
    {
      id: 8,
      image: image8,
      username: "ciri",
      status: "Seni takip ediyor",
      statusCode: 1
    },
    {
      id: 10,
      image: image9,
      username: "olsen.elizabeth",
      status: "İlk yazışmasını paylaştı",
      statusCode: 2,
      content: "lorem ipsum color."
    },
    {
      id: 9,
      image: image9,
      username: "olsen.elizabeth",
      statusCode: 3,
      content: "lorem ipsum."
    },
    {
      id: 12,
      image: image9,
      username: "olsen.elizabeth",
      status: "İlk yazışmasını paylaştı",
      statusCode: 2,
      content: "lorem ipsum color."
    }
  ]

  return (
    <div className='max-w-[572px] mx-auto flex justify-center flex-col text-[15px] max-sm:p-3 max-sm:mt-2 relative mt-6'>
      {
        activities.map((activity) => (
          <Activities key={activity.id} activity={activity} />
        ))
      }
      <div className='h-32'></div>
      <div className="flex items-center justify-center"><Footer /></div>
    </div>
  )
}

export default Activity