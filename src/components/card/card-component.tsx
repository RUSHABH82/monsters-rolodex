import "./card-styles.css";
import {Monster} from "../../App";

type CardProps = {
    monster: Monster
}
const MonsterCard = ({monster}: CardProps) => {
    const {id, name, email} = monster;

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
