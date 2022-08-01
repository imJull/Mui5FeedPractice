import { Box, List, ListItemIcon, ListItem, ListItemButton, ListItemText, Switch } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DescriptionIcon from '@mui/icons-material/Description';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import React from "react";

const Sidebar = ({mode, setMode}) => {
  return (
    <Box
      flex={1}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Página Principal" />
            </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <DescriptionIcon/>
              </ListItemIcon>
              <ListItemText primary="Paginas" />
            </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Grupos" />
            </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <StoreIcon/>
              </ListItemIcon>
              <ListItemText primary="Tienda" />
            </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <EmojiPeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="Amigos" />
            </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Configuración" />
            </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <DarkModeIcon/>
              </ListItemIcon>
              <Switch onChange={e => setMode(mode ==="light" ? "dark" : "light")}/>
            </ListItemButton>
            </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
