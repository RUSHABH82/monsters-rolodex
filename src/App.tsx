import "./App.css";
import {ChangeEvent, useEffect, useState} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {getData} from "./utils/data.utils";

export type Monster = {
    id: string,
    name: string,
    email: string
}

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [title, setTitle] = useState("Monster rolodex");
    const [filteredMonster, setFilteredMonster] = useState(monsters);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Array<Monster>>("https://jsonplaceholder.typicode.com/users")
            setMonsters(users)
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        setFilteredMonster(
            monsters.filter((monster) =>
                monster.name.toLowerCase().includes(searchField)
            )
        );
    }, [searchField, monsters]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLowerCase();
        setTitle(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title">{title}</h1>
            <SearchBox
                onSearchBoxHandler={onSearchChange}
                placeholder="Search moster"
                className="monster-search-box"
            />
            <br></br>
            <SearchBox
                onSearchBoxHandler={onTitleChange}
                placeholder="change title"
                className="title-search-box"
            />

            <CardList monsters={filteredMonster}/>
        </div>
    );
};

/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onSearchBoxHandler={onSearchChange}
          placeholder="Search moster"
          className="monster-search-box"
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
*/
export default App;
