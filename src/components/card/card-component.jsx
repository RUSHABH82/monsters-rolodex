import { Component } from "react";

import "./card-styles.css";

const MonsterCard = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&Size=150×150`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default MonsterCard;
