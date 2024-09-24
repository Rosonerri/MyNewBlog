import img from "../../assets/star (2).png";
import { FaArrowDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center bg-[#BC9A7F] ">
      <div className="w-[95%] h-full flex justify-between">
        <div className="w-[20%] h-full flex items-center">
          <div className="flex w-[20%]">
            <img src={img} alt="" className="" />
            <p className="mt-4 font-[700] text-[22px] text-[white] ">Blog</p>
          </div>
        </div>
        <div className="w-[40%] h-full justify-between items-center text-white cursor-pointer hidden xl:flex">
          <div>Home</div>
          <div className="flex justify-center items-center">
            <div>Blogs</div>
            <div>
              <FaArrowDown />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>Resources</div>
            <div>
              <FaArrowDown />
            </div>
          </div>
          <div>Pricing</div>
          <Link to="/login">
            <button className="border p-1 rounded-md font-[700]">Login</button>
          </Link>
          <Link to="/signup">
            <button className="border p-1 rounded-md font-[700]">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="text-[50px] mt-[8px] text-[white] xl:hidden cursor-pointer">
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
