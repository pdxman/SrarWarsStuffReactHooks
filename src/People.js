import React, { useState, useEffect } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

export default function People() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.co/api/people/?format=json")
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
      <h1 style={{ fontFamily: "Roboto, sans-serif" }}>People</h1>
      {data.map(el => (
        <div>
          <Accordion atomic={true}>
            <AccordionItem title={el.name}>
              <ul style={{ fontFamily: "Merriweather, sans-serif" }}>
                <li>
                  <strong>Birth Year:</strong> {el.birth_year}
                </li>
                <li>
                  <strong>Eye Color:</strong> {el.eye_color}
                </li>
                <li>
                  <strong>Hair Color:</strong> {el.hair_color}
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
