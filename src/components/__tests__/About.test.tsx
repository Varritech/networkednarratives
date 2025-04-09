import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { About } from '../about/About';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { 
    src: string; 
    alt: string; 
    width?: number; 
    height?: number;
    priority?: boolean;
    quality?: number;
  }) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}));

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('renders the section with correct id', () => {
    const aboutSection = document.getElementById('about');
    expect(aboutSection).toBeInTheDocument();
  });

  test('displays the main title correctly', () => {
    const title = screen.getByText('ABOUT JEREMY');
    expect(title).toBeInTheDocument();
  });

  test('displays the subtitle correctly', () => {
    const subtitle = screen.getByText('Marketing Professional & Podcast Host');
    expect(subtitle).toBeInTheDocument();
  });

  test('displays Jeremy\'s background information', () => {
    const paragraph1 = screen.getByText(/Jeremy Thone is a seasoned marketing professional/i);
    const paragraph2 = screen.getByText(/Jeremy has held pivotal roles/i);
    
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test('displays statistics correctly', () => {
    const yearsExperience = screen.getByText('10+');
    const yearsLabel = screen.getByText('Years in Media & Marketing');
    const storiesTold = screen.getByText('100+');
    const storiesLabel = screen.getByText('Stories Told');
    
    expect(yearsExperience).toBeInTheDocument();
    expect(yearsLabel).toBeInTheDocument();
    expect(storiesTold).toBeInTheDocument();
    expect(storiesLabel).toBeInTheDocument();
  });

  test('includes Jeremy\'s image with correct attributes', () => {
    const image = screen.getByAltText('Jeremy Thone');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://placehold.co/600x800');
    expect(image).toHaveAttribute('width', '600');
    expect(image).toHaveAttribute('height', '800');
  });

  test('displays Jeremy\'s name in the image label', () => {
    const nameLabel = screen.getByText('JEREMY THONE');
    expect(nameLabel).toBeInTheDocument();
  });
}); 
