import React, { useState } from "react";

const RegistrationLeft = () => {
  const [fullname, Setfullname] = useState("Hello World");
  console.log(fullname);
  /**
   * tudo: handleEmail funtion emplement
   * @param({evnet})
   */
  return (
    <>
      <div className="w-[60%] h-screen">
        <div className="flex justify-center items-center h-full flex-col gap-y-10 ">
          <div className="flex flex-col gap-y-10">
            <div>
              <h1 className="text-[34px] font-bold text-FontColor font-nonito">
                Get started with easily register
              </h1>
              <p className="text-xl font-nonito font-normal pt-3 text-SecoundColor">
                Free register and you can enjoy it
              </p>
            </div>

            <div className="flex flex-col gap-y-4">
              <fieldset className="border-2 rounded-md h-20 px-5">
                <legend className="px-3 text-[15.76px] text-FontColor font-semibold ">
                  Email Address <span>*</span>
                </legend>
                <label
                  htmlFor="email"
                  className="text-FontColor text-[15px] flex font-nonito font-normal"
                ></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="pt-3 pl-[13px] font-nonito placeholder:text-[16.64px] placeholder:font-nonito placeholder:font-normal w-full "
                  placeholder="Your email address"
                />
              </fieldset>

              <fieldset className="border-2 rounded-md h-20 px-5">
                <legend className="px-3 text-[15.76px] text-FontColor font-semibold ">
                  Full Name <span>*</span>
                </legend>
                <label
                  htmlFor="FullName"
                  className="text-FontColor text-[15px] flex font-nonito font-normal"
                ></label>
                <input
                  type="text"
                  name="FullName"
                  id="FullName"
                  // onChange={handleFullName}
                  className="pt-3 pl-[13px] font-nonito placeholder:text-[16.64px] placeholder:font-nonito placeholder:font-normal w-full "
                  placeholder="Ladushing GTG"
                />
              </fieldset>

              <fieldset className="border-2 rounded-md h-20 px-5">
                <legend className="px-3 text-[15.76px] text-FontColor font-semibold ">
                  Password <span>*</span>
                </legend>
                <label
                  htmlFor="Password"
                  className="text-FontColor text-[15px] flex font-nonito font-normal"
                ></label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  // onChange={handlepassword}
                  className="pt-3 pl-[13px] text-[20px] font-nonito placeholder:text-[25.64px] placeholder:font-nonito placeholder:font-normal w-full "
                  placeholder=".........."
                />
              </fieldset>
            </div>
          </div>

          <div className=" text-center">
            <button className="bg-PrimaryBlue w-[368px] text-[20.64px] text-white font-normal font-nonito rounded-[86px] h-[67.94px]">
              Sign up
            </button>
            <p className="pt-9 font-nonito font-normal text-FontColor text-[15.34px]">
              Already have an account ?{" "}
              <span className="text-[#EA6C00] font-bold cursor-pointer">
                Sign In
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationLeft;
