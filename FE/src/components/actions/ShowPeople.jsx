import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonCard from "../cards/PersonCard";
import { ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { getPerson } from "../../store/actions/people.action";

function ShowPeople() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.People);

  useEffect(() => {
    const resetTimer = setInterval(() => {
      dispatch(getPerson());
    }, 1000);
    return () => clearInterval(resetTimer);
  }, []);

  return (
    <div>
      <ListItem
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateRows: "repeat(1, 1fr)",
        }}
      >
        {!people.people ? (
          <Typography variant="caption" display="block" gutterBottom>
          No person in queue
        </Typography>
        ) : (
          people.people.map(props => (
            <Box key={props.id} sx={{ width: "auto" }}>
              <PersonCard props={props} />
            </Box>
          ))
        )}
      </ListItem>
    </div>
  );
}

export default ShowPeople;
