import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './Components/BookingForm';

test('renders the BookingForm heading', () => {
  render(<BookingForm submitForm={() => { }} />);
  const headingElement = screen.getByText(/Book Now/i);
  expect(headingElement).toBeInTheDocument();
});

test('submits the form with correct data', () => {
  const mockSubmitForm = jest.fn();
  render(<BookingForm submitForm={mockSubmitForm} />);

  fireEvent.change(screen.getByLabelText(/Choose Date:/), { target: { value: '2025-01-10' } });
  fireEvent.change(screen.getByLabelText(/Choose Time:/), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/Number of Guests:/), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/Occasion:/), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByText(/Make Your Reservation/i));

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: '2025-01-10',
    times: '18:00',
    guests: '4',
    occasion: 'Birthday'
  });
});