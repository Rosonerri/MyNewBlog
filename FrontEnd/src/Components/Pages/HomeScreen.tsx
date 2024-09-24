import img from "../../assets/pexels-polina-tankilevitch-6929197.jpg";
import TypeWriter from "typewriter-effect";

const HomeScreen = () => {
  return (
    <div className="w-full h-[93vh] bg-slate-200 relative">
      <img src={img} alt="" className="h-[100%] w-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <div className="flex justify-center items-center flex-col">
          <h1 className="xl:text-[80px] text-[50px] ml:text-[65px]">Human Stories & Ideas</h1>
          <p className="font-[400] text-[30px]">
            <TypeWriter
              options={{
                strings: [
                  "A place to read,",
                  "write,",
                  "and deepen your understanding",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <button className="border p-2 rounded-md mt-[30px] text-[20px] font-[600] hover:bg-[#BC9A7F] transition-all duration-400 hover:text-[black]">
            Start Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
