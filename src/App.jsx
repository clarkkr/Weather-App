import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

{
  /* I decided to add routing just as a nice addition to make sure the page is valid*/
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
