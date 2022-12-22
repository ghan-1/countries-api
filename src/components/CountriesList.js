import React, { useEffect, useState } from "react";

function CountriesList(url) {
  const [countries_list, set_countries_list] = useState([]);
  const [error_message, set_error_mesage] = useState(false);

  const get_countries_list = () => {
    fetch(url["url"])
      .then((response) => {
        if (response.ok) {
          set_error_mesage(false);
          return response.json();
        } else {
          if (response.status === 404) {
            set_error_mesage(true);
            set_countries_list([]);
          }
        }
      })
      .then((data) => {
        set_countries_list([data][0]);
      });
  };
  useEffect(() => {
    get_countries_list();
  }, [url["url"]]);

  return (
    <div>
      {error_message && (
        <h1 style={{ textAlign: "center" }}>Country Not Found</h1>
      )}
      {
        <div>
          {countries_list?.map((item) => (
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "5px",
                display: "flex",
                margin: "20px",
              }}
              key={item["name"]["official"]}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  justifyContent: "flex-start",
                }}
              >
                <h3
                  style={{
                    textAllign: "left",
                    paddingLeft: "5px",
                    marginBottom: "0px",
                  }}
                  key={item["name"]["official"]}
                >
                  {item["flag"]}
                  {item["name"]["common"]}
                </h3>
                <p style={{ paddingLeft: "5px" }}>
                  Region: &nbsp; {item["region"]}
                </p>
                <p style={{ paddingLeft: "5px" }}>
                  Area: &nbsp; {item["area"]} KM<sup>2</sup>
                </p>
                <p style={{ paddingLeft: "5px" }}>
                  Capital City: &nbsp;{item["capital"]}
                </p>
                <div style={{ paddingLeft: "5px", display: "flex" }}>
                  Borders: &nbsp;
                  {item["borders"]?.map((neighbour) => (
                    <p key={neighbour}>{neighbour},</p>
                  ))}
                </div>
                <div style={{ paddingLeft: "5px", display: "flex" }}>
                  <p>Google Maps: &nbsp;</p>
                  <a href={item["maps"]["googleMaps"]} target="_blank">
                    {item["maps"]["googleMaps"]}
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-right",
                  width: "20%",
                  marginRight: "10px",
                }}
              >
                <img
                  src={item["flags"]["png"]}
                  alt="Contry Flag"
                  style={{
                    border: "0.5px solid black",
                    margin: "10px",
                    maxWidth: "400px",
                  }}
                ></img>
                <p style={{ marginLeft: "10px" }}>{item["name"]["official"]}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default CountriesList;
