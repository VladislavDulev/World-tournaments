import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { filterBy } from "./utils/filterBy";
import "./SearchBar.scss";
import { FilterType } from "./utils/filterType";
import { useContext } from "react";
import StateContext from "../context/StateProvider";

const SearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    country,
    setCountry,
    tournamentData,
  } = useContext(StateContext);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchResults(filterBy(tournamentData, event, FilterType.Both));

    if (country) {
      setSearchTerm(event.target.value);
      setSearchResults(filterBy(searchResults, event, FilterType.Name));

      if (searchResults.length === 0) {
        setCountry("");
        setSearchResults(filterBy(tournamentData, event, FilterType.Both));
      }
    }
  };

  return (
    <div className="search-bar">
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "80%" },
        }}
      >
        <TextField
          type="text"
          autoComplete="off"
          onChange={handleSearchChange}
          id="standard-basic"
          label="Search"
          placeholder="Enter Keyword"
          variant="standard"
          value={searchTerm}
        />
      </Box>
    </div>
  );
};

export default SearchBar;
