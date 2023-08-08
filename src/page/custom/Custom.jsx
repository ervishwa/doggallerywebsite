import React, { useState, useEffect } from "react";
import "./custom.css";
import { Navbar } from "../../component/nabvar/Navbar";
import axios from "axios";
export const Custom = () => {
  const [selectedBreed, setSelectedBreed] = useState("");
  //default number of images is to be 3.
  const [numImages, setNumImages] = useState(3);
  const [breedList, setBreedList] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
    fetchBreedList();
  }, [numImages]);

  const fetchBreedList = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      const data = response.data;
      if (data.status === "success") {
        const breeds = Object.keys(data.message);
        setBreedList(breeds);
      } else {
        console.error("Error fetching breed list:", data.message);
      }
    } catch (error) {
      console.error("Error fetching breed list:", error);
    }
  };

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const handleNumImagesChange = (event) => {
    setNumImages(Number(event.target.value));
  };

  const handleGetImages = async () => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/${numImages}`
      );
      const data = response.data;
      if (data.status === "success") {
        setImages(data.message);
      } else {
        console.error("Error fetching images:", data.message);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="custom">
        <h2>Custom Search</h2>
        <label>
          Select a Breed:
          <select value={selectedBreed} onChange={handleBreedChange}>
            <option value="">Select a breed...</option>
            {breedList.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Number of Images:
          <input
            type="number"
            value={numImages}
            onChange={handleNumImagesChange}
          />
        </label>
        <button onClick={handleGetImages}>Get Images</button>
        <div>
          {images.length > 0 && (
            <>
              <h3 style={{ marginLeft: "20px" }}>
                Showing {numImages} images of {selectedBreed}
              </h3>
              <div className="customimages">
                {images.map((image, index) => (
                  <img key={index} src={image} alt={`Dog ${index + 1}`} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

