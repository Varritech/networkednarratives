import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GetStarted from '../contact/GetStarted';

// Mock console.log
const originalConsoleLog = console.log;
console.log = jest.fn();

// Mock setTimeout
jest.useFakeTimers();

describe('GetStarted Component', () => {
  beforeEach(() => {
    (console.log as jest.Mock).mockClear();
  });

  afterAll(() => {
    console.log = originalConsoleLog;
    jest.useRealTimers();
  });

  it('renders the component with form and contact information', () => {
    render(<GetStarted />);
    
    // Check for heading
    expect(screen.getByText('READY TO START?')).toBeInTheDocument();
    
    // Check for form fields
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Company (Optional)')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    
    // Check for social links
    expect(screen.getAllByRole('link')).toHaveLength(3);
    
    // Check for expectations section
    expect(screen.getByText('What to expect:')).toBeInTheDocument();
  });

  it('allows filling out and submitting the form', async () => {
    render(<GetStarted />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Company (Optional)'), { target: { value: 'Acme Inc' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'I would like to learn more about your services.' } });
    
    // Submit the form
    fireEvent.click(screen.getByText('Send Message'));
    
    // Check if console.log was called with the form data
    expect(console.log).toHaveBeenCalledWith('Form data submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Inc',
      message: 'I would like to learn more about your services.'
    });
    
    // Check for thank you message
    expect(screen.getByText('Thank you!')).toBeInTheDocument();
    
    // Fast-forward timers
    jest.advanceTimersByTime(3000);
    
    // After 3 seconds, form should reset
    await waitFor(() => {
      expect(screen.getByLabelText('Full Name')).toHaveValue('');
      expect(screen.getByLabelText('Email Address')).toHaveValue('');
      expect(screen.getByLabelText('Company (Optional)')).toHaveValue('');
      expect(screen.getByLabelText('Message')).toHaveValue('');
    });
  });
}); 
