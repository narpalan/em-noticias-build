import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

function CardLerMais({ img, alt, stamp, content }) {
  return (
    <Card sx={{ width: 235, mr:3, mt: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="132"
          image={ img }
          alt={ alt }
        />
        <CardContent>
          <Typography gutterBottom variant="caption" component="div">
            { stamp }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { content }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardLerMais;
