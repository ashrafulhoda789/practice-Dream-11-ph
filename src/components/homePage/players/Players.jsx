import React, { use } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    const players = use(playerPromise);
    // console.log(players);
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg md:text-[28px] font-bold'>Available Players</h1>
                <div>
                    <button className='btn bg-green-300 rounded-r-none rounded-l-xl text-sm md:text-[16px] font-bold'>Available</button>
                    <button className='btn rounded-l-none rounded-r-xl text-sm md:text-[16px] font-bold'>Selected</button>
                </div>
            </div>

            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;