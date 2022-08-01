import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteIconBorder from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";

export const Post = () => {
  return (
    <Card sx={{margin:"8px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="Receta">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Configuracion">
            <MoreVertIcon />
          </IconButton>
        }
        title="Entrada Biblioteca"
        subheader="Febrero 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="http://biblioteca.unadeca.ac.cr/wp-content/uploads/2022/02/IMG_20220215_094035_285-rotated.jpg"
        alt="Entrtada Biblioteca"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora
          omnis repudiandae laborum iure earum voluptatibus quasi velit vero
          architecto itaque blanditiis, aliquam, enim unde exercitationem porro
          ad numquam aut?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Añadir a Favoritos">
          <Checkbox
            icon={<FavoriteIconBorder />}
            checkedIcon={<FavoriteIcon sx={{ color: "pink" }} />}
          />
        </IconButton>
        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
