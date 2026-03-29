import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, coin, setCoin }) => {
    const players = use(playerPromise);
    // console.log(players);

    const [toggle, setToggle] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-4'>
                {
                    toggle === "available" ?
                        <h1 className='text-lg md:text-[28px] font-bold'>Available Players</h1>
                        : <h1 className='text-lg md:text-[28px] font-bold'>Selected Players ({selectedPlayers.length}/{players.length})</h1>


                }
                <div>
                    <button
                        onClick={() => setToggle("available")}
                        className={`btn ${toggle === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl text-sm md:text-[16px] font-bold`}>Available</button>

                    <button
                        onClick={() => setToggle("selected")}
                        className={`btn ${toggle === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl text-sm md:text-[16px] font-bold`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            {
                toggle === "available" ?
                    <AvailablePlayers
                        coin={coin} setCoin={setCoin}
                        selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
                        players={players}></AvailablePlayers>
                    : <SelectedPlayers
                        selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
                        coin={coin} setCoin={setCoin}
                    ></SelectedPlayers>
            }
        </div>
    );
};

export default Players;