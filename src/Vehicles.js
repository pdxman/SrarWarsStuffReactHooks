import React, { useState, useEffect } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

export default function Vehicles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.co/api/vehicles/?format=json")
      .then(response => response.json())
      .then(data => setData(data.results));
  });

  return (
    <div>
      <GoogleFontLoader
        fonts={[
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
      <h1 style={{ fontFamily: "Roboto, sans-serif" }}>Vehicles</h1>
      {data.map(el => (
        <div>
          <Accordion atomic={true}>
            <AccordionItem title={el.name}>
              <ul style={{ fontFamily: "Merriweather, sans-serif" }}>
                <li>
                  <strong>Model:</strong> {el.model}
                </li>
                <li>
                  <strong>Manufacturer:</strong> {el.manufacturer}
                </li>
                <li>
                  <strong>Crew:</strong> {el.crew}
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
