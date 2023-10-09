import { TbBusinessplan } from "react-icons/tb";
import { ImMenu } from "react-icons/im";
import { AiFillCloseSquare } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { connectWallet } from "../services/blockchain";
import { truncate, useGlobalState } from "../store";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/About" },
    { name: "Contact Us", link: "/Contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-green-300 mr-1 pt-2">
            <TbBusinessplan />
          </span>
          BlockchainBoost
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiFillCloseSquare /> : <ImMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transiton-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={Link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}

          {connectedAccount ? (
            <button
              type="button"
              className="bg-green-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-green-400 duration-500"
            >
              {truncate(connectedAccount, 4, 4, 11)}
            </button>
          ) : (
            <button
              type="button"
              className="bg-green-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-green-400 duration-500"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
