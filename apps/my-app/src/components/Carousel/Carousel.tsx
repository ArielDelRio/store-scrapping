import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children }: any) => {
  const [val, setVal] = useState(0);
  const prev = () => {
    setVal((val) => (val === 0 ? children.length - 1 : val - 1));
  };
  const next = () => {
    setVal((val) => (val === children.length - 1 ? 0 : val + 1));
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${val * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-centerr justify-center gap-2">
          {children.map((_: any, i: number) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                val === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
