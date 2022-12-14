import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-teal-400 ">
      <div className="mx-auto w-[900px]">
        <Link to="/">
          <h1 className="text-center font-bold text-xl py-2 text-white ">
            {" "}
            Güvenli Alım Satım
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
