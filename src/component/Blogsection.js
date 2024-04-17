import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight,faStar } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'
import 'aos/dist/aos.css'


const BlogSection = () => {
    useEffect(() =>{
      AOS.init({duration: 2000})
    })
  const initialProfileId = 1; // Set the initial profile ID here
  const [selectedProfile, setSelectedProfile] = useState(initialProfileId);

  const profiles = [
    {
      id: 1,
      name: 'Albert Monica',
      status:'College Student',
      image: 'https://img.freepik.com/free-photo/african-american-woman-wearing-denim-overalls_273609-10159.jpg?w=740',
      review:    'I stumbled upon this platform while searching for resources to supplement my studies, and it\'s been a game-changer. The depth and breadth of the course catalog are impressive, covering everything from beginner to advanced topics.',
      
    },
    {
      id: 2,
      name: 'Stephen John',
      status:'High School Student',
      image: 'https://img.freepik.com/premium-photo/smile-portrait-black-man-with-glasses-happy-against-white-background-nerd-geek-happiness-african-male-smiling-with-proud-facial-expression-against-studio-backdrop-confidence_590464-189183.jpg?w=740',
      review: ' As a student of hr-tutor online education, I can confidently say that it has been incredible experience.The platform is user-friendly and the course are well structured,making it easy for me to learn at my own pace ',
    },
    {
      id: 3,
      name: 'Halima Abubakar',
      status:'Developer',
      image: 'https://img.freepik.com/free-photo/young-woman-wearing-striped-shirt-eyeglasses_273609-13230.jpg?w=740',
      review:   'As someone with a busy schedule, I\'m always on the lookout for flexible learning options. This platform fits the bill perfectly. I can access the courses anytime, anywhere, and at my own pace. The quality of instruction is top-notch, and I\'ve gained valuable skills that have helped me advance in my career. I couldn\'t be happier with my experience.',
      
    },
  ];

  const handleProfileClick = (profileId) => {
    setSelectedProfile(profileId);
  };

  return (
    <section className="bg-sky-700 text-white py-5">
    <div className="container mx-auto">
      <div className="headin flex flex-col gap-4 items-center">
        <p className="text-yellow-500 font-semibold">OUR TESTIMONIALS</p>
        <h3 className="text-2xl font-semibold">
          What Our Student Say About Us
        </h3>
      </div>

      <div className="flex flex-col items-center">
      
      <div className="flex gap-4">
        {profiles.map(profile => (
          <div key={profile.id} className="profile">
            <img
              src={profile.image}
              alt={profile.name}
              onClick={() => handleProfileClick(profile.id)}
              className="cursor-pointer rounded-full h-14 object-cover w-14 hover:h-16 hover:w-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 px-2 md:w-1/3 mx-auto container shadow-md py-2 mb-4" data-aos="fade-down">
        {profiles.map(profile => (
          <div key={profile.id} className={`${selectedProfile === profile.id ? 'block' : 'hidden'}`} >
            <h6 className='text-xl font-semibold text-center'>{profile.name}</h6>
            <p className='text-gray-400 text-center'>{profile.status}</p>
            <div className="flex flex-row items-center justify-center gap-1">
              <i>
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </i>
            </div>
            <i><FontAwesomeIcon icon={faQuoteLeft} className='text-gray-300 md:text-5xl text-4xl ms-20 '/></i>

            <p className='mx-12 h-24 overflow-y-scroll flex'>{profile.review}</p>
            <i><FontAwesomeIcon icon={faQuoteRight} className='text-gray-300 md:text-5xl text-4xl ms-20'/></i>

          </div>
        ))}
      </div>
    </div>
   
    </div>
  </section>
   
  );
};

export default BlogSection;
