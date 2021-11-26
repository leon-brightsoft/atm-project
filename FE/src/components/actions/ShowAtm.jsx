import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AtmCard from "../cards/AtmCard";
import { ListItem } from "@mui/material";
import { getAtm } from "../../store/actions/atms.action";

function ShowAtm() {
  const dispatch = useDispatch();
  const atm = useSelector((state) => state.Atm);
  const { atms, ...others } = atm;

  useEffect(() => {
    const resetTimer = setInterval(() => {
      dispatch(getAtm());
    }, 1000);
    return () => clearInterval(resetTimer);
  }, []);

  return (
    <div>
      <ListItem
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {atms?.map((props) => (
          <AtmCard key={props.id} props={props} />
        ))}
      </ListItem>
    </div>
  );
}

export default ShowAtm;
