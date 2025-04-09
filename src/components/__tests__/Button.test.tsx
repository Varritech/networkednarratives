import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../ui/Button';

describe('Button Component', () => {
  it('renders correctly as a button with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-[#00e5ff]');
  });

  it('renders correctly as a link', () => {
    render(<Button as="link" href="/test">Click me</Button>);
    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies correct styles for outline variant', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole('button', { name: /outline button/i });
    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('text-[#00e5ff]');
    expect(button).toHaveClass('border-[#00e5ff]');
  });

  it('applies correct styles for secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('border-white');
  });

  it('applies correct size classes', () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole('button', { name: /large button/i });
    expect(button).toHaveClass('px-10');
    expect(button).toHaveClass('py-4');
    expect(button).toHaveClass('text-xl');
  });

  it('handles onClick events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('merges custom classNames with default ones', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-[#00e5ff]');
  });
}); 
