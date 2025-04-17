import { useState } from "react";

const logoPaths = [
  "images/logo/S_J.png",
  "images/logo/S_Y.png",
  "images/logo/S_O.png",
  "images/logo/S_U.png",
  "images/logo/S_N.png",
  "images/logo/S_G.png",
];

const links = [
  { text: "HOME", path: "#" },
  { text: "ABOUT", path: "#" },
  { text: "WORK", path: "#" },
  { text: "PORTFOLIO UX", path: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    // fixed w-full bg-grey-800 text-white z-10
    <header className="fixed w-full z-9999">
      <div className="pt-[30px] px-[50px] pb-0">
        <a href="/" className="flex items-center justify-center w-[150px]">
          {logoPaths &&
            logoPaths.map((path, index) => (
              <span className="px-[1px] py-0" key={index}>
                <img className="w-full" src={path} alt={`logo-${index}`} />
              </span>
            ))}
        </a>
        <nav className="text-center">
          <p
            className={`
            absolute left-1/2 transform -translate-x-1/2 
            z-10 top-[10px] 
            py-[30px] px-0 text-[10px]
            cursor-pointer
            hover:opacity-50
            transition-all duration-300
          `}
            onClick={() => {
              setIsMenuOpen((state) => !state);
            }}
          >
            MENU
            <span
              className={`
                block absolute top-[15px] left-1/2 transfrom -translate-x-1/2
                h-[5px] rounded-[30px] bg-white
                transition-all duration-300
                ${isMenuOpen ? "w-[180px] opacity-70" : "w-[150px] opacity-100"}
            `}
            />
          </p>
          <ul
            className={`
              absolute left-1/2 transform -translate-x-1/2 
              w-[98%] bg-[rgba(200,200,200,0.4)] backdrop-blur-md
              shadow-[0_4px_30px_rgba(200,200,200,0.2)]
              rounded-[10px] pt-[100px] pb-[30px] px-0 
              
              ${
                isMenuOpen
                  ? "top-[10px] opacity-100 transition-all duration-[400ms]"
                  : "top-[-1000%] opacity-0 transition-all duration-[1500ms]"
              }
          `}
          >
            {links &&
              links.map((link, index) => (
                <li key={index} className="overflow-hidden">
                  <a
                    href={link.path}
                    className={`
                      block text-[40px] 
                      ${
                        isMenuOpen
                          ? "transform -translate-y-0"
                          : "transform -translate-y-[100px]"
                      }
                      transition-all duration-[600ms]
                      delay-[${index * 50}ms]
                      hover:transition-none
                    hover:text-gray-800 
                      hover:scale-105
                      hover:shadow-[0_0_20px_rgba(0,191,255,0.8)]
                      `}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
