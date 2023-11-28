import { MdOutlineSearch } from "react-icons/md";
import style from "./searchpu.module.scss"
const Searchpu = () => {
    return ( <>
    <div className={style.container}>
        <div className={style.searchbox}>
            <MdOutlineSearch/>
            <input type="text" name="search" placeholder="Enter name of user..." />
        </div>
        <div className="addbutton">
            <button className={style.button}>Add</button>
        </div>
    </div>
    
    
    
    
    </> );
}
 
export default Searchpu;