import Contact from "../src/pages/Contact"
import {fireEvent, render, screen, act} from "@testing-library/react"
import "@testing-library/jest-dom"

import userEvent from "@testing-library/user-event"


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


test("Should name input update value on change", async () => {
   
  render(<Contact />)

  const inputNameEl = screen.getByPlaceholderText("Enter Your Name");
  await act(async () =>  {
   fireEvent.change(inputNameEl, {target: {value: "Ghazala Shameem"}})
  })
  
  expect(inputNameEl.value).toBe("Ghazala Shameem")

})

test("Should Email input update value on change", async () => {

  // render cotact component in js dom

  render(<Contact />)

  const emailEl = screen.getByPlaceholderText("Enter Your Email");


await act(async () => {
    fireEvent.change(emailEl, {target: {value: "ghazal@gmail.com"}});
})

  

  //expect(emailEl.value).toBeInTheDocument(); // toBeIntheDocument checks html element or svg nor sting

   expect(emailEl.value).toBe("ghazal@gmail.com");

})


//Or even better — use userEvent, which already wraps things in async act:


test("Should render email value on change", async () => {
 
  render(<Contact />);

  const emailEl = screen.getByPlaceholderText("Enter Your Email")

  // this userEvent will come from another package which is @testing-library/user-event
  await userEvent.type(emailEl,  "ghazal343@gmail.com")

  expect(emailEl.value).toBe("ghazal343@gmail.com")
})


test("Form Should have the correct placehoder", () => {

  render(<Contact />)
  
  const nameEl = screen.getByPlaceholderText("Enter Your Name");

  const emailEl = screen.getByPlaceholderText("Enter Your Email")

  expect(nameEl).toBeInTheDocument();

  expect(emailEl).toBeInTheDocument();

})


test("It should have proper label text for each input", () => {
  render(<Contact />)

   const nameLabelInputEl = screen.getByLabelText("Name:");

   const emailLabelInputEl = screen.getByLabelText("Email:")

   expect(nameLabelInputEl).toBeInTheDocument();
   expect(emailLabelInputEl).toBeInTheDocument();


})


test("Email input should have type='text' ", () => {
  render(<Contact />)


  const emailInputWithTypeText = screen.getByRole("textbox", {name: /email/i});

  expect(emailInputWithTypeText).toBeInTheDocument()

})

test("Form Should be present inside DOM", () => {
  render(<Contact />);

  const formEl = screen.getByRole("form", {name: /contact form/i});

 


  expect(formEl).toBeInTheDocument();
})


test("Should not render any extra inputs", () => {
  render(<Contact />);


  const allinputBoxes = screen.getAllByRole("textbox");

  expect(allinputBoxes.length).toBe(2)
})










