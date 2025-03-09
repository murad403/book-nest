import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect( () =>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    return (
        <div className='px-3 md:px-5'>
            <h1 className='text-2xl font-semibold mb-7'>News</h1>
            <Swiper slidesPerView={1} navigation={true} spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-7">
                    {
                        news.map((item) =>
                            <SwiperSlide key={item.id}>
                                <div  className='flex flex-col-reverse sm:text-start text-center sm:flex-row items-center gap-2'>
                                    <div>
                                        <Link to={'/'}>
                                            <h2 className='text-lg font-medium text-[#0D0842] hover:text-blue-600'>{item?.title}</h2>
                                        </Link>
                                        <div className='w-[75px] h-[3px] hidden sm:block bg-amber-300 mt-3 rounded-full'></div>
                                        <p className='mt-3 text-[#0D0842] text-sm'>{item?.description}</p>
                                    </div>
                                    <img src={item?.image} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    }
            </Swiper>
        </div>
    );
};

export default News;