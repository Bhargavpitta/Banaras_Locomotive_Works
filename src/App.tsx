import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BriefHistory from "./pages/About BLW/BriefHistory";
import OrganizationStrength from "./pages/About BLW/OrganizationStrength"; // <-- import the new page
import AboutLayout from "./layouts/AboutLayout";

const App = () => (
  <BrowserRouter>
    <Routes>

      {/* Home route */}
      <Route path="/" element={<Home />} />

      {/* About routes */}
      <Route path="/about" element={<AboutLayout />}>
        <Route path="brief-history" element={<BriefHistory />} />
        <Route path="organization-strength" element={<OrganizationStrength />} /> {/* <-- new route */}
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

export default App;