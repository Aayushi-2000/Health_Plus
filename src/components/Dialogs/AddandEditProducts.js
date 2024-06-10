import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditNoteOutlined } from "@mui/icons-material";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Product Name is required")
    ?.matches(/^[a-zA-Z ]+$/, "Invalid name only characters allowed"),
  inventedBy: yup
    .string()
    .required("Invented by is required")
    .matches(/^[a-zA-Z ]+$/, "Invalid Invented by only characters allowed"),
  quantity: yup.string().required("Quantity is required "),
  price: yup.string().required("Price is required"),
});
const AddEditProduct = ({ row }) => {
  const data = row?.row;
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: row ? data?.name : "",
      inventedBy: data ? data?.company : "",
      quantity: data ? data?.quantity : "",
      price: data ? data?.price : "",
      isActive: data ? data?.isActive : false,
    },
    resolver: yupResolver(schema),
  });
  const isActive = watch("isActive");
  const handleOpen = () => {
    reset();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const HandleISActive = () => {
    setValue("isActive", !isActive);
  };
  const OnSubmit = (data) => {
    console.log("data", data);
    handleClose();
  };

  return (
    <>
      <Box>
        {row ? (
          <EditNoteOutlined onClick={handleOpen} />
        ) : (
          <Button variant="contained" size="small" onClick={handleOpen}>
            Add Products
          </Button>
        )}
      </Box>
      <Dialog open={open} size="md" onClose={handleClose}>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <DialogContent>
            <Grid container rowGap={4}>
              <Grid container display="flex" justifyContent="center">
                <Grid item>
                  <Typography variant="h6">
                    {row ? "Edit Product" : "Add Product"}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item sx={6} md={6}>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, ...rest } }) => (
                      <TextField
                        label="Product Name"
                        {...rest}
                        value={value}
                        fullWidth
                        error={!!errors?.name?.message}
                        helperText={errors?.name?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item sx={6} md={6}>
                  <Controller
                    name="inventedBy"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { ...rest } }) => (
                      <TextField
                        label="Invented By"
                        {...rest}
                        fullWidth
                        error={!!errors?.inventedBy?.message}
                        helperText={errors?.inventedBy?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item sx={6} md={6}>
                  <Controller
                    name="quantity"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { ...rest } }) => (
                      <TextField
                        label="Quantity"
                        type="number"
                        error={!!errors?.quantity?.message}
                        helperText={errors?.quantity?.message}
                        {...rest}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item sx={6} md={6}>
                  <Controller
                    name="price"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { ...rest } }) => (
                      <TextField
                        label="Price"
                        type="number"
                        error={!!errors?.price?.message}
                        helperText={errors?.price?.message}
                        {...rest}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container sx={12} display="flex" justifyContent="center">
                <Grid item sx={4}>
                  <Switch checked={isActive} onChange={HandleISActive} />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <Box display="ruby-text" sx={{ pb: 2 }}>
            <DialogActions display="flex" justifyContent="center">
              <Button onClick={handleClose} variant="outlined">
                Discard
              </Button>
              <Button type="submit" variant="contained" autoFocus>
                {row ? "Update" : "Save"}
              </Button>
            </DialogActions>
          </Box>
        </form>
      </Dialog>
    </>
  );
};
export default AddEditProduct;
