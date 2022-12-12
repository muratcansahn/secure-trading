import { FC } from "react";
import { buttons } from "../utils";

const Home: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-100">
      {/* Button wrapper */}
      <div className="flex w-[350px] font-bold  flex-wrap gap-y-5">
        {buttons.map((button) => {
          return (
            <button
              key={button.id}
              className="bg-teal-300 py-3 text-xl text-white w-full rounded-md "
            >
              {button.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
