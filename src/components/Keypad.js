import React from "react";

function Keypad() {
  // Define the event handler function
  const handleChange = () => {
    console.log("Entering password...");
    // You can add your logic here to handle the input value change
  };

  return (
    <div>
      {/* Render the input with the event handler */}
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
