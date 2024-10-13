import React from "react";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
function CustomPagination({ setPage, numOfPages = 10 }) {
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          hideNextButton
          hidePrevButton
          count={numOfPages}
          onChange={handlePageChange}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
