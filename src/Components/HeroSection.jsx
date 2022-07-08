import React from 'react';
import './Style.css';

function HeroSection() {
    return(
        <div className="hero--section py-4 px-6 justify-center items-center flex flex-col gap-10 text-center">
            <div className="text-wrapper flex flex-col gap-2 order-2">
                <h1 className="heading text-3xl text-bold w-3/4 mx-auto">A Simple Bookmark Manager</h1>
                <p className='text-slate-500 text-md mx-auto'>A clean and simeple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="button--wrapper flex mx-auto gap-6 mt-2">
                    <button className='bg-indigo-500 py-2 px-4 cursor-pointer text-white font-medium text-md rounded-md shadow-slate-300 shadow-lg transition ease-in duration-300 hover:bg-indigo-700'>Get it on Chrome</button>
                    <button className='bg-slate-100 py-2 px-4 cursor-pointer text-black font-medium text-md rounded-md shadow-lg transition ease-in duration-300 hover:bg-slate-300'>Get it on Firefox</button>
                </div>
            </div>

            <div className="hero--img order-1 bg-blue-500 flex justify-center items-center">
                <img src="../images/illustration-hero.svg" alt="" />
            </div>
        </div>
    )
}


export default HeroSection;