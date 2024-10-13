import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import TVIcon from "@mui/icons-material/Tv";
import { useNavigate } from "react-router-dom";
import "./MainNav.css";
export default function MainNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (value == 0) {
      navigate("/");
    } else if (value == 1) navigate("/Movies");
    else if (value == 2) navigate("/TVSeries");
    else if (value == 3) navigate("/Search");
  }, [value, navigate]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 100,
      }}
    >
      <BottomNavigation
        sx={{
          backgroundColor: "#2d313a",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="bottomNavigation"
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigation"
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigation"
          label="TV Series"
          icon={<TVIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigation"
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
