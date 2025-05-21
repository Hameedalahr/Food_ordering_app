import { TestEnvironment } from "jest-environment-jsdom";
import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("Total Testing of one Component",()=>{
    it("Testing the input boxes in the contact component",()=>{
        render(<Contact/>);
        const inputBoxes=screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2);
    }),

    it("Testing for the submit button in Contact Component",()=>{
        render(<Contact/>)
        const button=screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })
})
