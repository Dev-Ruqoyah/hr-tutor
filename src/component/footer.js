import {  faMailBulk, faShare, faXmark } from "@fortawesome/free-solid-svg-icons";
// import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
const Footer = () => {
  return (
    <div>
      <section className="session bg-slate-100 py-5">
        <div className="container mx-auto">
          <div className="heading my-3">
            <h3 className="text-yellow-500 font-semibold text-center">
              PAYMENT METHOD
            </h3>
            <h4 className="text-center text-2xl font-semibold">
              Join us and scale up <br />
              Your skill with your friends
            </h4>
            <p className="text-center my-1">
              We are providing awesome course and support to our <br /> student
              so that they can shine in their life perfectly
            </p>
          </div>
          <div className="toggle flex justify-center items-center gap-5">
            <p className="font-semibold">Montly</p>
            <div className="bg-blue-100 w-24 cursor-pointer rounded-lg flex justify-end pe-1">
                <div className="minus bg-blue-700 w-10 rounded-lg text-xl text-white text-center">
                    -
                </div>
            </div>
            <p className="font-semibold">Yearly</p>
          </div>
          <div className="users">
            <div className="grid grid-cols-1 md:grid-cols-2  place-content-center place-items-center">
                <div className="standard bg-white shadow-md my-4 rounded-lg p-5 w-2/3">
                    <h3 className="text-xl text-center font-semibold ">Standard User</h3>
                    <p className="text-center"><span className="text-2xl text-blue-700 ">$40/</span>month</p>
                    <div className="border my-5"></div>
                    <div className="listItems">
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faCheck} className="text-blue-300"/>
                            <p className="text-blue-700 font-medium">5 courses in a month</p>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faCheck} className="text-blue-300"/>
                            <p className="text-blue-700 font-medium">12 chapters in a day</p>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faCheck} className="text-blue-300"/>
                            <p className="text-blue-700 font-medium">5 forum in a month</p>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faXmark} className="text-red-300"/>
                            <p className="text-blue-700 font-medium">Private Lesson once in a month</p>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faXmark} className="text-red-300"/>
                            <p className="text-blue-700 font-medium">Weekly reward for improvement</p>
                        </div>
                    </div>
                   <div className="flex justify-center">
                   <button className=" border border-blue-400 rounded-lg hover:bg-blue-500 px-3 py-3 hover:text-white transition-all">Enroll now</button>
                   </div>
                </div>
                <div className="standard bg-white shadow-md my-4 rounded-lg p-5 w-2/3">
                    <h3 className="text-xl text-center font-semibold ">Premium User</h3>
                    <p className="text-center"><span className="text-2xl text-blue-700 ">$500/</span>month</p>
                    <div className="border my-5"></div>
                    <div className="listItems">
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faCheck} className="text-blue-300"/>
                            <p className="text-blue-700 font-medium">Unlimited Courses in a month</p>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faCheck} className="text-blue-300"/>
                            <p className="text-blue-700 font-medium">Umlimited chapters in a day</p>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faCheck} className="text-blue-300"/>
                            <p className="text-blue-700 font-medium">5 forum in a month</p>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faCheck} className="text-blue-300"/>
                            <p className="text-blue-700 font-medium">Private Lesson once in a month</p>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <FontAwesomeIcon icon={faCheck} className="text-blue-300"/>
                            <p className="text-blue-700 font-medium">Weekly reward for improvement</p>
                        </div>
                    </div>
                   <div className="flex justify-center">
                   <button className=" border bg-blue-400 rounded-lg hover:bg-blue-500 px-3 py-3 hover:text-white transition-all">Enroll now</button>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-6 bg-sky-700 text-white">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="firstContent mx-auto">
                    <h1 className="mb-3"><a className="text-xl md:text-3xl " href="#">hr-tutor</a></h1>
                    <p>St Fosilaa,20 forst street,4th <br />
                    Mexico city,Mexico 200015</p>
                    <div className="socialMedia">
                        <div className="flex gap-3 my-3">
                            <a href="#">
                                
                                <FontAwesomeIcon className="p-3 rounded-full border border-white hover:bg-white hover:text-sky-700" icon={faFacebook}/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon className="p-3 rounded-full border border-white hover:bg-white hover:text-sky-700" icon={faTwitter}/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon className="p-3 rounded-full border border-white hover:bg-white hover:text-sky-700" icon={faLinkedinIn}/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon className="p-3 rounded-full border border-white hover:bg-white hover:text-sky-700" icon={faInstagram}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="secondContent mx-auto">
                    <h2 className="text-medium text-2xl mb-3">Categories</h2>
                    
                   <div className="flex flex-col gap-3">
                   <p>Design Courses</p>
                   <p>Science Courses</p>
                   <p>Accounting</p>
                   <p>Mangement</p>
                   </div>
                </div>
                <div className="ThirdContent mx-auto">
                    <h2 className="text-medium text-2xl mb-3">Useful Links</h2>
                    
                   <div className="flex flex-col gap-3">
                   <p>Payment $ tax</p>
                   <p>Terms of services</p>
                   <p>Your Account</p>
                   <p>Privacy Policy</p>
                   </div>
                </div>
                <div className="fouthContent mx-auto">
                    <h3 className="text-2xl ">Stay Connected</h3>
                    <div className="mt-2 bg-white rounded-lg flex items-center px-1">
                        <input type="email" placeholder="Email address" name="" id="" className="bg-transparent" />
                        <button><FontAwesomeIcon icon={faShare} className="bg-sky-700 p-3 rounded-full mt-1"/></button>
                    </div>
                    <div>
                        <div className="flex gap-3 items-center mt-3">
                            <FontAwesomeIcon icon={faPhone}/>
                        <a href="tel:+2348148462822">Call us</a>
                        </div>
                        <div className="flex gap-3 items-center mt-3">
                            <FontAwesomeIcon icon={faMailBulk}/>
                        <a href="tel:+2348148462822">leave a mail</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border my-4"></div>
            <p className="text-center">All right reserved <a href="https:\\github\Dev-Ruqoyah "  className="text-yellow-200">codewithRuqoyyah</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
