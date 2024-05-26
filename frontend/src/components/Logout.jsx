import React from "react";
import { MdLogout } from "react-icons/md";

const Logout = () => {
  const handleLogout = () => {
    // Perform logout operation here

    // Redirect to the signup page
    window.location.href = "/signup";
  };

  return (
    <div className="flex flex-col items-center">
      {/* User avatar image */}
      <img
        src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
        className="w-10 h-10 rounded-full border border-gray-800 mb-4" // Added margin-bottom
        alt="User Avatar"
      />

      {/* Logout button */}
      <div
        className="cursor-pointer flex items-center p-2 rounded-lg bg-glass border border-gray-800"
        onClick={handleLogout} // Call handleLogout when clicked
      >
        <MdLogout size={22} />
      </div>
    </div>
  );
};

export default Logout;
