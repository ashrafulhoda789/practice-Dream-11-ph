import React from 'react';
import { FaUser } from 'react-icons/fa';
import SelecetedPlayer from '../../../ui/SelecetedPlayer';
import { toast } from 'react-toastify';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    // console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (selectedPlayer) =>{
        const filteredPlayer = selectedPlayers.filter(selectPlayer => selectPlayer.PlayerName !== selectedPlayer.PlayerName);

        setSelectedPlayers(filteredPlayer);
        toast(`${selectedPlayer.PlayerName} is deleted`);

        let addCoin = coin + selectedPlayer.Price;
        setCoin(addCoin);
    }
    return (
        <div className='my-10'>
            {
                selectedPlayers.map((selectedPlayer, index) => <SelecetedPlayer key={index} selectedPlayer={selectedPlayer} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelecetedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;