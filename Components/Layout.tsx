import React from "react";
import Header from "../Components/header/index";
import Sidebar from "../Components/sidebar/index";
import style from "./layout.module.scss"

export default function Layout({children}) {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.inner}>
        <Header />
        <div className={style.info}>
          {children}
        </div>
      </div>
    </div>
  );
}
