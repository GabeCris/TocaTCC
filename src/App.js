import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar/Calendar";
import Scheduling from "./pages/Scheduling/Scheduling";
import Notification from "./pages/Notification/Notification";
import Settings from "./pages/Settings/Settings";
import Sport from "./pages/Steps/Step2/Sport";
import Type from "./pages/Steps/Step1/Type";
import Amount from "./pages/Steps/Step3/Amount";
import Description from "./pages/Steps/Step5/Description";
import Details from "./pages/Details/Details";
import DateTime from "./pages/Steps/Step4/DateTime";
import Finish from "./pages/Steps/Step6/Finish";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/scheduling" element={<Scheduling />}>
                        <Route path="step1" element={<Type />} />
                        <Route path="step2" element={<Sport />} />
                        <Route path="step3" element={<Amount />} />
                        <Route path="step4" element={<DateTime />} />
                        <Route path="step5" element={<Description />} />
                        <Route path="step6" element={<Finish />} />
                    </Route>
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
