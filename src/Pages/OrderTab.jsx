import FoodCard from "../Shared/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className=' mt-10'>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  
               {
                        items.map(item =>  <FoodCard key={item._id} item={item}></FoodCard>  )
                    }
               </div>
                
                    
               
             

            </Swiper>
        </div>
    );
};

export default OrderTab;