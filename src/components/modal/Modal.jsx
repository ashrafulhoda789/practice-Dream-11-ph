import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const Modal = ({ modalPlayer }) => {

    if(modalPlayer === null) return;

    const { PlayerImg, PlayerName, PlayerType, rating, PlayerCountry, BattingStyle, BowlingStyle, Price } = modalPlayer;

    return (

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="card bg-base-100 shadow-md modal-box">

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

                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn"><MdCancel></MdCancel></button>
                        </form>
                    </div>

                </div>

            </div>
        </dialog>

    );
};

export default Modal;