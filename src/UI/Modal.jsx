// import React from 'react';
// import Card from './Card';

// const Modal = (props) => {
//   return (
//     <div>
//       <div className="fixed inset-0 bg-black opacity-75" onClick={props.onConfirm}></div>
//       <Card className="fixed top-30vh left-10% w-80% z-50 overflow-hidden">
//         <header className="bg-purple-900 p-4">
//           <h2 className="m-0 text-white">{props.title}</h2>
//         </header>
//         <div className="p-4">
//           <p>{props.message}</p>
//         </div>
//         <footer className="p-4 flex justify-end">
//           <button onClick={props.onConfirm}>Okay</button>
//         </footer>
//       </Card>
//     </div>
//   );
// };

// export default Modal;

import React, {useEffect, useRef} from "react";

const Modal = (props) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-primary-bodyText opacity-50"></div>
      <div
        className="bg-background p-4 rounded-lg shadow-lg relative min-h-[300px] min-w-[300px] max-h-[500px] max-w-[500px] transition-all transform duration-2000 ease-in-out modal-slide-up"
      >
        <button
          className="absolute top-0 right-0 m-2 p-2 rounded-full text-secondary-bodyText hover:bg-secondary-bodyText"
          onClick={props.onConfirm}
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 8.586L15.293 3.293a1 1 0 0 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 10 3.293 4.707A1 1 0 1 1 4.707 3.293L10 8.586z"
            />
          </svg>
        </button>
        <h2 className="p-5 font-semibold text-3xl">{props.title}</h2>
        <p className="p-4">{props.a}</p>
        <p className="p-4">{props.cat}</p>
        <p className="p-4">{props.ins}</p>
      </div>
    </div>
  );
};

export default Modal;
