import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import  Google from "./Google"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useSelector } from "react-redux";


import googleLogo from "../assets/google.svg";
const image1 =
  "https://static.vecteezy.com/system/resources/previews/010/842/688/original/3d-illustration-ethereum-blockchain-png.png";
const image2 = "https://cdn-icons-png.flaticon.com/512/8757/8757988.png";
const image3 = "https://cdn-icons-png.flaticon.com/512/2091/2091665.png";

const images = [image1, image2, image3];
const Login = () => {
  const currentIndex = useSelector((state) => state.counter.index);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    address: "",
    phoneNumber: "",
    userIcon: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    const newValue =
      type === "file" ? files[0] : type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="w-full h-[100vh] bg-primary-1 flex items-center">
      <div className="w-[65%] h-[90%] mx-auto rounded-2xl flex">
        <div className="flex flex-col w-[50%] bg-primary-2 rounded-l-2xl p-5 text-center">
        
          <motion.div className="flex justify-center items-center mt-20" drag whileHover={{scale:1.05}} dragSnapToOrigin="true" dragConstraints={{left:20,right:20,top:20,bottom:1}} dragElastic={0.25} initial={{y:-100}} animate={{y:0}} transition={{ delay:0.1}} dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}>
            <Carousel images={images} />
          </motion.div>
          <motion.div className="" initial={{y:-100}} animate={{y:0}}>
          <span className="text-3xl  text-white my-5 block">Blockchain website</span>
          <span className="text-2xl text-white my-3 w-3/4 mx-auto font-light">
            Unlocking the Future: Empowering Possibilities with Blockchain
            Innovation
          </span>
          <div className="dots flex justify-center mt-5">
            {images.map((_, index) => (
              <svg
                key={index}
                className={`w-3 h-3 mx-1 ${
                  currentIndex === index ? "text-white" : "text-gray-400"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="6" />
              </svg>
            ))}
          </div>
          </motion.div>
        </div>

        <div className="w-1/2 rounded-r-lg bg-primary-6 flex flex-col justify-center p-5">
          <h1 className="mx-auto my-10 text-4xl">BlockChain Website</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Username or Email"
              className="px-3 py-2 border h-14 rounded-lg"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="px-3 py-2 border h-14 rounded-lg"
            />
            <div className="flex justify-between items-center">
              <a href="#" className="text-blue-800 hover:text-blue-900">
                Forgot Password?
              </a>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="flex items-center my-4">
            <hr className="border-gray-600 border-1 w-full" />
            <span className="text-gray-600 mx-4">or</span>
            <hr className="border-gray-600 border-1 w-full" />
          </div>
          <button className="font-light rounded-xl p-2 w-1/2 mx-auto my-4 border-gray-400 border-[1px]">
            <img src={googleLogo} alt="" className="w-8 inline-block" />
            Sign In with Google
          </button>
          <span className="mt-4 mx-auto">
            Are you new? <Link className="underline">Create an account</Link>
          </span>
        </div>
      </div>
      <GoogleOAuthProvider clientId="1072771106403-geoogdmeu3mfecn4vgq9t0j5mhvk8ea0.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
