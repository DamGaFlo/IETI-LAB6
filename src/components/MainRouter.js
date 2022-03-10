import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login.jsx";
import HomePage from "../Pages/HomePage.js";
import NotFoundPage from "../Pages/NotFoundPage.js";

function MainRouter() {
     return (
          <>
               <Router>
                    <Routes>
                         <Route path="/" element={<Login />} />
                         <Route path="/home" element={<HomePage />} />
                         <Route path="*" element={<NotFoundPage />} />
                    </Routes>
               </Router>
          </>
     );
}

export default MainRouter;
