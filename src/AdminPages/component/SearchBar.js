import plus from "../img/plus (1).png";
import '../css/SearchBar.css'
const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <form>
                <label>
                    <input className="admin-input-search-keyword"
                        type="text" name="name" placeholder="Search keywords" />
                </label>
            </form>
            <button className="admin-add-create-ans-button">
                <img src={plus} style={{ width: "35px", height: "35px" }}></img>
            </button>
        </div>
    )
}

export default SearchBar