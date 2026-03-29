import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({ player }) => {
    console.log(player);
    return (

        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl"><FaUser></FaUser>Virat Kohli</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 text-gray-600'>
                        <FaFlag></FaFlag>
                        <p className='text-[16px] '>India</p>
                    </div>
                    <button className='btn text-semibold'>All-Rounder</button>
                </div>

                <div className="divider"></div>

                <h3 className='font-bold text-[16px]'>Rating: </h3>
                <div className='flex justify-between items-center'>
                    <p className='text-[16px] font-semibold'>Left-Bat</p>
                    <p className='text-right text-[16px] font-semibold text-gray-600'>Right-Ball</p>
                </div>

                <div className="card-actions justify-end">
                    <p className='text-[16px] font-semibold'>Price:</p>
                    <button className="btn">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Card;