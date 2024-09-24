import React, { useState } from "react";
import img from "../assets/pexels-polina-tankilevitch-6929197.jpg";
import { MdEmail, MdPerson2 } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { createAccount } from "../api/AuthApi"; 
import toast, { Toaster } from "react-hot-toast";
// import register from "../Global/reduxState"

// Define the validation schema using yup
// const schema = yup.object().shape({
//   fullName: yup.string().required("Full Name is required"),
//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), "Passwords must match")
//     .required("Confirm Password is required"),
// });

const Register = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    // createAccount(data).then((res) => {
    //   if (res.status === 201) {
    //     // dispatch(register(res));
    //     toast.success("Account Created Successfully");
    //     setLoading(false);
    //     navigate("/registercard");
    //   } else {
    //     setLoading(false);
    //     toast.error(`${res?.response?.data?.message}`);
    //   }
    // });
  };

  return (
    <div className="bg-[#855835]  h-[100vh] w-full flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="w-[1000px] h-[85%] md:h-[85%] lg:h-[90%] bg-[rgb(129, 129, 39)] rounded-[10px] grid grid-cols-1 md:grid-cols-5 overflow-hidden shadow-md">
        <div className="hidden md:flex md:col-span-2">
          <img src={img} alt="" />
        </div>
        <div className="md:bg-white md:col-span-3 flex justify-center items-center">
          <div className="bg-white w-[90%] border h-[100%] flex justify-center flex-col items-center md:h-[90%] shadow-md rounded-md">
            <div className="font-bold mt-[15px]">Create your free Account</div>
            <form className="w-[80%] h-[95%]">
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Full Name</div>
                <div className="p-1 flex w-[100%] border h-[25px] md:h-[35px] rounded justify-center items-center bg-slate-200">
                  <MdPerson2 className="text-[11px] md:text-[14px] mr-[5px]" />
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Enter your full name here"
                    className="flex-1 text-[11px] md:text-[14px] font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
                {errors.fullName && (
                  <div className="text-[7px] font-[700] mt-1 text-red-600">
                    {/* {errors.fullName.message} */}
                  </div>
                )}
              </div>
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Email</div>
                <div className="text-[11px] md:text-[14px] h-[25px] md:h-[35px] p-1 flex w-[100%] border rounded justify-center items-center bg-slate-200">
                  <MdEmail className="text-[11px] md:text-[14px] mr-[5px]" />
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email here"
                    className="text-[11px] md:text-[14px] flex-1  font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
                {errors.email && (
                  <div className="text-[7px] font-[700] mt-1 text-red-600">
                    {/* {errors.email.message} */}
                  </div>
                )}
              </div>
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Password</div>
                <div className="h-[25px] md:h-[35px] p-1 flex w-[100%] border rounded justify-center items-center bg-slate-200">
                  <MdPerson2 className="text-[11px] md:text-[14px] mr-[5px]" />
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password here"
                    className="flex-1 text-[10px] font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
                {errors.password && (
                  <div className="text-[7px] font-[700] mt-1 text-red-600">
                    {/* {errors.password.message} */}
                  </div>
                )}
              </div>
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Re-Enter Password</div>
                <div className="h-[25px] md:h-[35px] p-1 flex w-[100%] border rounded justify-center items-center bg-slate-200">
                  <MdPerson2 className="text-[18px] mr-[5px]" />
                  <input
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="Re-Enter your password here"
                    className=" text-[11px] md:text-[14px] flex-1 font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
                {errors.confirmPassword && (
                  <div className="text-[7px] font-[700] mt-1 text-red-600">
                    {/* {errors.confirmPassword.message} */}
                  </div>
                )}
              </div>
              <div className="w-full flex justify-center items-center mt-[15px]">
                <button
                  className="md:text-[14px] text-[11px] xl:block font-[700] border p-2 rounded-md bg-blue-900 text-white hover:bg-white hover:text-blue-950 duration-300 transition-all"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </div>
              <div className="mt-[15px] flex">
                <div className="text-[9px] italic mr-[5px]">
                  Already Have An Account?
                </div>
                <Link to="/signin">
                  <div className="text-[8px] italic font-semibold text-yellow-700 border md:text-[14px]">
                    SignIn
                  </div>
                </Link>
              </div>
              <div className="w-full flex justify-center items-center mt-[15px]">
                <div className="h-[1px] w-[100px] bg-[grey] mr-[5px]" />
                <div className="mr-[5px] text-[11px]">OR</div>
                <div className="h-[1px] w-[100px] bg-[grey]" />
              </div>
              <div className="flex md:w-full md:justify-around mt-[20px] text-[15px] justify-around gap-1">
                <div className="text-[10px] italic font-semibold text-blue-950 border p-2 rounded-md flex cursor-pointer">
                  <div className="text-[16px] mr-1">
                    <FaGoogle />
                  </div>
                  <div className="text-[13px]">Google</div>
                </div>
                <div className="text-[10px] italic font-semibold text-blue-950 flex border justify-center items-center rounded-md p-1 cursor-pointer">
                  <div className="text-[16px] mr-1">
                    <FaFacebook />
                  </div>
                  <div className="text-[13px]">Facebook</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
