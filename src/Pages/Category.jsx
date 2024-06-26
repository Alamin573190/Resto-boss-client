
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import Sectiontitle from '../Componants/Sectiontitle';

const Category = () => {
    return (
        <section>
            <Sectiontitle
            subHeading={' From 11:00am to 10:00pm '}
            heading={'Order online'}
            >
            </Sectiontitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-4xl upper
            ml-20  text-white -mt-16'>salat</h2>
                </SwiperSlide>
                <SwiperSlide> <img src={slide2} alt="" /> <h2 className='text-4xl upper
            ml-20  text-white -mt-16'>salat</h2>
                </SwiperSlide>
                <SwiperSlide> <img src={slide3} alt="" /> <h2 className='text-4xl upper
            ml-20  text-white -mt-16'>salat</h2>
                </SwiperSlide>
                <SwiperSlide> <img src={slide4} alt="" /> <h2 className='text-4xl upper
            ml-20  text-white -mt-16'>salat</h2>
                </SwiperSlide>
                <SwiperSlide> <img src={slide5} alt="" /> <h2 className='text-4xl upper
            ml-20  text-white -mt-16'>salat</h2>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </section>


    );
};

export default Category;