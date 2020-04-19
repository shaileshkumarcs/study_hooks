import React from "react";

function Button({ handleClick, children }) {
  console.log("Rendring button - ", children);
  return (
    <div>
      <button type="buton" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
