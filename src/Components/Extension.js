import React from 'react';

function Extension() {
    return(
        <div className="features--container flex flex-col justify-center items-center text-center p-4">
            <h4 className='text-xl font-md my-2'>Download the Extension</h4>
            <p className='text-md text-slate-500 mb-6 mt-2 px-10'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>

            <div className="browser--container flex flex-col gap-10">
                <div className="browser--card flex flex-col justify-center items-center gap-2 bg-slate-100 shadow-xl rounded-md pt-8 pb-4">
                    <img src="../images/logo-chrome.svg" className='w-20 mb-4 ' alt="" />
                    <h5 className='font-medium text-lg'>Add to Chrome</h5>
                    <span className='text-sm text-slate-500 mb-2'>Minimun version 62</span>
                    <img src="../images/bg-dots.svg" alt="" />
                    <button className='mt-3 bg-indigo-500 py-2 px-4 rounded-md text-white font-medium cursor-pointer shadow-md transition ease-in-out duration-300 border-transparent border-2 hover:bg-transparent hover:text-indigo-500 hover:border-indigo-500'>Add & Install Extension</button>
                </div>

                <div className="browser--card flex flex-col justify-center items-center gap-2 bg-slate-100 shadow-xl rounded-md pt-8 pb-4">
                    <img src="../images/logo-firefox.svg" className='w-20 mb-4 ' alt="" />
                    <h5 className='font-medium text-lg'>Add to Firefox</h5>
                    <span className='text-sm text-slate-500 mb-2'>Minimun version 55</span>
                    <img src="../images/bg-dots.svg" alt="" />
                    <button className='mt-3 bg-indigo-500 py-2 px-4 rounded-md text-white font-medium cursor-pointer shadow-md transition ease-in-out duration-300 border-transparent border-2 hover:bg-transparent hover:text-indigo-500 hover:border-indigo-500'>Add & Install Extension</button>
                </div>

                <div className="browser--card flex flex-col justify-center items-center gap-2 bg-slate-100 shadow-xl rounded-md pt-8 pb-4">
                    <img src="../images/logo-opera.svg" className='w-20 mb-4 ' alt="" />
                    <h5 className='font-medium text-lg'>Add to Opera</h5>
                    <span className='text-sm text-slate-500 mb-2'>Minimun version 55</span>
                    <img src="../images/bg-dots.svg" alt="" />
                    <button className='mt-3 bg-indigo-500 py-2 px-4 rounded-md text-white font-medium cursor-pointer shadow-md transition ease-in-out duration-300 border-transparent border-2 hover:bg-transparent hover:text-indigo-500 hover:border-indigo-500'>Add & Install Extension</button>
                </div>
              
            </div>

        </div>
    )
}

export default Extension;