import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio.jsx";
import Property from "./pages/Property.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/property" element={<Property />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    );
}

export default App;
