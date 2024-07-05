import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('should submit the form', () => {
    const mockSubmitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={['17:00', '17:30', '18:00']}
        dispatch={jest.fn()}
        submitForm={mockSubmitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2024-07-05' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.click(screen.getByText(/reserve/i));

    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
