import { Link } from "react-router-dom"

function HomeMenu() {
  return (
<div className="fixed top-[15vh] right-5 xl:right-36">

<div className="  h-[50px]  rounded-[30px] flex items-center gap-12   text-white  ">
      <Link to={'/dastafka'}>
       <button className=" py-2.5 px-8 bg-[#443b3b] rounded-2xl border-2 border-[white]">Dastafka</button>
      </Link> 

     

    </div>
</div>
  )
}

export default HomeMenu