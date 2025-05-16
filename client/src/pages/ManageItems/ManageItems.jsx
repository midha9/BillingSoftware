import "./ManageItems.css";
import ItemForm from "../../Components/ItemForm/ItemForm.jsx";
import ItemList from "../../Components/ItemList/ItemList.jsx";

const ManageItems = () => {
    return  <div className="items-container text-light">
        <div className="left-column">
           <ItemForm/>
        </div>
        <div className="right-column">
            <ItemList/>
        </div>
    </div>
}
export default ManageItems;