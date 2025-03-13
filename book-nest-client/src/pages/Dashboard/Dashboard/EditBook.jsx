import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useGetBookByIdQuery } from '../../../redux/features/books/booksApi';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const EditBook = () => {
    const { register, handleSubmit, setValue} = useForm();
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: book = {}} = useGetBookByIdQuery(id);
    useEffect( () =>{
        if(book){
            setValue("title", book.title);
            setValue("description", book.description);
            setValue("category", book.category);
            setValue("trending", book.trending);
            setValue("oldPrice", book.oldPrice);
            setValue("newPrice", book.newPrice);
            setValue("coverImage", book.coverImage);
        }
    }, [book, setValue]);
    const onSubmit = (data) =>{
        const newUpdateBook = {
            ...data
        }
        axios.put(`https://book-nest-server-woad.vercel.app/api/books/edit/${id}`, newUpdateBook, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res =>{
            if(res.data){
                toast.success('Login Successful!!!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
            navigate('/');
            }
        })
    }
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='bg-white shadow-xl rounded-sm p-7'>
                <h1 className='text-2xl font-medium text-gray-700'>Update Book</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='text-gray-700 space-y-2'>
                    <div>
                        <label className='text-sm font-semibold' htmlFor="title">Title</label>
                        <input {...register("title")} className='appearance-none outline-none w-full border-gray-700 rounded-sm px-5 py-1 border' type="text" placeholder='Title' />
                    </div>
                    <div>
                        <label className='text-sm font-semibold' htmlFor="description">Description</label>
                        <input {...register("description")} className='appearance-none outline-none w-full border-gray-700 rounded-sm px-5 py-1 border' type="text" placeholder='Description' />
                    </div>
                    <div>
                        <select className='outline-none w-full border-gray-700 rounded-sm px-5 py-1 border'  {...register("category")} name="category" id="category">
                            <option value="business">Business</option>
                            <option value="fiction">Fiction</option>
                            <option value="adventure">Adventure</option>
                            <option value="horror">Horror</option>
                            <option value="marketing">Marketing</option>
                            <option value="books">Books</option>
                        </select>
                    </div>
                    <div className='space-x-2'>
                        <input {...register("trending")} type="checkbox" />
                        <span>Trending</span>
                    </div>
                    <div>
                        <label className='text-sm font-semibold' htmlFor="oldPrice">Old Price</label>
                        <input {...register("oldPrice")} className='appearance-none outline-none w-full border-gray-700 rounded-sm px-5 py-1 border' type="number" placeholder='Old Price' />
                    </div>
                    <div>
                        <label className='text-sm font-semibold' htmlFor="newPrice">New Price</label>
                        <input {...register("newPrice")} className='appearance-none outline-none w-full border-gray-700 rounded-sm px-5 py-1 border' type="number" placeholder='New Price' />
                    </div>
                    <div>
                        <input className='appearance-none outline-none w-full rounded-sm py-1 cursor-pointer bg-blue-500 text-white font-bold hover:bg-blue-600' type="submit" value={"Update"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBook;