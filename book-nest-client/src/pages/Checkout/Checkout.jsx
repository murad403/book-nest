import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    const { register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        const newOrder = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: {
                street: data.address,
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode
            },
            productId: cartItems.map(item => item._id),
            totalPrice: totalPrice
        }
        console.log(newOrder)
    }
    return (
        <div className='bg-slate-200 rounded-sm p-20'>
            <div className='text-gray-700 mb-5'>
                <h2 className='text-xl font-medium '>Cash on Delivery</h2>
                <p className='font-bold'>Total Price: ${totalPrice}</p>
                <p className='font-bold'>Items: {cartItems.length}</p>
            </div>
            <div className='bg-white p-7 flex justify-between rounded-sm'>
                <div className='text-gray-700'>
                    <h2 className='font-semibold text-xl'>Personal Details</h2>
                    <p>Please fill out all the fields</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-2/3'>
                    <div>
                        <label className='block text-sm font-bold' htmlFor="name">Full Name</label>
                        <input type="text" {...register("name")} className='appearance-none border border-gray-400 px-5 py-1 rounded-sm w-full outline-none bg-slate-100' />
                    </div>
                    <div className='mt-2'>
                        <label className='block text-sm font-bold' htmlFor="email">Email Address</label>
                        <input type="email" {...register("email")} className='appearance-none border border-gray-400 px-5 py-1 rounded-sm w-full outline-none bg-slate-100' />
                    </div>
                    <div className='mt-2'>
                        <label className='block text-sm font-bold' htmlFor="number">Phone Number</label>
                        <input type="number" {...register("number")} className='appearance-none border border-gray-400 px-5 py-1 rounded-sm w-full outline-none bg-slate-100' />
                    </div>
                    <div className='mt-2 grid grid-cols-3 gap-2'>
                        <div className='col-span-2'>
                            <label className='block text-sm font-bold' htmlFor="address">Address/Street</label>
                            <input type="text" {...register("address")} className='appearance-none border border-gray-400 px-5 py-1 rounded-sm w-full outline-none bg-slate-100' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold' htmlFor="city">City</label>
                            <input type="text" {...register("city")} className='appearance-none border border-gray-400 px-5 py-1 rounded-sm w-full outline-none bg-slate-100' />
                        </div>
                    </div>
                    <div className='mt-2 grid grid-cols-5 gap-2'>
                        <div className='col-span-2'>
                            <label className='block text-sm font-bold' htmlFor="country">Country/Region</label>
                            <input type="text" {...register("country")} className='appearance-none border border-gray-400 px-5 py-1 rounded-sm w-full outline-none bg-slate-100' />
                        </div>
                        <div className='col-span-2'>
                            <label className='block text-sm font-bold' htmlFor="state">State/Province</label>
                            <input type="text" {...register("state")} className='appearance-none border border-gray-400 px-5 py-1 rounded-sm w-full outline-none bg-slate-100' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold' htmlFor="zipcode">Zipcode</label>
                            <input type="text" {...register("zipcode")} className='appearance-none border border-gray-400 px-5 py-1 rounded-sm w-full outline-none bg-slate-100' />
                        </div>
                    </div>
                    <div className='mt-2 flex items-center gap-2'>
                        <input type="checkbox"  required/>
                        <p>I am aggree to the <Link className='text-blue-500 underline'>Terms & Conditions</Link> and <Link className='text-blue-500 underline'>Shopping Policy</Link></p>
                    </div>
                    <div className='mt-2 flex justify-end'>
                        <input className='bg-blue-500 hover:bg-blue-600 cursor-pointer px-3 py-1 rounded-sm text-white' type="submit" value={'Place an order'}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;