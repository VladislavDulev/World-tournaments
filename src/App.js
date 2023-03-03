import SearchBar from "./components/SearchBar";
import SingleSelect from "./components/SingleSelect";
import TournamentTable from "./components/TournamentTable";
import "./App.scss";
import { StateProvider } from "./context/StateProvider";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <div className="filter-wrapper">
          <SearchBar />
          <SingleSelect />
        </div>
        <TournamentTable />
      </div>
    </StateProvider>
  );
}

export default App;
