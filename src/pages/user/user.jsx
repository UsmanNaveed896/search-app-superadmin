import React, { useEffect } from "react";
import { useUserHook } from "../hooks/useUserHook";

const User = () => {
  const userHook = useUserHook();

  useEffect(() => {
    userHook.getAllUsers();
  }, []);

  console.log(userHook.users, "userss");
  const data = [
    {
      id: 1,
      country: "USA",
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      country: "Canada",
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    // Add more data as needed
  ];
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
            <table className="min-w-full bg-white border border-gray-300">
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
                {userHook?.loading ? (
                  <div role="status" className="flex justify-center mt-12 pb-16 w-[600px]">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  userHook?.users?.data.map((row) => (
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
                  ))
                )}
              </tbody>
            </table>

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
