import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container mt-24 lg:mt-6 mx-auto p-5 ">
      <div className="px-6 lg:mx-5 lg:mt-6">
        <h1 className="text-grey-600 font-bold text-2xl lg:text-3xl text-left">
          Quick <span className="text-orange-500">Links</span>
        </h1>
        <hr className="my-6"></hr>
        <div className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8">
          <div>
            <p className="py-4">
              Welcome to <span className="text-orange-500">Foodify</span> your
              ultimate destination for a world of culinary delights. At Foodify,
              we're passionate about connecting you with your favorite
              restaurants and dishes. Our mission is to make food ordering and
              delivery as seamless and enjoyable as possible.
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
              <a href="https://wa.me">
                {" "}
                <FaWhatsapp
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-orange-500"
                />{" "}
              </a>
              <a href="https://instagram.com/">
                {" "}
                <FaInstagram
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-orange-500"
                />{" "}
              </a>
              <a href="https://twitter.com">
                <FaTwitter
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-orange-500"
                />
              </a>
              <a href="mailto:arpitnalkande1603@gmail.com">
                <FiMail
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-orange-500"
                />
              </a>
            </div>
            <h3 className="text-md to-black">Made with ❤ by Arpit Nalkande</h3>
          </div>
          <div className="lg:col-span-2 flex justify-between sm:mx-10 lg:mx-14  mt-6">
            <div>
              <h6 className="font-medium text-orange-500">Links</h6>
              <ul>
                <li className="py-2 text-sm hover:text-orange-600 cursor-pointer">
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li className="py-2 text-sm hover:text-orange-600 cursor-pointer">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="py-2 text-sm hover:text-orange-600 cursor-pointer">
                  <Link to="/categories">Categories</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-orange-500">Support</h6>
              <ul>
                <li className="py-2 text-sm ">About</li>
                <li className="py-2 text-sm ">FAQ</li>
                <li className="py-2 text-sm ">T&C</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
