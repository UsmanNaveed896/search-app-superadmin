import React, { useEffect } from "react";
import Img from "../../assets/Group 158.png";
import { useVirtualOfficeHook } from "../hooks/useGetVirtualOffice";
import { Audio, BallTriangle } from "react-loader-spinner";
const VirtualOffice = () => {
  const virtualOffice = useVirtualOfficeHook();
  useEffect(() => {
    virtualOffice.getAllVirtualOffices();
  }, []);

  const allVirtualOffice = virtualOffice?.virtualOffice;
  console.log(allVirtualOffice, "all");

  return (
    <div className="flex justify-center">
      <div className="container max-w-[1000px]">
        <p className="font-bold mt-8 text-[20px]">Virtual Office</p>

        {allVirtualOffice === null ||
        allVirtualOffice?.virtualOffices === undefined ? (
          <div className="flex items-center justify-center mt-16">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="blue"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          allVirtualOffice?.virtualOffices?.map((item) => (
            <div
              className="notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-12"
              key={item.id}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={Img} alt="rect" />
                  </div>
                  <div>
                    <p className="text-[16px] font-bold">{item?.companyName}</p>
                    <p className="text-[14px] font-semibold">
                      {item?.businessEmail}
                    </p>
                    <p className="text-[14px] font-semibold">
                      {item?.companyAddress}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="rounded py-2 px-6 bg-[#295dfa] text-white font-thin">
                    Disable
                  </button>
                  <button className="rounded py-2 px-6 bg-[#295dfa] text-white font-thin">
                    View
                  </button>
                  <button className="rounded py-2 px-6 bg-[#295dfa] text-white font-thin">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VirtualOffice;
