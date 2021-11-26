import React from "react";
import { delAtm } from "../../store/actions/atms.action";
import { Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import atm from "../../assets/atm.png";
import toast from "react-hot-toast";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function AtmCard(props) {
  const removeATM = async () => {
    const promise = delAtm(props.props.id);
    toast.promise(promise, {
      loading: "Deleting ATM...",
      success: "Deleted ATM!",
      error: "error"
    })

    const result = await promise;
    return result
  };

  return (
    <Paper className="atm_card">
      <Grid container spacing={2}>
        <Grid item>
          <Img className="atm_img" alt="atm" src={atm} />
        </Grid>
        <Grid
          item
          sm
          container
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateRows: "repeat(1, 1fr)",
          }}
        >
          <Typography gutterBottom variant="subtitle1" component="div">
            ATM name: <strong> {props.props.name} </strong>
          </Typography>
          <Typography variant="subtitle1" component="div">
            Status:{" "}
            {props.props.status === "Free" ? (
              <span className="green_text">{props.props.status}</span>
            ) : (
              <span className="red_text">{props.props.status}</span>
            )}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Trading:
            {props.props.status === "Busy" && (
              <span> {props.props.client} </span>
            )}
          </Typography>

          <Typography variant="body2" gutterBottom>
            Transactions: {props.props.transaction}
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={removeATM} variant="outlined" color="error">
            Remove ATM
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AtmCard;
