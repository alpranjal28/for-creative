import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Heart } from "lucide-react";

interface CardProps {
  data: {
    message?: string;
    url?: string;
  };
}

const description = [
  "Max",
  "Bella",
  "Rocky",
  "Daisy",
  "Whiskers",
  "Coco",
  "Charlie",
  "Lola",
  "Molly",
  "Toby",
  "Lucky",
  "Buddy",
  "Cuddles",
];
function randomName() {
  return description[Math.floor(Math.random() * description.length)];
}
export default function CardMui({ data }: CardProps) {
  return (
    <Card
      sx={{
        width: 300,
        height: 350,
        margin: 4,
        borderInlineColor: "black",
        borderInlineEndStyle: "solid",
      }}
    >
      <CardMedia
        sx={{ height: 280 }}
        component="img"
        height="100"
        image={data.message || data.url}
        alt="Pets"
      />
      <div className="grid grid-cols-2 flex-row items-center justify-center">
        <CardActions>
          <Button className="">
            <Heart />
          </Button>
        </CardActions>
        <CardContent className="">
          <Typography
            gutterBottom
            variant="h5"
            component="feTile"
            className="!text-3xl"
          >
            {randomName()}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
