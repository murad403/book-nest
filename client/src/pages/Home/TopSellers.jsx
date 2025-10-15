import React, { useState } from 'react';
import BookCard from '../../components/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useAllBooksQuery } from '../../redux/features/books/booksApi';

const TopSellers = () => {
    const [selectCategory, setSelectCategory] = useState("Choose a genre");
    const {data: books = []} = useAllBooksQuery();
    // console.log(books);
    const filterBooks = selectCategory === "Choose a genre" ? books : books.filter(book => book.category === selectCategory.toLocaleLowerCase());
    return (
        <div className='px-3 md:px-5 text-gray-800'>
            {/* headers */}
            <h1 className='text-2xl md:text-3xl font-semibold mb-5'>Top Sellers</h1>
            {/* dropdown */}
            <div>
                <select onChange={(e) =>setSelectCategory(e.target.value)} className='border py-1 border-gray-500 bg-gray-100 px-2 outline-none rounded-sm ' name="category" id="category">
                    {
                        categoryOptions.map((category, index) =>
                            <option key={index} value={category}>{category}</option>
                        )
                    }
                </select>
            </div>
            {/* show books */}
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
                        filterBooks.length > 0 && filterBooks.map((book, index) =>
                            <SwiperSlide key={index}>
                                <BookCard book={book}></BookCard>
                            </SwiperSlide>
                        )
                    }
            </Swiper>
        </div>
    );
};
const categoryOptions = [
    "Choose a genre", "Business", "Fiction", "Horror", "Adventure"
]
export default TopSellers;