import * as React from "react";
import { Box } from '@mui/material';
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import LocalHotelRoundedIcon from "@mui/icons-material/LocalHotelRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Logout from "@mui/icons-material/Logout";
import CssBaseline from "@mui/material/CssBaseline";

export const UserMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
          <Link to="/account" className="flex items-center">
        <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <div className="pt-0"><PersonRoundedIcon fontSize="small" /></div>
            </ListItemIcon>{" "}
            <div className="pr-1">My Account</div>
        </MenuItem>
          </Link>
          <Link to="/bookings">
        <MenuItem onClick={handleClose}>
            <ListItemIcon>
            <div className="pt-1"><LocalHotelRoundedIcon fontSize="small" /></div>
            </ListItemIcon>
            My Bookings
        </MenuItem>
          </Link>
        <Divider />

        <MenuItem onClick={props.logout}>
          <ListItemIcon>
          <div className="pt-0"><Logout fontSize="small" /></div>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
