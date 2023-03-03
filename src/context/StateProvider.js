import React, { createContext, useState } from "react";
import useTournamentFetch from "../service/useTournamentFetch";

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [country, setCountry] = useState("");

  const { tournamentData } = useTournamentFetch(
    "https://football.api.sandbox.sportal365.com/tournaments"
  );

  return (
    <StateContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        country,
        setCountry,
        tournamentData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
