import { Fragment, useState } from "react";
import NavBar from '/src/components/navbar';

const images = [
  "./Island1.svg",
  "./Island1.svg",
  "./Island1.svg", 
  "./Island1.svg",
  "./Island1.svg",
];

export default function Carousel() {
  const [selected, setSelected] = useState(0);

  const selectPrevious = () => {
    setSelected((selected - 1 + images.length) % images.length);
  };

  const selectNext = () => {
    setSelected((selected + 1) % images.length);
  };

  return (
    <Fragment>
      <NavBar />
      {/* title */}
      <div className="relative h-2/5 w-2/6">
        <div className="relative top-20 left-14 text-7xl font-poppins font-bold text-dark-green">
        DRIVE
        </div>
        <div className="relative top-20 left-14 font-poppins text-white">
        Discover your drive. What do you want to get up for in the morning? What is there to do? This is all about you.<br />

        This Island will help you become more open minded. It will explore all the possibilities and make you look for the best of yourself. <br /> <br />

        Read more...
        </div>
      </div>
      {/* Carousel */}
      <div className="fixed top-20 right-14 w-3/5 h-2/5 overflow-hidden flex justify-center"> 
        <div className="relative w-2/5 h-4/5">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain rounded-lg transition-all duration-500 ${
                index === selected
                  ? "scale-100 opacity-100"
                  : index === (selected + 1) % images.length ||
                    index === (selected - 1 + images.length) % images.length
                  ? "scale-50 opacity-50"
                  : "hidden"
              }`}
              style={{
                left: `${(index - selected) * 100}%`,
              }}
            />
          ))}
          <button
            onClick={selectPrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full opacity-50 hover:opacity-100 transition-colors"
            style={{
              left: "-1.5rem",
              fontSize: "2rem",
              fontWeight: "900",
              color: "#40665c"
            }}
          >
            &lt;
          </button>
          <button
            onClick={selectNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full opacity-50 hover:opacity-100 transition-colors"
            style={{
              right: "-1.5rem",
              fontSize: "2rem",
              fontWeight: "900",
              color: "#40665c"
            }}
          >
            &gt;
          </button>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-1/2 h-full transition-all duration-500 ${
                index === selected ||
                index === (selected + 1) % images.length ||
                index === (selected - 1 + images.length) % images.length
                  ? "opacity-50"
                  : "hidden"
              }`}
              style={{
                left: `${(index - selected + 0.5) * 100}%`,
                top: 0,
              }}
            >
              <button
                onClick={() => setSelected(index)}
                className="w-full h-full"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
