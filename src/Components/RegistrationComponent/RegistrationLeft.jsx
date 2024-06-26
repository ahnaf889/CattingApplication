import React from "react";

const RegistrationLeft = () => {
  return (
    <>
      <div className="w-[60%] h-screen">
        <div className="flex justify-center items-center h-full flex-col gap-y-10 ">
          <div className="flex flex-col gap-y-10">
            <div>
              <h1 className="text-[34px] font-bold text-FontColor font-nonito">Get started with easily register</h1>
              <p className="text-xl font-nonito font-normal pt-3 text-SecoundColor">Free register and you can enjoy it</p>
            </div>

            <div className=''>
              <div className="flex flex-col mb-5 gap-y-2 border-2 justify-start">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" ahnaf889@gmail.com"
                />
              </div>

              <div className="flex flex-col border-2 gap-y-2 mb-5 justify-start">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" ahnaf889@gmail.com"
                />
              </div>

              <div className="flex flex-col border-2 gap-y-2 justify-start">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" ahnaf889@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationLeft;
