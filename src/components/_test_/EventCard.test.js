import React from 'react';
import { render, screen } from '@testing-library/react';
import EventCard from '../EventCard';

test('renders event card with correct data', () => {
  // Render the EventCard component with mock data
  render(
    <EventCard
      flyer="/path/to/flyer.jpg"
      time1="10:00 AM"
      date1="2024-05-11"
      location1="Some Location"
      etitle="Event Title"
    />
  );

  // Assert that the component renders with correct data
  expect(screen.getByAltText('Event Flyer')).toBeInTheDocument();
  expect(screen.getByText('10:00 AM')).toBeInTheDocument();
  expect(screen.getByText('2024-05-11')).toBeInTheDocument();
  expect(screen.getByText('Some Location')).toBeInTheDocument();
  expect(screen.getByText('Event Title')).toBeInTheDocument();
});
