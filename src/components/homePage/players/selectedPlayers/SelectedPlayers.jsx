import React from 'react';
import { FaUser } from 'react-icons/fa';
import SelecetedPlayer from '../../../ui/SelecetedPlayer';

const SelectedPlayers = ({selectedPlayers}) => {
    // console.log(selectedPlayers);
    return (
        <div className='my-10'>
            {
                selectedPlayers.map((selectedPlayer, index) => <SelecetedPlayer key={index} selectedPlayer={selectedPlayer}></SelecetedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;