import React from "react";
import FontAwesome from "react-fontawesome";

export default function Awesome() {
  return (
    <div>
      <FontAwesome
        className="fa fa-jedi"
        name="galactic-republic"
        size="1x"
        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
      />
    </div>
  );
}
