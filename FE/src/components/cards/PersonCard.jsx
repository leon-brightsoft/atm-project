import React from "react";
import { CardContent, Card, Typography } from "@mui/material";

function PersonCard(props) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {props.props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Transactions: {props.props.transaction}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PersonCard;
