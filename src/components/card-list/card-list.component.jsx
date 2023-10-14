import React, { Component } from "react";

import "./card-list.styles.css";
import MonsterCard from "../card/card-component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <MonsterCard key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
