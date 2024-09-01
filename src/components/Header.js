import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black px-4 py-2 z-10 w-screen flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className="flex">
          <div className="flex align-middle items-center mx-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="user-icon"
              className="h-8 w-8"
            />
          </div>
          <div
            onClick={handleLogOut}
            className="cursor-pointer flex align-middle items-center"
          >
            <p className="font-bold text-white">Log out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
