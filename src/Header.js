import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import FontAwesome from "react-fontawesome";

export default function Header() {
  return (
    <div>
      <GoogleFontLoader
        fonts={[
          {
            font: "Fjalla One",
            weights: [400, "400i"]
          },
          {
            font: "Roboto",
            weights: [100]
          },
          {
            font: "Merriweather",
            weights: [100]
          }
        ]}
      />

      <h1 style={{ fontFamily: "Fjalla One, sans-serif" }}>
        <FontAwesome
          className="fa fa-jedi"
          name="galactic-republic"
          size="1x"
          style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
        />
        <span> Star Wars Stuff</span>
      </h1>
    </div>
  );
}
