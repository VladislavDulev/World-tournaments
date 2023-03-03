import axios from "axios";
import { useEffect, useState } from "react";

const useTournamentFetch = (url) => {
  const [tournamentData, setTournamentData] = useState();

  const username = "5a0c23c39a296337279fbe2379da3543";
  const password = "5e1225a7897465d9b245ad80d09d50ed";

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        "https://football.api.sandbox.sportal365.com/tournaments",
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );

      setTournamentData(response);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { tournamentData };
};

export default useTournamentFetch;
