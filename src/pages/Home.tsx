import { FC } from "react";
import { buttons } from "../utils";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-100">
      {/* Button wrapper */}
      <div className="flex w-[350px] font-bold  flex-wrap gap-y-5">
        {buttons.map((button) => {
          return (
            <Link
              to={button.path}
              className="bg-teal-300 py-3 text-xl text-white w-full rounded-md text-center"
            >
              <button key={button.id}></button>
              {button.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
