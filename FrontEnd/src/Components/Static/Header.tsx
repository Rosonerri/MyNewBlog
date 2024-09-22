import img from "../../assets/star (2).png"
const Header = () => {
  return (
    <div className="w-full h-[60px] bg-[crimson] flex justify-center items-center">
      <div className="w-[95%] h-full bg-white flex justify-between">
        <div className="w-[40%] h-full bg-slate-300 flex items-center">
          <div className="flex w-[10%]">
            <img src={img} alt="" className="w-11" />
            <p className="mt-4 font-[700] text-[22px] text-[#BA8A10] ">Blog</p>
          </div>
        </div>
        <div className="w-[40%] h-full bg-slate-500"></div>
      </div>
    </div>
  );
};

export default Header;
