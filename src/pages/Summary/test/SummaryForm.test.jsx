import { screen, render, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test('initial conditions', () => {
    render(<SummaryForm />)

    const checkbox = screen.getByRole('checkbox', { name: /I agree to/i })
    const confirmButton = screen.getByRole('button', { name: /confirm order/i })

    expect(checkbox).not.toBeChecked()
    expect(confirmButton).toBeDisabled()
})

test('Checkbox disables button on first click and enableds on second click', () => {
    render(<SummaryForm />)

    const checkbox = screen.getByRole('checkbox', { name: /I agree to/i })
    const confirmButton = screen.getByRole('button', { name: /confirm order/i })

    // checking checkbox enables confirmButton
    fireEvent.click(checkbox)
    expect(confirmButton).toBeEnabled()

    // checking checkbox again and it will disables confirmButton
    fireEvent.click(checkbox)
    expect(confirmButton).toBeDisabled()

})