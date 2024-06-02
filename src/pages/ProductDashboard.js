import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Typography } from "@mui/material";
import AddEditProduct from "../components/Dialogs/AddandEditProducts";
import DeleteProduct from "../components/Dialogs/deleteProduct";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    maxwidth: 70,
    minWidth: 70,
    sortable: false,
  },
  {
    field: "name",
    headerName: "Product name",
    width: 200,
    maxwidth: 250,
    minWidth: 250,
    sortable: false,
  },
  {
    field: "company",
    headerName: "Invented By",
    width: 200,
    maxwidth: 250,
    minWidth: 250,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
    maxwidth: 230,
    minWidth: 250,
    sortable: false,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 200,
    maxwidth: 250,
    minWidth: 150,
    sortable: false,
  },
  {
    field: "action",
    headerName: "Action",
    maxwidth: 150,
    minWidth: 150,
    sortable: false,
    renderCell: (row) => {
      return (
        <Box display="flex" justifyContent="space-evenly">
          <AddEditProduct row={row} />
          <DeleteProduct />
        </Box>
      );
    },
  },
];

const rows = [
  { id: 1, name: "product", company: "Jon", quantity: 14, price: 230 },
  { id: 2, name: "Lannister", company: "Cersei", quantity: 31, price: 490 },
  { id: 4, name: "Stark", company: "Arya", quantity: 11, price: 230 },
  { id: 5, name: "Targaryen", company: "Daenerys", quantity: null, price: 78 },
  { id: 3, name: "Lannister", company: "Jaime", quantity: 31, price: 789 },
  { id: 6, name: "Melisandre", company: null, quantity: 150, price: 90 },
  { id: 7, name: "Clifford", company: "Ferrara", quantity: 44, price: 890 },
  { id: 8, name: "Frances", company: "Rossini", quantity: 36, price: 500 },
  { id: 9, name: "Roxie", company: "Harvey", quantity: 65, price: 600 },
];

export default function AdminDashboard() {
  return (
    <Box display="flex" justifyContent="center">
      <Grid
        container
        xs={10}
        md={10}
        lg={10}
        columnGap={2}
        rowSpacing={2}
        sx={{
          p: 5,
          mt: 2,
          mb: 2,
          backgroundColor: "#c2e3fc",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        display="grid"
      >
        <Grid item>
          <Grid container display="flex" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Manage Products</Typography>
            </Grid>
            <Grid item>
              <AddEditProduct />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <DataGrid
            rows={rows}
            autoHeight
            columns={columns}
            // pagination
            // paginationMode="server"
            disableColumnMenu
            disableColumnFilter
            disableColumnSelector
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            sx={{
              backgroundColor: "#f2f8fc",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
