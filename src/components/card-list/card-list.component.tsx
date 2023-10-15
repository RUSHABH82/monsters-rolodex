import React from "react";

import "./card-list.styles.css";
import MonsterCard from "../card/card-component";
import {Monster} from "../../App";

type CardListProps = {
    monsters: Monster[]
}
const CardList = ({monsters}: CardListProps) => (
    <div className="card-list">
        {monsters.map((monster) => (
            <MonsterCard key={monster.id} monster={monster}/>
        ))}
    </div>
);

export default CardList;
