import axios from "axios";
import React, { useEffect, useState } from "react";
import "./dogcard.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export function Dogcard(props) {
  const [imgurl, setImgurl] = useState("");
  const { name } = props;
  useEffect(() => {
    const url = `https://dog.ceo/api/breed/${name}/images/random`;
    const getimageurl = async () => {
      const imgUrl = await axios.get(url);
      setImgurl(imgUrl.data.message);
    };
    getimageurl();
  }, []);

  const navigate = useNavigate();

  const handelClick = () => {
    navigate(`/breed/${name}`);
  };

  return (
    <Card
      style={{
        width: "21rem",
        padding: "10px",
        margin: "5px",
        cursor: "pointer",
      }}
      onClick={handelClick}
    >
      <Card.Img variant="top" src={imgurl} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Text>{name}</Card.Text>
      </Card.Body>
    </Card>
  );
}
