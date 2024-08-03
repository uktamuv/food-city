
import { Link } from "react-router-dom";

function DastafkaPage() {
  const korNone=()=>{
    return{
      
    }
  }

  return (
    <div>
      <div className="  w-full flex justify-center mt-[17vh]">
        <div className="  max-w-[1440px] w-[80%]  xl:w-[50%] mx-2 xl:mx-auto h-[50vh] lg:w-[80%] lg:mx-auto bg-white border-2 rounded-[3px] border-[black] flex flex-col items-center justify-center gap-[40px]">
          <div className="flex justify-center gap-[80px] w-[100%]">
            <input
              className=" outline-none text-[30px]  h-[6vh] rounded-md w-[40%] bg-black text-white text-center"
              type="text"
              placeholder="Isim"
            />
            <input
              className=" outline-none text-[30px] h-[6vh] rounded-md w-[40%] bg-black text-white text-center"
              type="text"
              value="+998"
            />
          </div>
          <div className="flex justify-center gap-[80px] w-[100%]">
            <input
              className=" outline-none text-[30px] h-[6vh] rounded-md w-[40%] bg-black text-white text-center"
              type="text"
              placeholder="Shaxar"
            />
            <input
              className=" outline-none text-[30px] h-[6vh] rounded-md w-[40%] bg-black text-white text-center"
              type="text"
              placeholder="Mahalla"
            />
          </div>
          <div className="flex justify-center gap-[80px] w-[100%]">
            <input
              className=" outline-none text-[30px] h-[6vh] rounded-md w-[40%] bg-black text-white text-center"
              type="text"
              placeholder="Kocha"
            />
            <input
              className=" outline-none text-[30px] h-[6vh] rounded-md w-[40%] bg-black text-white text-center"
              type="text"
              placeholder="Uy Raqami"
            />
          </div>
          <div className="flex justify-between items-center w-[80%] mt-4">

       
          <div>
            <Link to={"/ProductPage"}>
              <button className=" py-2.5 px-12 bg-[#000000] rounded-xl border-2 border-[white] text-white text-[24px]">
                orqaga
              </button>
            </Link>
          </div>
          <div className="text-[22px]">
          <Link to={"/dastafkamahsulot"}>
              <button onClick={korNone} className=" py-2.5 px-12 bg-[#000000] rounded-xl border-2 border-[white] text-white text-[24px]">
                Zakaz berish
              </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DastafkaPage;
