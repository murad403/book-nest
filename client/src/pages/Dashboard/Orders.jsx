import React from 'react';
import { useGetOrdersByEmailQuery } from '../../redux/features/orders/ordersApi';
import { useAuth } from '../../Providers/AuthProvider';

const Orders = () => {
    const {user} = useAuth();
    const {data: orders = []} = useGetOrdersByEmailQuery(user?.email);
    return (
        <div className='text-gray-700'>
            <h2 className='text-2xl font-semibold mb-3'>Your Orders</h2>
            {
                orders?.orders?.length > 0 ? 
                <div className='space-y-3'>
                    {
                        orders?.orders.map((order,index) =>
                        <div key={order._id}>
                            <p className='bg-slate-800 p-1 inline-block text-white rounded-sm'>#{index + 1}</p>
                            <h2 className='text-xl text-black font-medium'>Order ID: {order._id}</h2>
                            <p>Name: {order?.name}</p>
                            <p>Email: {order?.email}</p>
                            <p>Phone: {order?.phone}</p>
                            <p>Total Price: ${order?.totalPrice}</p>
                            <p className='font-medium text-black text-xl'>Address:</p>
                            <p className='text-sm'>{order?.address?.street}, {order?.address?.country}, {order?.address?.zipcode}</p>
                            <p className='text-xl font-medium text-black'>Product ID:</p>
                            <div>
                                {
                                    order.productIds.map(id => 
                                    <p key={id}>
                                        {id}
                                    </p>
                                    )
                                }
                            </div>
                        </div>)
                    }
                </div> :
                <p className='text-sm font-medium text-red-500'>No orders found!!!</p>
            }
        </div>
    );
};

export default Orders;