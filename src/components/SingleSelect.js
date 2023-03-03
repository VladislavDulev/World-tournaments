import { Box, TextField, MenuItem } from "@mui/material";
import { filterBy } from "./utils/filterBy";
import "./SingleSelect.scss";
import { FilterType } from "./utils/filterType";
import { useContext } from "react";
import StateContext from "../context/StateProvider";

const SingleSelect = () => {
  const {
    setSearchResults,
    country,
    setCountry,
    tournamentData,
    setSearchTerm,
  } = useContext(StateContext);

  const handleChange = (event) => {
    setSearchResults(filterBy(tournamentData, event, FilterType.Country));
    setCountry(event.target.value);
    setSearchTerm("");
  };

  const set = new Set();
  const uniqueCountryNames = tournamentData?.filter((item) => {
    const alreadyHas = set.has(item.country.name);
    set.add(item.country.name);

    return !alreadyHas;
  });

  return (
    <Box className="single-select">
      <TextField
        className="text-field"
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="">
          <em>--All--</em>
        </MenuItem>
        {uniqueCountryNames?.map((obj) => {
          return (
            <MenuItem
              value={obj.country.name}
              key={obj.id}
              className="menu-item"
            >
              {obj.country.name}
              <img src={obj.country.url_flag} alt=""></img>
            </MenuItem>
          );
        })}
      </TextField>
    </Box>
  );
};

export default SingleSelect;
