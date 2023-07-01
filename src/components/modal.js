import React from "react";


const Modal= () => {
    return (
       <div className="modalBackground">
           <div className="modalContainer">
               <button> X </button>
              <div className="title">
                  <h1>Confirm To Continue Making Monsters</h1>
              </div>
              <div className="body">
                  <p>Make you own monster and be Awesome!</p>
              </div>
              <div className="footer">
                  <button>Cancel</button>
                  <button>Continue</button>
              </div>
           </div>
       </div>
    )
}

export default Modal;