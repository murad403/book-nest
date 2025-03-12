import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useAddBookMutation } from '../../../redux/features/books/booksApi';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const apiKey = import.meta.env.VITE_IMAGE_API_KEY;
const imageApiUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const AddBook = () => {
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [addBook] = useAddBookMutation();
    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        setFile(file);
    }
    const onSubmit = (data) =>{
        if(file){
            const formData = new FormData();
            formData.append("image", file);
            axios.post(imageApiUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(async(res) =>{
                const image = res.data.data.url;
                const newBook = {
                    ...data,
                    coverImage: image
                }
                // console.log(newBook);
                try {
                    await addBook(newBook);
                    toast.success('Add a new Book', {
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
                } catch (error) {
                    console.log(error);
                }
            })
        }
    }
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='bg-white shadow-xl rounded-sm p-7'>
                <h1 className='text-2xl font-medium text-gray-700'>Add Book</h1>
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
                        <select defaultValue={"Choose a Category"} className='outline-none w-full border-gray-700 rounded-sm px-5 py-1 border'  {...register("category")} name="category" id="category">
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
                        <label className='text-sm font-semibold block'>Choose image</label>
                        <label className='text-sm font-semibold bg-gray-200 px-2 rounded-sm py-1' htmlFor="image">Choose</label>
                        <input onChange={handleFileChange} className='hidden' type="file" name='image' id='image'/>
                    </div>
                    <div>
                        <input className='appearance-none outline-none w-full rounded-sm py-1 cursor-pointer bg-blue-500 text-white font-bold hover:bg-blue-600' type="submit" value={"Add"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;