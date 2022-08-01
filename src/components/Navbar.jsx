import { styled } from '@mui/material/styles';
import { AutoStories, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Biblio Style
        </Typography>
        <AutoStories sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Buscar..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://cdn.shopify.com/s/files/1/0249/5892/6941/products/Fendi_Monster_eyes_stciker_iron_on_630x.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
        <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://cdn.shopify.com/s/files/1/0249/5892/6941/products/Fendi_Monster_eyes_stciker_iron_on_630x.jpg"
          />
          <Typography variant="span">Lil Jay</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Perfil</MenuItem>
        <MenuItem>Cuenta</MenuItem>
        <MenuItem>Cerrar Sesión</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
