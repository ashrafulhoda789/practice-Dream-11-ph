import React from 'react';
import footerImg from '../../assets/logo-footer.png';

const footer = () => {
    return (
        <div>
            <div className='w-9/12 mx-auto flex flex-col  items-center space-y-5 bg-linear-to-r from-[#9ADCEE] via-[#F2F2F8] to-[#E7F2B5]  rounded-2xl px-3 py-20 relative top-20'>
                <div className='text-center space-y-2.5'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Subscribe to our Newsletter</h1>
                    <h3 className='font-bold text-[16px] text-gray-600' >Get the latest updates and news right in your inbox!</h3>
                </div>
                <div className='flex flex-col md:flex-row gap-4 items-center'>
                    <input type="email" placeholder="Enter your email" className="input md:w-90 text-bold" />
                    <button className='btn rounded-lg bg-linear-to-r from-[#87B5E6] to-[#EBC471] text-[16px] font-bold p-5 '>Subscribe</button>
                </div>
            </div>

            <div className='bg-[#06091A] pt-20'>
                <div className='flex justify-center items-center my-5'>
                    <img  src={footerImg} alt="" />
                </div>
                <footer className="footer sm:footer-horizontal  text-white p-10">
                    
                    <nav className='w-50'>
                        <h6 className="footer-title">About Us</h6>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Teams</a>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn bg-linear-to-r from-[#87B5E6] to-[#EBC471] join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default footer;