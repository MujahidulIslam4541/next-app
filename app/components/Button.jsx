'use client'
import React from "react";

const Button = () => {
  return (
    <div>
      <div>
        <button className="p-2 bg-yellow-400 rounded-sm" onClick={() => console.log("clicked here button")}>
          clicked here
        </button>
      </div>
    </div>
  );
};

export default Button;
