import React from 'react';
import { FaUser } from 'react-icons/fa';
import SelecetedPlayer from '../../../ui/SelecetedPlayer';
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    // console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (selectedPlayer) => {
        const filteredPlayer = selectedPlayers.filter(selectPlayer => selectPlayer.PlayerName !== selectedPlayer.PlayerName);

        setSelectedPlayers(filteredPlayer);
        toast(`${selectedPlayer.PlayerName} is deleted`);

        let addCoin = coin + selectedPlayer.Price;
        setCoin(addCoin);
    }
    return (
        <div className='my-10'>
            {
                selectedPlayers.length === 0 ?
                    <div className='h-100 flex flex-col justify-center items-center gap-4'>
                        <h2 className='font-semibold text-xl'>No players Selected yet</h2>
                        <p className='font-medium'>Go to Available tab to select players </p>
                    </div>
                    :

                    selectedPlayers.map((selectedPlayer, index) => <SelecetedPlayer key={index} selectedPlayer={selectedPlayer} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelecetedPlayer>)

            }
        </div>
    );
};

export default SelectedPlayers;