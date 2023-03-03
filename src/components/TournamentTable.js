import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useContext } from "react";
import StateContext from "../context/StateProvider";
import "./TournamentTable.scss";

const TournamentTable = () => {
  const { searchTerm, searchResults, country, tournamentData } =
    useContext(StateContext);

  const singleRowCellComponent = (param) => {
    return (
      <TableRow key={param.id}>
        <TableCell>
          <TableCell>{param.country.name}</TableCell>
          <TableCell>
            <img src={param.country.url_flag} alt="country-flags"></img>
          </TableCell>
        </TableCell>
        <TableCell>{param.name}</TableCell>
      </TableRow>
    );
  };

  const filteredResults = searchResults?.map((row) =>
    singleRowCellComponent(row)
  );

  const allTournamentData = tournamentData?.map((row) =>
    singleRowCellComponent(row)
  );

  const contentToShow =
    (searchResults === undefined || searchResults.length === 0) &&
    !searchTerm &&
    !country
      ? allTournamentData
      : filteredResults;

  const noTournamentsToShowMsg =
    "No existing tournaments with this name in selected country";

  const noTournamentsAndContiesToShowMsg = "No countries or tournaments found";

  const noDataMsgs =
    (searchResults.length === 0 && country && noTournamentsToShowMsg) ||
    (searchResults.length === 0 &&
      !country &&
      searchTerm &&
      noTournamentsAndContiesToShowMsg);

  return (
    <>
      <Table aria-label="tournament table" className="tournament-table">
        <TableHead></TableHead>
        <TableRow className="table-head">
          <TableCell>Country</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
        <TableBody className="table-body">{contentToShow}</TableBody>
      </Table>
      {noDataMsgs && <div className="no-data">{noDataMsgs}</div>}
    </>
  );
};

export default TournamentTable;
