import { usePathname } from 'next/navigation'
import React from 'react'
import style from "./header.module.scss"
import { MdOutlineSearch } from "react-icons/md";
import { MdCircleNotifications,MdOutlinePerson   } from "react-icons/md";
function Header() {
  const path =usePathname().split("/").pop()
  return (
    <>
    <div className={style.header}>
      <div className={style.path}>{path}</div>
        <div className={style.right}>
          <div className={style.searchbox}>
          <MdOutlineSearch size={18} color="white"/>
            <input type="text" />
          </div>
          <a href="#">
             <MdCircleNotifications size={24} color="white"/>
          </a>
         <a href="#">
         <MdOutlinePerson  size={24} color="white"/>
         </a>
         

        </div>
    </div>
    </>
  )
}

export default Header