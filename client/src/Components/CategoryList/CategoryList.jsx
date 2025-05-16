import { AppContext } from "../../context/AppContext.jsx";
import "./CategoryList.css";
import {useContext, useState} from "react";
import {deleteCategory} from "../../Service/CategoryService.js";
import toast from "react-hot-toast";

const CategoryList = () => {
    const { categories, setCategories} = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filterCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const deleteByCategoryId = async (categoryId) => {
        try {
            const response = await deleteCategory(categoryId);
            if(response.status === 204) {
                const updatedCategories = categories.filter(category => category.categoryId !== categoryId);
                setCategories(updatedCategories);
                // display  toast message
                toast.success("Category deleted")
            } else {
                // display error  toast message
                toast.error("Unable to delete the category.");
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            console.error("Unable to delete the category: ");
        }
    }

    return (
        <div className="category-list-container" style={{ height: "100vh", overflow: "auto", overflowX: "hidden" }}>

            <div className="row pe-2">
                <div className="input-group mb-3">
                    <input type="text"
                           name="keyword"
                           id="keyword"
                           placeholder="Search by keyword"
                           className="form-control"
                            onChange={(e) => setSearchTerm(e.target.value)}
                           value={searchTerm}
                    />
                    <span className="input-group-text bg-warning">
                        <i className="bi bi-search"></i>
                    </span>

                </div>
            </div>
            <div className="row g-3 pe-2">
                {filterCategories.map((category, index) => (
                    <div key={index} className="col-12">
                        <div className="card p-3 bg-black" style={{ backgroundColor: category.bgcolor }}>
                            <div className="d-flex align-items-center">
                                <div style={{ marginRight: "15px" }}>
                                    <img src={category.imgUrl} alt={category.name} className="category-image" />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mb-1 text-white">{category.name}</h5>
                                    <p className="mb-0 text-white">{category.items}</p>
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-sm"
                                    onClick={() => deleteByCategoryId(category.categoryId)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;