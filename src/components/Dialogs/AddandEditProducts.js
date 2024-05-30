import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const AddEditProduct = () => {
  const [open, setOpen] = useState(false);
  const { control,handleSubmit } = useForm();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const OnSubmit=(data)=>{
    console.log('data',data)
    handleClose()
  }

  return (
    <>
      <Button variant="contained" size="small" onClick={handleOpen}>
        Add Products
      </Button>
      <Dialog open={open} size="md" onClose={handleClose}>
            <form onSubmit={handleSubmit(OnSubmit)}>
        <DialogTitle display="flex" justifyContent="center" >
          <Typography variant="h6">Add Product</Typography>
        </DialogTitle>
        <DialogContent xs={{p:2}}>
          <DialogContentText>
            <Grid container spacing={3}>
              <Grid item>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ...rest } }) => (
                    <TextField label="Product Name" {...rest} />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="inventedBy"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ...rest } }) => (
                    <TextField label="Invented By" {...rest} />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="quantity"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ...rest } }) => (
                    <TextField label="Quantity" {...rest} />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="price"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ...rest } }) => (
                    <TextField label="Price" {...rest} />
                  )}
                />
              </Grid>
              
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions display='flex' justifyContent>
          <Button onClick={handleClose}  variant="outlined">Discard</Button>
          <Button type='submit' variant='outlined'  autoFocus>
            Save
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
export default AddEditProduct;
