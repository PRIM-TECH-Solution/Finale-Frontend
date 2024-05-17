// src/components/EventCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <Card sx={{ minHeight: '280px', width: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={event.imageUrl}
        alt={event.title}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography variant="h6" component="div">
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <LocationOnRoundedIcon sx={{ mr: 1 }} />
          {event.location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
