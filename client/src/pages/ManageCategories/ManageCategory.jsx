import "./ManageCategory.css";
import CategoryList from "../../Components/CategoryList/CategoryList.jsx";
import CategoryForm from "../../Components/CategoryForm/CategoryForm.jsx";

const ManageCategory = () => {
  return (
    <div className="category-container text-light">
        <div className="left-column">
         <CategoryForm/>
        </div>
        <div className="right-column">
          <CategoryList/>
        </div>
    </div>

  )
}
export default ManageCategory;