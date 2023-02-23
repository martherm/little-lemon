import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the Occasion label', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText("Occasion", {selector: 'label[for="occasion"]'});
    expect(labelElement).toBeInTheDocument();
})

