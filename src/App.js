import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
// import MapView from "./components/MapView";

function App() {
  const [place, setPlace] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [list, setList] = useState([]);
  const [check, setCheck] = useState(false);

  const add = () => {
    console.log(place.length);
    if (!place) alert("Enter the Location");
    else {
      setCheck(!check);
      var url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=c7a9299a3d8da1d910da08bcffb48a3b`;
      // console.log(url);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!data) alert("Place Not founded");
          setLon(data.coord.lon);
          setLat(data.coord.lat);

          // console.log(a, b);
        })
        .catch((e) => alert(e.message));
    }
  };

  const submit = () => {
    // <Map lat={lat} lat={lon} />;
    setCheck(!check);
    setList([
      ...list,
      {
        place,
        lat,
        lon,
      },
    ]);
    setPlace("");
    setLon("");
    setLat("");
  };
  // console.log(list);

  return (
    <div className="App">
      <div className="container">
        <div className="container head">
          <h1>Find the Location</h1>
        </div>
        <div className="card">
          <div className="card-head">
            <div className="card-title">
              <div className="input">
                <div className="location">
                  <h6>Location</h6>
                  <input
                    type="text"
                    class="form-control "
                    placeholder="Location"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={place}
                    onChange={(e) => {
                      setPlace(e.target.value);
                    }}
                  />
                </div>
                <div className="location">
                  <h6>Lattitude</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Lattitude"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={lat}
                  />
                </div>
                <div className="location">
                  <h6>Longitude</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Longitude"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={lon}
                  />
                </div>
              </div>
              <div className="button">
                <button
                  className={`btn add-btn`}
                  onClick={() => {
                    if (check) {
                      // setCheck(!check);
                      submit();
                    } else {
                      // setCheck(!check);
                      add();
                    }
                  }}
                >
                  {check ? "Submit" : "Add"}
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div class="  list-card" style={{ width: 25 + "rem" }}>
              <div class="card-body">
                <table class="table table-bordered table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Location</th>
                      <th scope="col">Lattitude</th>
                      <th scope="col">Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((item) => (
                      <tr>
                        <td>{item.place}</td>
                        <td>{item.lat}</td>
                        <td>{item.lon}</td>
                      </tr>
                    ))}
                  </tbody>
                  <div className="btn">
                    <button className="btn btn-danger mt-3 route-btn text-center">
                      Show Route
                    </button>
                  </div>
                </table>
              </div>
            </div>
            <div className=" card  map-card" style={{ width: 40 + "rem" }}>
              {<Map list={list} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
