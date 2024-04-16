import React from "react";
import Counter from "./counter";
import Counter2 from "./counter2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBrain,
  faFlask,
  faPaintBrush,
  faQuoteLeft,
  faQuoteRight,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import {
  faMoneyBill1Wave,
  faPlane,
  faCode,
  faLanguage,
  faBook,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
// export default function MyFunctionalComponent() {
//   useEffect(() => {
//       AOS.init();
//     }, [])
const Home = () => {
  return (
    <div className="home">
      {/* section1 */}
      <section style={{}} className=" bg-slate-100 md:pb-20">
        <div className="container mx-auto mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-9">
            <div className="content1 my-auto md:ps-10">
              <div className="herotext flex flex-col gap-4 ">
                <p className="text-yellow-600 text-md font-semibold pt-3">
                  100% SATISFACTION GUARANTEE
                </p>
                <h1 className="md:text-6xl text-4xl">
                  Find Your <br /> Perfect
                  <span className="border-b-4  border-yellow-600 font-bold">
                    {" "}
                    Tutor
                  </span>
                </h1>
                <p className="text-xl">
                  We help you find perfect tutor 1-on-1 lessons. <br />
                  It is Completely free and private
                </p>
              </div>
              <div className="hero-buttons flex gap-3 mt-3">
                <button className="bg-yellow-400 rounded-lg hover:bg-yellow-500 px-3 py-3">
                  Get Started
                </button>
                <button className="py-2 px-3 border-2 border-yellow-400 hover:border-yellow-500 hover:bg-yellow-4*00 rounded-lg">
                  See how it works
                </button>
              </div>
            </div>
            <div className="content2  p-4">
              <div className="grid grid-cols-2 grid-rows-2 gap-8">
                <div className="image1 rounded-s-full">
                  <img
                    className=" rounded-s-full"
                    src="https://media.istockphoto.com/id/1824731429/photo/young-asian-woman-using-tablet-over-white-background-technology-concept.jpg?s=612x612&w=0&k=20&c=X8rj24j0hkdUmoV9RDIvF68Kan665yHq4TPFgmw6f2o="
                    alt=""
                  />
                </div>
                <div className="image2">
                  <img
                    className="rounded-lg"
                    src="https://img.freepik.com/free-photo/waist-up-shot-pretty-girl-smiles-pleasantly_273609-28224.jpg?t=st=1712065714~exp=1712069314~hmac=372f446b0719e8953a9d82959538122793637148774fa8e4e1bcc66bc5070afd&w=740"
                    alt=""
                  />
                </div>
                <div className="image3">
                  <img
                    className="rounded-lg"
                    src="https://img.freepik.com/premium-photo/girl-with-glasses-holds-set-notebooks_274222-24335.jpg?w=740"
                    alt=""
                  />
                </div>
                <div className="image4" >
                  <img
                    className="rounded-e-full"
                    src="https://img.freepik.com/free-photo/portrait-smiling-young-african-male-student_171337-8884.jpg?t=st=1712066008~exp=1712069608~hmac=eb4842d6b25333d7c95ac2a9e9be5e2b92be61acbe423267cc7f26799224112f&w=740"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section>
        <div className="bg-sky-700 py-11">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between gap-9 mx-auto px-7 divide-x-2 divide-white">
              <div className="content-one">
                <h3 className="text-2xl text-white">
                  <Counter endValue={870} />
                </h3>
                <p className="text-md text-white">Expert Tutors</p>
              </div>
              <div className="content-one ps-2">
                <h3 className="text-2xl text-white">
                  <Counter2 endValue={200000} />
                </h3>
                <p className="text-md text-white">Hours tutored</p>
              </div>
              <div className="content-one ps-2">
                <h3 className="text-2xl text-white">
                  <Counter endValue={298} />
                </h3>
                <p className="text-md text-white">Subjects and Courses</p>
              </div>
              <div className="content-one ps-2">
                <h3 className="text-2xl text-white">
                  <Counter2 endValue={72560} />
                </h3>
                <p className="text-md text-white">Active student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className="bg-slate-100">
        <div className="container py-6 mx-auto ">
          <div className="header flex flex-wrap flex-col items-center justify-center">
            <p className="text-yellow-500 font-semibold">WHY CHOOSE US</p>
            <h4 className="text-2xl text-center">
              Benefits of online tutoring <br />
              services with us
            </h4>
          </div>
          <div className="flex flex-row flex-nowrap  gap-6 md:gap-4 pt-4 overflow-x-scroll md:flex-nowrap">
            {/* card-one */}
            <div className="card-one  md:basis-1/4 basis-1/2 shrink-0 shadow-md md:py-6 px-4 p-2 md:px-5 ">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faUsers}
                  className="bg-sky-700 p-2 text-md text-white rounded-md"
                />
              </i>
              <h4 className="text-xl font-semibold">One-on-one Teaching</h4>
              <p className="text-md">
                All our special education experts have a degree in special
                education
              </p>
            </div>
            {/* card-one */}
            <div className="card-one  md:basis-1/4 basis-1/2 shrink-0 shadow-md md:py-6 px-4 p-2 md:px-5">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faClock}
                  className="bg-lime-700 p-2 text-md text-white rounded-md"
                />
              </i>

              <h4 className="text-xl font-semibold">24/7 Tutor availability</h4>
              <p className="text-md">
                Our tutors are always available to respond as quick as possible
              </p>
            </div>
            {/* card-one */}
            <div className="card-one  md:basis-1/4 basis-1/2 shrink-0 shadow-md md:py-6 px-4 p-2 md:px-5">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faChalkboard}
                  className="bg-orange-700 p-2 text-md text-white rounded-md"
                />
              </i>

              <h4 className="text-xl font-semibold">Interactive Whiteboard</h4>
              <p className="text-md">
                Our digital whiteboard equipped with audio and video chat
                features
              </p>
            </div>
            {/* card-one */}
            <div className="card-one  md:basis-1/4 basis-1/2 shrink-0 shadow-md md:py-6 px-4 p-2 md:px-5">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faMoneyBill1Wave}
                  className="bg-pink-700 p-2 text-md text-white rounded-md"
                />
              </i>

              <h4 className="text-xl font-semibold">Affordable price</h4>
              <p className="text-md">
                Choose an expert tutor based on your budget
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section4 */}
      <div className="bg-slate-100 py-5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 md:px-5 grid-cols-1 gap-8 py-5 container mx-auto">
            <div className="grid-one rounded-xl mx-5  ">
              <div className="scheduling-image relative w-full">
                <img
                  src="https://img.freepik.com/premium-photo/young-pretty-afro-student-woman_1194-200954.jpg?w=740"
                  alt=""
                  className="rounded-xl md:w-9/12 "
                />
                <img
                  src="https://img.freepik.com/free-photo/young-smiling-student-woman-white-background_231208-2062.jpg?t=st=1713193230~exp=1713196830~hmac=bb6e383df472e8bbe563b4c70c60aceedab8336c90c3691140d6ffaa3636f56c&w=740"
                  className="absolute -bottom-8 right-20 rounded-full md:w-44 w-36 h-36 md:h-44 object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="grid-two md:ps-0 ps-4">
              <p className="text-yellow-500 font-semibold pb-4  ">
                CUSTOMIZE WITH YOUR SCHEDULE
              </p>
              <h3 className="text-2xl font-semibold">
                Personalized Professional <br />
                Online Tutor on Your Schedule
              </h3>
              <div className="description text-md py-4 ">
                <p className="pe-16">
                  Our Scheduling systems allow you to select based on your free
                  time.Ability to keeps track of your classes and tutoring
                  schedules and never miss your class.The best online class
                  scheduling system with easy accessibility.
                </p>
              </div>
              <button className="bg-yellow-500 px-4 py-2 hover:bg-yellow-400 rounded-md">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section5 */}
      <div className="bg-slate-100 py-5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-5 px-5 md:ps-10 container mx-auto">
            <div className="grid-two">
              <p className="text-yellow-500 font-semibold pb-4">
                CUSTOMIZE WITH YOUR STUDY PLAN
              </p>
              <h3 className="text-2xl font-semibold">
                Talented and Qualified <br />
                Tutors to serve you to your plan
              </h3>
              <div className="description text-md py-4 ">
                <p className="pe-16">
                  Our Scheduling systems allow you to select based on your free
                  time.Ability to keeps track of your classes and tutoring
                  schedules and never miss your class.The best online class
                  scheduling system with easy accessibility.
                </p>
              </div>
              <button className="bg-yellow-500 px-4 py-2 hover:bg-yellow-400 rounded-md">
                Get started
              </button>
            </div>
            <div className="grid-one ">
              <div className="scheduling-image relative">
                <img
                  src="https://img.freepik.com/premium-photo/portrait-happy-young-teenager-boy-standing-isolated-yellow-wall-carrying-backpack-textbooks-celebrating-success_171337-114643.jpg?w=740"
                  alt=""
                  className="w-3/6 rounded-xl  "
                />
                <img
                  src="https://img.freepik.com/premium-photo/young-african-american-girl-teen-student-denim-clothes-backpack-hold-pad-pc-isolated-blue-wall-wall_365776-63.jpg?w=740"
                  alt=""
                  className="absolute -bottom-10 md:-bottom-20  right-10 w-3/6 rounded-xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section6 */}
      <div className="bg-slate-100 py-5">
        <div className="container mx-auto">
          <div className="headin flex flex-col gap-4 items-center">
            <p className="text-yellow-500 font-semibold">SUBJECT WE BASED ON</p>
            <h3 className="text-2xl font-semibold">
              Find online Tutors in Any Subject
            </h3>
          </div>
          <div className="subject flex flex-row md:flex-wrap gap-4 flex-nowrap overflow-x-scroll pt-5 ps-5">
            <div className="md:basis-1/5 hover:bg-blue-200 shrink-0 basis-1/2 border px-4 py-4 flex flex-row gap-4 items-center rounded-xl">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faPlane}
                  className="text-blue-600 bg-blue-200 p-2 rounded-md"
                />
              </i>
              <p className="text-md">Engineering</p>
            </div>
            <div className="md:basis-1/4 shrink-0 hover:bg-green-200  basis-1/2 border px-4 py-4 flex flex-row gap-4 items-center rounded-xl">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-green-600 bg-green-200 p-2 rounded-md"
                />
              </i>
              <p className="text-md">Programming</p>
            </div>
            <div className="md:basis-1/4 shrink-0 hover:bg-purple-200 basis-1/2 border px-4 py-4 flex flex-row gap-4 items-center rounded-xl">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faLanguage}
                  className="text-purple-600 bg-purple-200 p-2 rounded-md"
                />
              </i>
              <p className="text-md">Languages</p>
            </div>
            <div className="md:basis-1/5 shrink-0 basis-1/2 border hover:bg-green-300 px-4 py-4 flex flex-row gap-4 items-center rounded-xl">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faFlask}
                  className="text-green-700 bg-green-300 p-2 rounded-md"
                />
              </i>
              <p className="text-md">Sciences</p>
            </div>
            <div className="md:basis-1/5 shrink-0 basis-1/2 border hover:bg-orange-200 px-4 py-4 flex flex-row gap-4 items-center rounded-xl">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-orange-600 bg-orange-200 p-2 rounded-md"
                />
              </i>
              <p className="text-md">History</p>
            </div>
            <div className="md:basis-1/4 shrink-0 basis-1/2 border hover:bg-lime-200 px-4 py-4 flex flex-row gap-4 items-center rounded-xl">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faBrain}
                  className="text-lime-600 bg-lime-200 p-2 rounded-md"
                />
              </i>
              <p className="text-md">Psycology</p>
            </div>
            <div className="md:basis-1/4 shrink-0 basis-1/2 border hover:bg-yellow-200 px-4 py-4 flex flex-row gap-4 items-center rounded-xl">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faPaintBrush}
                  className="text-yellow-600 bg-yellow-200 p-2 rounded-md"
                />
              </i>
              <p className="text-md">Web design</p>
            </div>
            <div className="md:basis-1/5 shrink-0 basis-1/2 border hover:bg-gray-200 px-4 py-4 flex flex-row gap-4 items-center rounded-xl">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="text-gray-600 bg-gray-200 p-2 rounded-md"
                />
              </i>
              <p className="text-md">See all</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
} 

export default Home;
