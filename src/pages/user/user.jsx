import React, { useEffect } from "react";
import { useUserHook } from "../hooks/useUserHook";
import { BallTriangle } from "react-loader-spinner";

const User = () => {
  const userHook = useUserHook();

  useEffect(() => {
    userHook.getAllUsers();
  }, []);

  console.log(userHook.loading,"loading")
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="container max-w-[1100px]">
          <h1 className="mt-12 font-bold">USER APP INSTALLED</h1>
          <div className="flex items-center space-x-4">
            {/* Select Option Field */}
            <div className="text-[12px] mt-6">
              <label className="text-gray-600 font-bold">Select Country</label>
              <div className="relative mt-3">
                <select
                  id="country"
                  className="py-2 pl-8 pr-4 rounded-full bg-[#d7e7fa]"
                >
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  {/* Search Icon */}
                  <i className="fa fa-search text-gray-500"></i>
                </div>
              </div>
            </div>
            <div className="text-[12px] mt-6">
              <label htmlFor="city" className="text-gray-600 font-bold">
                Select by City
              </label>
              <div className="relative mt-3">
                <input
                  id="city"
                  className="py-2 pl-8 pr-4 rounded-full bg-[#d7e7fa]"
                  type="text"
                  placeholder="Enter city"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  {/* Search Icon */}
                  <i className="fa fa-search text-gray-500"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-8">
            {userHook.loading ? (
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
              <table className="min-w-full bg-white border border-gray-300 h-full overflow-auto">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Country Name</th>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Phone Number</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userHook.users?.data.map((row) => (
                    <tr key={row.id}>
                      <td className="py-2 px-4 border-b text-center">
                        {row.country}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {row.fullName}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {row.email}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {row.phone}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {/* Edit Icon */}
                        <button className="mr-2">
                          <i className="fa fa-edit text-blue-500 cursor-pointer"></i>
                        </button>
                        {/* Delete Icon */}
                        <button>
                          <i className="fa fa-trash text-red-500 cursor-pointer"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Pagination Section */}
            <p className="text-center mt-6 text-[blue] text-[12px]">
              1221 Total
            </p>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
                Previous
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full ml-2">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
