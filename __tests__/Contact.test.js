import Contact from "../src/pages/Contact"
import {fireEvent, render, screen, act} from "@testing-library/react"
import "@testing-library/jest-dom"


// testing only the contact component rendered or not properly
//first test case
test("It should render the Contact component correctly", () => {
  render(
    <Contact />
  )
})

// it should render heading with name tag Contact Us

test("Should render the heading with text Contact Us", () => {

  render(<Contact />)
    //query
     const heading = screen.getByRole("heading", {name: "Contact Us"})
   
    //assert
    expect(heading).toBeInTheDocument()
})


test("Should reder All inputs fields email and name ", () => {
  //render the component
   render(<Contact />)
  
   const allInputEl = screen.getAllByRole("textbox");
   console.log(allInputEl)

   //assert

   expect(allInputEl.length).toBe(2);

})


// writing test using it funtion 
// both same test() or it()


test("Should runder the Submit button with corrct text", () => {
  render(<Contact />);

  const submitBtn = screen.getByRole("button", {name: "Submit"});

  expect(submitBtn).toBeInTheDocument();
})


test("Should name input update value on change", () => {
   
  render(<Contact />)

  const inputNameEl = screen.getByPlaceholderText("Enter Your Name");

  act(() => {
    fireEvent.change(inputNameEl, {target: {value: "Ghazala Shameem"}})
  })
  
  expect(inputNameEl.value).toBe("Ghazala Shameem")

})


