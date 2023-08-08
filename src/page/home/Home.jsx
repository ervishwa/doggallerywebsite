import React, { useEffect, useState } from "react";
import { Navbar } from "../../component/nabvar/Navbar";
import axios from "axios";
import { Dogcard } from "../../component/dogcard/Dogcard";
import "./home.css";
export function Home() {
  const [breed, setBreed] = useState("");
  const [dogdata, setDogData] = useState({});
  const [filterdata, setFilterData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      setFilterData([]);
      const data = await axios.get("https://dog.ceo/api/breeds/list/all");
      setDogData(data.data.message);
    };

    getdata();

    if (breed) {
      const newdata = Object.keys(dogdata).filter((curr) => {
        if (curr.toLowerCase().includes(breed.toLowerCase())) {
          return true;
        }
      });

      setFilterData(newdata);
    }
  }, [breed]);

  return (
    <>
      <Navbar />
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-12 searchbox">
            <div className="search" style={{ width: "40vw" }}>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Type here to filter by breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dogdata m-auto">
        {filterdata.length > 0
          ? filterdata.map((curr, id) => {
              return <Dogcard key={id} name={curr} />;
            })
          : Object.keys(dogdata).map((curr, id) => {
              return <Dogcard name={curr} key={id} />;
            })}
      </div>
    </>
  );
}
