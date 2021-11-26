import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addAtm } from "../../store/actions/atms.action";
import toast from "react-hot-toast";

function AddAtmBtn() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [atmName, setAtmName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeAddAtm = (e) => {
    setAtmName(e.target.value);
  };

  const handleAddAtm = async (e) => {
    e.preventDefault();
    if (!atmName) {
      setOpen(true);
      return toast.error("Name is required");
    }
    if (atmName.length < 2) {
      setOpen(true);
      return toast.error("Name is too short");
    }
    dispatch(addAtm({ name: atmName }));
    setAtmName("");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} size="medium">
        Add new ATM
      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose} m="1">
        <form action="/" method="POST" onSubmit={handleAddAtm}>
          <DialogTitle className="dialog_title">ADD New ATM</DialogTitle>
          <DialogContent className="dialog_content">
            <TextField
              onChange={onChangeAddAtm}
              id="atm"
              label="ATM Name"
              type="text"
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

export default AddAtmBtn;
