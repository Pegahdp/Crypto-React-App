import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaGit,
  FaGithub,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" mt-8 pt-8 px-8 md:px-16 bg-blue-500 text-white">
      <div className="grid md:grid-cols-2">
        <div className="flex gap-8 md:gap-16 justify-evenly w-full md:max-w-[500px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="w-full flex justify-end text-left">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-start py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-left">
                Sign up for crypto news
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-button text-[#2d3748]   p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-button text-[#2d3748] font-bold px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">
                    Sign up
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-white">
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Powered by Coin Gecko</p>
    </div>
  );
}

export default Footer;
