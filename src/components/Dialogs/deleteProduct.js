import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DeleteForeverOutlined, WarningAmber } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";

const DeleteProduct = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <DeleteForeverOutlined onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <Grid container display="flex" justifyContent="center">
          <Grid item sx={{ pt: 3 }}>
            <WarningAmber color="error" />
          </Grid>
        </Grid>
        <DialogContent>
          Are you sure you want to delete this Product ?
        </DialogContent>
        <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              No
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Yes
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};
export default DeleteProduct;
