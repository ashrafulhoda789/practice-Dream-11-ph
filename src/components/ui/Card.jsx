import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    // console.log(player);
    const { PlayerImg, PlayerName, PlayerType, rating, PlayerCountry, BattingStyle, BowlingStyle, Price } = player

    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
        let newCoin = coin - Price;
        if (newCoin >= 0) {
            toast.success(`${PlayerName} is selected`)
            setCoin(newCoin);
        }
        else {
            toast.warn("Not enough coin to purchase this player")
            return;
        }

        setIsSelected(true);

        setSelectedPlayers([...selectedPlayers, player]);
    }
    return (

        <div className="card bg-base-100 shadow-md">
            <figure className='border border-gray-100 rounded-lg m-5'>
                <img
                    className='h-75 '
                    src={PlayerImg}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl"><FaUser></FaUser>{PlayerName}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 text-gray-600'>
                        <FaFlag></FaFlag>
                        <p className='text-[16px] '>{PlayerCountry}</p>
                    </div>
                    <button className='btn text-semibold'>{PlayerType}</button>
                </div>

                <div className="divider"></div>

                <h3 className='font-bold text-[16px]'>Rating: {rating}</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-[16px] font-semibold'>{BattingStyle}</p>
                    <p className='text-right text-[16px] font-semibold text-gray-600'>{BowlingStyle}</p>
                </div>

                <div className="card-actions justify-end items-center">
                    <p className='text-[16px] font-semibold'>Price: ${Price}</p>
                    <button
                        onClick={() => handleChoosePlayer()}
                        disabled={isSelected}
                        className="btn">
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;