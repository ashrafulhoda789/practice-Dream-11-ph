import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelecetedPlayer = ({ selectedPlayer }) => {
    console.log(selectedPlayer);
    const { PlayerImg, PlayerName, PlayerType } = selectedPlayer
    return (
        <div className='flex justify-between mb-5 border border-gray-200 shadow-lg rounded-2xl p-5 items-center'>
            <div className='flex gap-6 items-center'>
                <img className='w-15 border border-gray-200 rounded-lg' src={PlayerImg} alt="" />
                <div className='space-y-1'>
                    <div className='flex gap-3 items-center'>
                        <FaUser></FaUser>
                        <h1 className='text-lg font-bold'>{PlayerName}</h1>
                    </div>
                    <p className='font-medium'>{PlayerType}</p>

                </div>

            </div>
            <button className='btn text-red-500'><MdDelete></MdDelete></button>
        </div>
    );
};

export default SelecetedPlayer;