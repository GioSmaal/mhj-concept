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
      <div className="fixed top-20 right-20 w-3/5 h-2/5 overflow-hidden flex justify-center">
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
            className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors duration-500"
            style={{
              left: "-1.5rem",
            }}
          >
            &lt;
          </button>
          <button
            onClick={selectNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors duration-500"
            style={{
              right: "-1.5rem",
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
