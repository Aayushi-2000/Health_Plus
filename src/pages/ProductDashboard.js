import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Chip, Grid, Typography } from "@mui/material";
import AddEditProduct from "../components/Dialogs/AddandEditProducts";
import { StatusColor, status } from "../components/common/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../services/Product";

const getStatusType = (statusType) => {
  return statusType ? status?.active : status?.inActive;
};

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
    field: "createdby",
    headerName: "Invented By",
    width: 200,
    maxwidth: 250,
    minWidth: 250,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    maxwidth: 130,
    minWidth: 150,
    sortable: false,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    maxwidth: 150,
    minWidth: 150,
    sortable: false,
  },
  {
    field: "tag",
    headerName: "Tag",
    width: 100,
    maxwidth: 150,
    minWidth: 150,
    sortable: false,
  },
  {
    field: "isActive",
    headerName: "Status",
    maxwidth: 120,
    minWidth: 120,
    sortable: false,
    renderCell: (row) => {
      return (
        <Box>
          <Chip
            label={getStatusType(row?.row?.isActive)}
            color={StatusColor[getStatusType(row?.row?.isActive)]}
          />
        </Box>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    maxwidth: 80,
    minWidth: 80,
    sortable: false,
    renderCell: (row) => {
      return (
        <Box display="flex" justifyContent="space-evenly">
          <AddEditProduct row={row} />
        </Box>
      );
    },
  },
];

function AdminDashboard() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.data);
  React.useEffect(() => {
    dispatch(fetchProduct());
  }, []);
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
          p: { xs: 2, md: 5, lg: 5 },
          mt: 2,
          mb: 2,
          backgroundColor: "#c2e3fc",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Grid container display="flex">
            <Grid item xs={6}>
              <Typography variant="h5" sx={{ fontSize: { xs: 14 } }}>
                Manage Products
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="flex-end">
              <AddEditProduct />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <DataGrid
            rows={product}
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
export default AdminDashboard;
