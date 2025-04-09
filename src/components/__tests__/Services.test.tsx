import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Services from '../services/Services';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string; fill?: boolean }) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Services Component', () => {
  it('renders the component with all elements', () => {
    render(<Services />);
    
    // Check for main heading
    expect(screen.getByText('OUR SERVICES')).toBeInTheDocument();
    
    // Check for description
    expect(screen.getByText(/Helping you create professional, engaging content/i)).toBeInTheDocument();
    
    // Check for service titles
    expect(screen.getByText('1:1 Podcast Coaching')).toBeInTheDocument();
    expect(screen.getByText('Short-form Video Creation')).toBeInTheDocument();
    expect(screen.getByText('Brand Voice Development')).toBeInTheDocument();
    
    // Check for service descriptions
    expect(screen.getByText(/Launch your podcast with expert guidance/i)).toBeInTheDocument();
    expect(screen.getByText(/Turn your expertise into engaging social media content/i)).toBeInTheDocument();
    expect(screen.getByText(/Craft a consistent and compelling brand narrative/i)).toBeInTheDocument();
    
    // Check for feature items (sample)
    expect(screen.getByText('Equipment selection guidance')).toBeInTheDocument();
    expect(screen.getByText('Professional editing')).toBeInTheDocument();
    expect(screen.getByText('Tone and voice guidelines')).toBeInTheDocument();
    
    // Check for images
    expect(screen.getByRole('img', { name: '1:1 Podcast Coaching' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Short-form Video Creation' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Brand Voice Development' })).toBeInTheDocument();
  });
}); 
