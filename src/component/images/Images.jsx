import "./images.css";
import axios from "axios";
import { useEffect, useState } from "react";

export function Images(props) {
  const [imgurls, setImgurls] = useState([]);
  const { name } = props;
  useEffect(() => {
    const url = `https://dog.ceo/api/breed/${name}/images`;
    const getimages = async () => {
      const images = await axios.get(url);
      setImgurls(images.data.message.slice(0, 10));
    };
    getimages();
  }, []);

  return (
    <>
      <div className="images">
        {imgurls.map((curr, id) => {
          return (
            <img
              src={curr}
              key={id}
              alt=""
              style={{
                height: "200px",
                width: "250px",
                margin: "5px",
                borderRadius: "10px",
              }}
            />
          );
        })}
      </div>
    </>
  );
}
