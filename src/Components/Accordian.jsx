import React from "react";
import './Style.css';

function Accordian() {
    const accordians = document.querySelectorAll('.accordian--card');

    function handleAccordian(e) {
        const closestAccordian = e.target.closest('div');
        closestAccordian.classList.toggle('active');
    }

   
  return (
    <div className="accordian--wrapper flex flex-col justify-center items-center gap-2 mt-4 p-4">
      <span className="font-medium text-2xl">Frequently Asked Questions</span>
      <p className="text-center text-slate-500 text-[1rem] px-4">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <hr className="bg-slate-500 w-full" />
      <div className="accordian--container">
        <div className="accordian--card" onClick={handleAccordian}>
          <h6>What is Bookmark?</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <hr />
        <div className="accordian--card" onClick={handleAccordian}>
          <h6>How can I request a new browser?</h6>
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <hr />
        <div className="accordian--card" onClick={handleAccordian}>
          <h6>Is there a mobile app?</h6>
          <p>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </div>
        <hr />
        <div className="accordian--card" onClick={handleAccordian}>
          <h6>What about other Chromium browsers?</h6>
          <p>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
        <hr />
      </div>

      <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-md my-4 text-lg shadow-slate-300 shadow-lg">More info</button>
    </div>
  );
}

export default Accordian;
