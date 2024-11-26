import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PaymentTest from "./component/Payment";
import PaymentResult from "./component/PaymentResult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<PaymentTest />} />
          <Route path="/payment/result" element={<PaymentResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
