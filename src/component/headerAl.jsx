import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderAll() {
  const [open, setopen] = useState(false);

  const toggle = () => {
    setopen(!open);
  };

  const closeMenu = () => {
    setopen(false);
  };

  return (
    <div className="bg-[black] top-0 left-0 fixed w-[100%] h-[11vh] xl:h-[10vh] z-50 text-white px-2 flex items-center">
      <header className="flex justify-between items-center max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col gap-2 md:hidden" onClick={toggle}>
          <div className="bg-white w-[30px] h-[3px]"></div>
          <div className="bg-white w-[30px] h-[3px]"></div>
          <div className="bg-white w-[30px] h-[3px]"></div>
        </div>

        {open && <div className="fixed inset-0 z-10" onClick={closeMenu}></div>}

        <div
          className={`${
            open ? "translate-x-[0%]" : "translate-x-[-100%]"
          } md:hidden gap-[50px] text-[25px] flex fixed flex-col items-center justify-center w-[70%] h-[90vh] top-[10vh] left-0 text-white bg-[#000000c5] transition-transform duration-300 ease-linear z-20`}
        >
          <Link to={"/"} onClick={closeMenu}>Home</Link>
          <Link to={"/ProductPage"} onClick={closeMenu}>Products</Link>
          <Link to={"/About"} onClick={closeMenu}>About</Link>
          <Link to={"/Contac"} onClick={closeMenu}>Contact</Link>
        </div>

        <div>
          <Link to={"/"}>
            <div className="w-[200px] text-center select-none text-[35px] pl-12 md:ml-0">
              <h1 className="text-red-600">FOOOD</h1>
              <h1 className="mt-[-15px]">CITY</h1>
            </div>
          </Link>
        </div>
        <div className="gap-8 text-[22px] hidden md:flex">
          <Link to={"/"}>Asosiy</Link>
          <Link to={"/ProductPage"}>Mahsulotlar</Link>
          <Link to={"/About"}>Joylashuv</Link>
          <Link to={"/Contac"}>Bog'lanish</Link>
        </div>

        <div className="flex gap-[50px] select-none">
          <Link to={"/korzinka"}>
            <img src="/korzinka.png" width="70px" height="70px" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HeaderAll;
