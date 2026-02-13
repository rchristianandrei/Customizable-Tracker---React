import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ManageTracker } from "@/pages/manage-tracker/ManageTracker";
import { EditTrackerProvider } from "@/contexts/EditTrackerContext";
import { EditTracker } from "@/pages/manage-tracker/edit-tracker/EditTracker";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { SubmitTracker } from "@/pages/submit-tracker/submit-tracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="submit-tracker" element={<SubmitTracker />}></Route>
        <Route path="manage-tracker">
          <Route path="" element={<ManageTracker />}></Route>
          <Route
            path=":id"
            element={
              <EditTrackerProvider>
                <EditTracker />
              </EditTrackerProvider>
            }
          ></Route>
        </Route>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
