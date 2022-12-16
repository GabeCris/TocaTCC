import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar/Calendar";
import Scheduling from "./pages/Scheduling/Scheduling";
import Notification from "./pages/Notification/Notification";
import Settings from "./pages/Settings/Settings";
import Sport from "./pages/StepsCourt/Step2/Sport";
import Type from "./pages/StepsCourt/Step1/Type";
import Amount from "./pages/StepsCourt/Step3/Amount";
import Description from "./pages/StepsCourt/Step5/Description";
import Details from "./pages/Details/Details";
import DateTime from "./pages/StepsCourt/Step4/DateTime";
import Finish from "./pages/StepsCourt/Step6/Finish";

import Material from "./pages/StepsMaterial/Step2/Material";
import AmountMaterial from "./pages/StepsMaterial/Step3/AmountMaterial";
import DateTimeMaterial from "./pages/StepsMaterial/Step4/DateTimeMaterial";
import DescriptionMaterial from "./pages/StepsMaterial/Step5/DescriptionMaterial";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/scheduling" element={<Scheduling />}>
                        <Route path="step1" element={<Type />} />
                        <Route path="step6" element={<Finish />} />
                        <Route path="court/step2" element={<Sport />} />
                        <Route path="court/step3" element={<Amount />} />
                        <Route path="court/step4" element={<DateTime />} />
                        <Route path="court/step5" element={<Description />} />
                        <Route path="material/step2" element={<Material />} />
                        <Route
                            path="material/step3"
                            element={<AmountMaterial />}
                        />
                        <Route
                            path="material/step4"
                            element={<DateTimeMaterial />}
                        />
                        <Route
                            path="material/step5"
                            element={<DescriptionMaterial />}
                        />
                    </Route>
                    <Route path="/notification" element={<Notification />} />

                    <Route
                        path="/settings"
                        element={
                            <PrivateRoute>
                                <Settings />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
