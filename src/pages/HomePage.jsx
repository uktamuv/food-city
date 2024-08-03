import Cardes from "../component/cards"
import App from "../component/swiper/HomeSwiper"


 
 function HomePage() {
   return (
     <div className="pt-[12vh] px-3  xl:px-0 bg-[#97a6b16a] bg-fixed  w-full overflow-hidden h-full">
      <div>

      <App/>
      <Cardes/>
      
      </div>
     </div>
   )
 }
 
 export default HomePage