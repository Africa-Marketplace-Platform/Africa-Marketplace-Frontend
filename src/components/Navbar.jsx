import { FaGlobe, FaRegUser } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="navbar d-flex">
        <div className="navbar-logo">
          

         
          <a href=""><h3 className="text-3xl p-5 font-extrabold font-kanit text-white">AFRIKBI<span className="z-span-logo ">Z</span></h3></a>
        </div>
        <div className="navbar-pages">
            <ul>
                <li><FaGlobe/> English</li>
                <li><FaRegUser/> Sign In</li>
                <button>Sign Up</button>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
