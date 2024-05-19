import React, { useEffect } from "react";
import { SiReactrouter, SiTailwindcss, SiReact } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex-row  ">
      <div >
        <div className="py-7 p-8 mt-10 flex bg-fuchsia-200 text-white">
         
          <div className=" px-7">
            <h1 className="font-semibold text-2xl text-black">About Developer</h1>
            <p className="text-pink-950 font-semibold">Hello! I'm <span className="font-semibold text-white bg-blue-700
             rounded-lg"> Pragati Srivastava </span>a dedicated Full Stack Web Developer. I've crafted this website with a passion for detail and a love for creating seamless, user-friendly online stores. My goal is to make your shopping experience not only effortless but also enjoyable. Every element on this site is designed to stand out, providing you with a smooth and delightful journey from browsing to checkout. Welcome, and happy shopping!
            <br/><br/><br/></p>

            <h1 className="font-semibold text-2xl text-black">Frameworks and Technologies Used</h1>
            <p className=" text-gray-900 font-semibold">When developing the eBay WebApp, I leveraged powerful tools and technologies to create a modern, smooth, single-page application. By using Tailwind CSS for styling and React for the frontend framework, I ensured a seamless user experience. These technologies allowed me to build an optimized, responsive, and highly interactive website that makes online shopping a breeze.</p>
            <div className="flex text-4xl md:text-[60px] justify-evenly  my-8 text-black">
              <span data-aos="zoom-in">
                <SiReact className="hover:text-[#149ECA]  transition-all ease duration-300" />
              </span>
              <span data-aos="zoom-in">
                <SiReactrouter className="hover:text-[#F44250] transition-all ease duration-300" />
              </span>
              <span data-aos="zoom-in">
                <SiTailwindcss className="hover:text-[#38BDF8] transition-all ease duration-300" />
              </span>
            </div>

            <h1 className="font-semibold text-2xl text-black">Exploring the Backend</h1>
            <p className="text-gray-900 font-semibold">
While my primary focus is on designing the front end of websites, I also developed a robust backend API to seamlessly fetch data. This integration ensures smooth communication between the frontend and backend, delivering a flawless and enjoyable user experience. My attention to both the visual and functional aspects guarantees that every interaction on the site is efficient and engaging.</p>
            <h1 className="font-semibold  text-gray-900"> I look forward to establishing a connection.</h1>
            <p className="font-semibold  text-gray-900" >Feel free to explore the website, discover our offerings, and don’t hesitate to share any questions or suggestions. Your journey through this online shopping experience matters to us, and we’re here to assist. Happy browsing!</p>
            <div className="flex  md:text-[50px] text-red justify-evenly my-8 text-black">
              <Link to={"https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXUsZx%2BkBT06pNownOs8ehQ%3D%3D"} target="_blank" data-aos="zoom-in">
                <FaLinkedin className="hover:text-[#b50030] text-gray-500 transition-all ease duration-300" />
              </Link>
              <Link to={"https://github.com/jyotipatthak"} target="_blank" data-aos="zoom-in">
                <FaGithub className="hover:text-[#b50009]  text-gray-500 transition-all ease duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
