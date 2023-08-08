import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
export function Subbreedcard(props) {
  const { breedname, name } = props;
  const [imgurl, setImgUrl] = useState("");
  useEffect(() => {
    const url = `https://dog.ceo/api/breed/${breedname}/${name}/images`;
    const getimgurl = async () => {
      const response = await axios.get(url);
      setImgUrl(response.data.message[0]);
    };
    getimgurl();
  }, []);
  return (
    <>
      <div className="subbreedcard">
        <Card
          style={{
            width: "21rem",
            padding: "10px",
            margin: "5px",
            cursor: "pointer",
          }}
        >
          <Card.Img variant="top" src={imgurl} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Text>{name}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
