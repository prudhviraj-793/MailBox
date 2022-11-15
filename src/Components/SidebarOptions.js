import React from "react";
import "../CSS/SidebarOptions.css";

function SidebarOptions(props) {
  return (
    <div className="container mb-1 text-center border">
      <p>
        {props.title} {props.count}
      </p>
    </div>
  );
}

export default SidebarOptions;
