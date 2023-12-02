import { MdOutlineSearch } from "react-icons/md";
import style from "./searchpu.module.scss";
import Link from "next/link";
const Searchpu = () => {
  
  return (
    <>
      <div className={style.container}>
        <div className={style.searchbox}>
          <MdOutlineSearch size={18} />
          <input
            type="text"
            name="search"
            placeholder="Enter name of user..."
          />
        </div>
        <Link className={style.link} href={'/dashboard/products/add'}>Add</Link>
      </div>
    </>
  );
};

export default Searchpu;
