import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock functions
const mockSubmit = jest.fn();
const mockDispatcher = jest.fn();

const mockAvailableTimes = ['17:00', '18:00', '19:00'];

describe('BookingForm Component', () => {
  beforeEach(() => {
    render(<BookingForm availableTimes={mockAvailableTimes} availableTimesDispatcher={mockDispatcher} submitForm={mockSubmit} />);
  });

  // 1. Static text render test
  test('renders static text', () => {
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  // 4. Attribute validation test for each input
  test('date input has correct attributes', () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  test('time select shows options', () => {
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toContainHTML('<option>17:00</option>');
  });

  test('guest input has min/max/placeholder', () => {
    const guestInput = screen.getByLabelText(/Number of guests/i);
    expect(guestInput).toHaveAttribute('min', '1');
    expect(guestInput).toHaveAttribute('max', '10');
    expect(guestInput).toHaveAttribute('placeholder', '1');
  });

  test('occasion select has options', () => {
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toContainHTML('<option>Birthday</option>');
    expect(occasionSelect).toContainHTML('<option>Anniversary</option>');
  });

  // 5. Form validity logic
  test('form is valid with correct inputs', () => {
    const guestInput = screen.getByLabelText(/Number of guests/i);
    const submitBtn = screen.getByDisplayValue(/Make Your reservation/i);

    fireEvent.change(guestInput, { target: { value: '5' } });
    expect(submitBtn).not.toBeDisabled(); // All defaults are valid, changing guest confirms
  });

  test('form is invalid with incorrect guests', () => {
    const guestInput = screen.getByLabelText(/Number of guests/i);
    const submitBtn = screen.getByDisplayValue(/Make Your reservation/i);

    fireEvent.change(guestInput, { target: { value: '0' } }); // Invalid
    expect(submitBtn).toBeDisabled();
  });

  test('form submit calls submitForm with valid data', () => {
    const submitBtn = screen.getByDisplayValue(/Make Your reservation/i);
    fireEvent.click(submitBtn);
    expect(mockSubmit).toHaveBeenCalled();
  });
});
