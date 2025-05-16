import Menubar from "./Components/Menubar/Menubar.jsx";
import {Route, Routes} from "react-router-dom";
import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
import ManageCategory from "./pages/ManageCategories/ManageCategory.jsx";
import Dashboard from "./pages/DashBoard/Dashboard.jsx";
import ManageItems from "./pages/ManageItems/ManageItems.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {
    return (
        <div>
        <Menubar/>
            <Toaster/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/category" element={<ManageCategory/>} />
                <Route path="/users" element={<ManageUsers/>} />
                <Route path="/items" element={<ManageItems/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/" element={<Dashboard/>} />
            </Routes>
        </div>
    )
}

export default App;