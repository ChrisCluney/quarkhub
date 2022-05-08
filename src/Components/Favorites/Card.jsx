import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import axios from "axios";

export const Card = ({ user, handleDelete }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${user.currency}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="fav__row">
      <Link to={`../coins/${user.currency}`}>
        <div className="logo__and__name">
          <img src={user.image} className="cryp__image" />
          <h1 className="currency__name">{user.currency}</h1>
        </div>
      </Link>
      <h1>{data.coingecko_rank}</h1>
      {/* <p>{data.market_data.current_price.usd}</p> */}
      <div className="delete__button__section">
        <DeleteIcon
          className="delete__button"
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(user.id)}
        />
      </div>
    </div>
  );
};
