import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../navigation/Navbar';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string; width: number; height: number }) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock the next/link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...rest}>{children}</a>
  ),
}));

// Mock useEffect and window events
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
});

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
});

describe('Navbar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the navbar with logo and navigation links', () => {
    render(<Navbar />);
    
    // Check for logo
    expect(screen.getByRole('img', { name: 'Networked Narratives Logo' })).toBeInTheDocument();
    
    // Check for navigation links
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar />);
    
    // Mobile menu should be hidden initially
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
    
    // Click the menu button
    fireEvent.click(menuButton);
    
    // Close button should be visible now
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('adds scroll event listener on mount', () => {
    render(<Navbar />);
    expect(mockAddEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('removes scroll event listener on unmount', () => {
    const { unmount } = render(<Navbar />);
    unmount();
    expect(mockRemoveEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
}); 
