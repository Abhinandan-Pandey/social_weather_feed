import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Modal(props) {
  return (
    <div>
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error Occured"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.error
              ? props.error.message
              : "Some error has occured. Please try again."}
            "Please refresh the page."
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
