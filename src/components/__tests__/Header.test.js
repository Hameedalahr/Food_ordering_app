import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Header from "../Header"
import appStore from "../../utils/appStore"
it("Testing the login button in Header",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const button=screen.getByRole("button",{name:"Login"})
    expect(button).toBeInTheDocument()
})
it("Testing the logout button in Header",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const button=screen.getByRole("button",{name:"Login"})
    fireEvent.click(button)
    const logoutbutton=screen.getByRole("button",{name:"Logout"})
    expect(logoutbutton).toBeInTheDocument()
})