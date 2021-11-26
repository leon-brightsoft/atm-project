import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions } from "@mui/material";
import { addPeople } from "../../store/actions/people.action";
import toast from "react-hot-toast";

function AddPeopleBtn() {
  const [open, setOpen] = useState(false);
  const [people, setPeople] = useState({
    perName: "",
    transaction: "",
  });

  const { perName, transaction } = people;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeAddPeople = (e) => {
    setPeople(current => ({
      ...current,
      [e.target.name]: e.target.value
    }));
  };

  const handleAddPeople = async (e) => {
    e.preventDefault();
    if (!perName) {
      setOpen(true);
      return toast.error("Name is required");
    }
    if (perName.length < 2) {
      setOpen(true);
      return toast.error("Name is too short");
    }
    if (!transaction) {
      setOpen(true);
      return toast.error("Transactions is required");
    }
    if (transaction > 20 || transaction < 1) {
      setOpen(true);
      return toast.error("Transactions must be 1 to 20");
    }
    await addPeople(people);
    setPeople({ name: "", transaction: "" });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} size="medium">
        ADD NEW PERSON
      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose} m="1">
        <form action="/" method="POST" onSubmit={handleAddPeople}>
          <DialogTitle className="dialog_title">ADD NEW PERSON</DialogTitle>
          <DialogContent className="dialog_content">
            <TextField
              onChange={onChangeAddPeople}
              id="per"
              label="Person Name"
              name="perName"
              type="text"
              fullWidth
              variant="outlined"
              className="dialog_input"
            />
            <TextField
              onChange={onChangeAddPeople}
              id="trans"
              label="Transactions"
              name="transaction"
              type="number"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={handleClose}
              className="dialog_button"
            >
              Cancel
            </Button>
            <Button variant="outlined" type="submit" onClick={handleClose}>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddPeopleBtn;
