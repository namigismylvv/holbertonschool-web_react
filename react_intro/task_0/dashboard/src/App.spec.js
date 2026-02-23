import {render,screen} from "@testing-library/react"
import App from "./App"

test('renders h1 with School dashboard text', () => {
  render(<App />);
  
  const heading = screen.getByRole('heading',{
    name: /school dashboard/i
  });

  expect(heading).toBeInTheDocument();
});
test("renders the text within two p elements in the previous task",()=>{
  render(<App/>);
  const descs = screen.getByText(/login to access the full dashboard/i,/holberton school/i)
  expect(descs).toBeInTheDocument()
})
test("renders the  image ",()=>{
  render(<App/>)
  const image = screen.getByAltText(/holberton logo/i)
  expect(image).toBeInTheDocument()
})
