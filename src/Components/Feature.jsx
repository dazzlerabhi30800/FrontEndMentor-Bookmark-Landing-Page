import React,{useState} from "react";
import './Style.css';
import data from './data.js';

function Feature(e) {
    function handleLink(e) {
        const links = document.querySelectorAll('.features--link a')
        const img = document.querySelector('.feature--img img');
        const title = document.querySelector('.info--wrapper h3');
        const info = document.querySelector('.info--wrapper p');

        links.forEach(link => {
            link.classList.remove('active');
        })
        const index = e.target.dataset.index;
        links[index].classList.add('active');
        img.src = data[index].images;
        title.textContent = data[index].title;
        info.textContent = data[index].desc;
    }
  return (

    
    <div className="feature--wrapper flex flex-col py-4 px-6 items-center justify-center text-center gap-10">
      <div className="feature--description flex flex-col gap-3">
        <h2 className="title font-medium text-3xl">Features</h2>
        <p className="w-full mx-auto text-slate-500">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="features--link flex flex-col gap-2 md:gap-0">
        <hr />
        <a data-index="0" onClick={handleLink} className="py-2 cursor-pointer active">Simple Bookmarking</a>
        <a data-index="1" onClick={handleLink} className="py-2 cursor-pointer">Speedy Searching</a>
        <a data-index="2" onClick={handleLink} className="py-2 cursor-pointer">Easy Sharing</a>
      </div>
      <div className="feature--container flex flex-col gap-10 py-2 px-2">
        <div className="feature--img flex justify-center items-center">
            <img src="../images/illustration-features-tab-1.svg" className="transition ease-in duration-300" alt=""  />
        </div>
        <div className="info--wrapper py-6 px-6 flex flex-col text-center gap-4">
          <h3 className="text-2xl font-medium">Bookmark in one click</h3>
          <p className="text-[1rem] text-slate-500 ">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
          <button className="bg-indigo-500 w-fit mx-auto  py-2 px-4 text-lg rounded-lg text-white font-bold cursor-pointer transition ease-in-out duration-300 hover:bg-indigo-600 shadow-slate-400 shadow-lg hidden md:block">More info</button>
        </div>

      </div>
    </div>
  );
}

export default Feature;
