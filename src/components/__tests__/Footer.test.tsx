import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../footer/Footer';

describe('Footer Component', () => {
  test('renders the footer with correct structure', () => {
    render(<Footer />);
    
    // Test the company info section
    expect(screen.getByText('NETWORK')).toBeInTheDocument();
    expect(screen.getByText('NARRATIVES')).toBeInTheDocument();
    expect(screen.getByText(/Redefining Digital Storytelling/i)).toBeInTheDocument();
    
    // Test the Quick Links section
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    
    // Test the Services section
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Digital Strategy')).toBeInTheDocument();
    expect(screen.getByText('Content Creation')).toBeInTheDocument();
    expect(screen.getByText('Brand Storytelling')).toBeInTheDocument();
    expect(screen.getByText('Social Media')).toBeInTheDocument();
    
    // Test the Contact section
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText(/hello@networkednarratives.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+1 \(555\) 123-4567/i)).toBeInTheDocument();
    expect(screen.getByText(/San Francisco, CA/i)).toBeInTheDocument();
    
    // Test the copyright section
    expect(screen.getByText(/© 2023 Networked Narratives. All rights reserved./i)).toBeInTheDocument();
  });
  
  test('renders all social links', () => {
    render(<Footer />);
    
    // Get all social links by their aria labels
    const twitterLink = screen.getByLabelText('Twitter');
    const instagramLink = screen.getByLabelText('Instagram');
    const linkedinLink = screen.getByLabelText('LinkedIn');
    const youtubeLink = screen.getByLabelText('YouTube');
    
    // Check that all social links are in the document
    expect(twitterLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(youtubeLink).toBeInTheDocument();
    
    // Verify they are anchor elements
    expect(twitterLink.tagName).toBe('A');
    expect(instagramLink.tagName).toBe('A');
    expect(linkedinLink.tagName).toBe('A');
    expect(youtubeLink.tagName).toBe('A');
  });
}); 
