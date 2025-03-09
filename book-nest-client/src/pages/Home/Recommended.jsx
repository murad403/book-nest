import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import BookCard from '../../components/BookCard';
import { useAllBooksQuery } from '../../redux/features/books/booksApi';

const Recommended = () => {
    const {data: books = []} = useAllBooksQuery();
    return (
        <div className='px-3 md:px-5'>
            <h1 className='text-2xl font-semibold mb-7'>Recommended for you</h1>
            <Swiper slidesPerView={1} navigation={true} spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-7">
                    {
                        books.length > 0 && books.slice(8, 16).map((book, index) =>
                            <SwiperSlide key={index}>
                                <BookCard book={book}></BookCard>
                            </SwiperSlide>
                        )
                    }
            </Swiper>
        </div>
    );
};

export default Recommended;