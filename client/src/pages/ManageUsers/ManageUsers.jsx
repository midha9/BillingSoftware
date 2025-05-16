import "./ManageUsers.css";
import UserForm from "../../Components/UserForm/UserForm.jsx";
import UserList from "../../Components/UserList/UserList.jsx";

const ManageUsers = () => {
  return  <div className="users-container text-light">
    <div className="left-column">
      <UserForm/>
    </div>
    <div className="right-column">
      <UserList/>
    </div>
  </div>
};

export default ManageUsers;