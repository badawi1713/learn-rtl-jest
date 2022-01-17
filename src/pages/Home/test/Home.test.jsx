import { render, screen } from "@testing-library/react";
import Home from "..";

test('displays image for each scoop option from server', async () => {
    render(<Home />)

    // find images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
    const toppingImages = await screen.findAllByRole('img', { name: /topping$/i })

    expect(scoopImages).toHaveLength(16)
    expect(toppingImages).toHaveLength(4)

    // confirm all text of images
    const scoopAltText = scoopImages.map(element => element.alt)
    const toppingAltText = toppingImages.map(element => element.alt)

    // object/array use toEqual()
    expect(scoopAltText).toEqual(
        ["Matcha scoop", "Pistachio scoop", "Mint chip scoop", "Taro scoop", "Blueberry scoop", "Bubblegum scoop", "Strawberry scoop", "Raspberry scoop", "Watermelon scoop", "Blood Orange scoop", "Banana scoop", "Vanilla scoop", "Chocolate scoop", "Coffee scoop", "Rocky Road scoop", "Salted caramel scoop"]
    )
    expect(toppingAltText).toEqual(
        [
            "Colorful Sprinkles topping",
            "Chocolate Chips topping",
            "Gummi bears topping",
            "Fresh Red Cherries topping",
        ]
    )
})