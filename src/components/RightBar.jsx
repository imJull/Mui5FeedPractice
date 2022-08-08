import { Avatar, Box, Typography, AvatarGroup, ImageList, ImageListItem, Divider, ListItemAvatar, ListItemText, List, ListItem, styled } from "@mui/material";
import React from "react";

const RightBar = () => {

  const styledRightBard = styled(List)({
    overflow: "scroll"
  })
  return (
    <Box  
      flex={2} 
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      >
      
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>Usuarios Activos</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Fotos Recientes</Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img
            src="http://biblioteca.unadeca.ac.cr/wp-content/uploads/2022/06/Sembrando-arboles.jpg"
            alt="Siembra Arbles"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="http://biblioteca.unadeca.ac.cr/wp-content/uploads/2022/02/IMG-20220207-WA0017.jpg"
            alt="Inducción"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="http://biblioteca.unadeca.ac.cr/wp-content/uploads/2020/10/RetiroEduc2.jpg"
            alt="Retiro"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="http://biblioteca.unadeca.ac.cr/wp-content/uploads/2022/03/DSC02129-scaled.jpg"
            alt="Limpiando"
          />
        </ImageListItem>
      </ImageList>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Conversaciones Recientes</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vemos pelicula el viernes?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Jorhany
              </Typography>
              {" — Seria bueno que vieramos una pelicula el viernes…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Mariangely" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Lectura devocional"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                para Jarod, Fonsi, Rebeca
              </Typography>
              {" — Me gustaria tener la lectura todas las mañanas…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Fonsi Medina" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Durmamos"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Fonsi Medina
              </Typography>
              {' — Deberiamos sacar tiempo para domir siempre despues de culto :/'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default RightBar;
