import { useParams } from "react-router-dom";
import "./subbreed.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Images } from "../../component/images/Images";
import { Subbreedcard } from "../../component/subbreedcard/Subbreedcard";
import { Navbar } from "../../component/nabvar/Navbar";
export function Subbreed() {
  const { breedname } = useParams();
  const [subbreed, setSubBreed] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true);
      const url = `https://dog.ceo/api/breed/${breedname}/list`;
      try {
        const response = await axios.get(url);
        const data = response.data.message;
        setSubBreed(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      }
    };
    getdata();
  }, [breedname]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <h4>
              BreedName :<span style={{ color: "red" }}>{breedname}</span>
            </h4>
          </div>
        </div>
      </div>
      <h3>Subbreads</h3>
      <div className="subbreads">
        {isloading ? (
          "loading...."
        ) : subbreed.length > 0 ? (
          subbreed.map((curr, id) => {
            return <Subbreedcard name={curr} key={id} breedname={breedname} />;
          })
        ) : (
          <h5 style={{ color: "red" }}>Soory No any Subbreed is Present</h5>
        )}
      </div>

      <h3 style={{ marginTop: "10px" }}>More Image of Your desired Breed</h3>
      <Images name={breedname} />
    </>
  );
}
