import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HowItWorks from '../how-it-works/HowItWorks';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string; width: number; height: number }) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('HowItWorks Component', () => {
  it('renders the component with all elements', () => {
    render(<HowItWorks />);
    
    // Check for main heading
    expect(screen.getByText('HOW IT WORKS')).toBeInTheDocument();
    
    // Check for process description
    expect(screen.getByText(/Our streamlined process makes creating professional content/i)).toBeInTheDocument();
    
    // Check for step titles
    expect(screen.getByText('You Talk')).toBeInTheDocument();
    expect(screen.getByText('We Edit')).toBeInTheDocument();
    expect(screen.getByText('You Post')).toBeInTheDocument();
    
    // Check for step descriptions
    expect(screen.getByText(/We guide you through a simple interview/i)).toBeInTheDocument();
    expect(screen.getByText(/Our team transforms your interview/i)).toBeInTheDocument();
    expect(screen.getByText(/Receive ready-to-publish content/i)).toBeInTheDocument();
    
    // Check for CTA button
    expect(screen.getByText('START THE PROCESS')).toBeInTheDocument();
    
    // Check for services link
    expect(screen.getByText('OUR SERVICES')).toBeInTheDocument();
    
    // Check for footer text
    expect(screen.getByText(/Tailored content creation packages/i)).toBeInTheDocument();
  });
}); 
