import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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

        sx={{p:5,mt:2,  backgroundColor: "#c2e3fc" }}
        display="grid"
      >
        <Grid item>
          <Grid container display="flex" justifyContent="space-between">
            <Grid item>
              <Typography variant='h5'>Manage Products</Typography>
            </Grid>
            <Grid item>
              <Button variant='contained' size='small' >Add Products</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            sx={{ backgroundColor: "#f2f8fc" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
