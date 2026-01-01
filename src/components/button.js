import React from "react";


function Button ({label, onClick}){
return(
    <button
      onClick={onClick}
      // eslint-disable-next-line no-undef
      className={`bg-yellow-400 text-brown-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition ${className}`}>
      {label}
    </button>


);

}

export default Button;








