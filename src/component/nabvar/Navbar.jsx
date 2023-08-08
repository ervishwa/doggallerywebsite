import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/custom");
  };
  return (
    <div className="mynavbar">
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
      </h1>
      <h1>Dog Gallery</h1>
      <button onClick={handelClick} className="customButton">
        Custom Search
      </button>
    </div>
  );
}
