import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders the footer correctly', () => {
    const { getByText } = render(<Footer />);
    
    // Check if important text content is rendered
    expect(getByText('Streamlined ticket booking for a world of experiences. From concerts to sports, our platform ensures hassle-free access. Your journey to unforgettable moments begins with us. Discover, book, and enjoy!')).toBeInTheDocument();
    expect(getByText('Copyright 2024 © EasyTicket.lk All Rights Reserved.')).toBeInTheDocument();
    expect(getByText('Privacy Policy')).toBeInTheDocument();
    expect(getByText('Terms & Conditions')).toBeInTheDocument();
    expect(getByText('Get in Touch')).toBeInTheDocument();
    expect(getByText('Follow us On')).toBeInTheDocument();
    expect(getByText('Subscribe')).toBeInTheDocument();
    expect(getByText('Join a Newsletter')).toBeInTheDocument();


  });

  // Add more tests as needed to cover different scenarios and functionalities
});
