import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// About BLW pages
import BriefHistory from "./pages/About BLW/BriefHistory";
import OrganizationStrength from "./pages/About BLW/OrganizationStrength";
import BlwHeritage from "./pages/About BLW/BlwHeritage";
import Quality from "./pages/About BLW/Quality";
import Milestones from "./pages/About BLW/milestones";
import QualityPolicy from "./pages/About BLW/QualityPolicy";
import PortalPolicies from "./pages/About BLW/PortalPolicies";
import Department from "./pages/About BLW/Department";
import Design from "./pages/About BLW/design"; // small d in filename

// DEPARTMETS
import Bills from "./pages/DEPARTMENTS/bills"

// Layout
import AboutLayout from "./layouts/AboutLayout";
import DepartmentLayout from "./layouts/Departmentlayout";

const App = () => (
  <BrowserRouter>
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About BLW */}
      <Route path="/about" element={<AboutLayout />}>
        <Route path="brief-history" element={<BriefHistory />} />
        <Route path="organization-strength" element={<OrganizationStrength />} />
        <Route path="blw-heritage" element={<BlwHeritage />} />
        <Route path="quality" element={<Quality />} />
        <Route path="milestones" element={<Milestones />} />
        <Route path="quality" element={<QualityPolicy />} />
        <Route path="portal" element={<PortalPolicies />} />
        <Route path="Department" element={<Department />} />
        <Route path="design" element={<Design />} />
         

      </Route>
      {/* Departments */}
<Route path="/departments" element={< DepartmentLayout/>}>

  <Route path="accounts/bills-format" element={<Bills />} />
</Route>
     

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

export default App;