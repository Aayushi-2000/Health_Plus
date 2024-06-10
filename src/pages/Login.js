import React from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      "Invalid email"
    ),
  password: yup.string().required("PassWord is required"),
});
const LogInPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const OnSubmit = (data) => {
    console.log("data", data);
    reset({ email: "", password: "" });
  };
  return (
    <Box className="background">
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: "center",
        }}
      >
        <Card>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <CardContent sx={{ p: 5 }}>
              <Box
                display="Grid"
                justifyContent="center"
                sx={{ pr: 5, pl: 5, pb: 5 }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  fontFamily="serif"
                  gutterBottom
                >
                  Log in to Health Plus
                </Typography>
                <Box display="flex" justifyContent="center">
                  <AdbIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <Grid
                  container
                  rowSpacing={3}
                  display="inline-block"
                  justifyContent="center"
                >
                  <Grid item>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, ...rest } }) => (
                        <TextField
                          label="Email"
                          {...rest}
                          value={value}
                          fullWidth
                          error={!!errors?.email?.message}
                          helperText={errors?.email?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item>
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, ...rest } }) => (
                        <TextField
                          {...rest}
                          value={value}
                          error={!!errors?.password?.message}
                          helperText={errors?.password?.message}
                          label="Password"
                          fullWidth
                          type={showPassword ? "text" : "password"}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <CardActions sx={{ pb: 5 }}>
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="center"
              >
                <Grid>
                  <Button variant="contained" size="medium" type="submit">
                    Log In
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </form>
        </Card>
      </Box>
    </Box>
  );
};

export default LogInPage;
