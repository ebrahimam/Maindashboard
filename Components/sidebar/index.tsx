import React, { ReactNode } from "react";
import style from "./sidebar.module.scss";
import {
  MdDashboard,
  MdPerson,
  MdOutlineProductionQuantityLimits,
  MdOutlineMoney,
  MdOutlineReport,
  MdDataThresholding,
  MdOutlineBuild,
  MdOutlineDiversity3,
  MdHelp,
} from "react-icons/md";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  interface Item {
    title: string;
    icon: React.ReactNode;
    path:string
  }
  const lists: Item[] = [
    {
      title: "dashboard",
      icon: <MdDashboard  size={22}/>,
      path:"/"
    },
    {
      title: "User",
      icon: <MdPerson size={22} />,
      path:"/users"
    },
    {
      title: "Products",
      icon: <MdOutlineProductionQuantityLimits size={22} />,
      path:"/products"
    },
    {
      title: "Transactions",
      icon: <MdOutlineMoney size={22} />,
      path:"/transactions"
    },
    {
      title: "Revenue",
      icon: <MdDataThresholding size={22}/>,
      path:"/revenue"
    },
    {
      title: "Reports",
      icon: <MdOutlineReport size={22}/>,
      path:"/reports"
    },
    {
      title: "Teams",
      icon: <MdOutlineDiversity3 size={22}/>,
      path:"/teams"
    },
    {
      title: "Setting",
      icon: <MdOutlineBuild size={22}/>,
      path:"/setting"
    },
    {
      title: "Help",
      icon: <MdHelp size={22} />,
      path:"/help"
    }
  ];
  const path:string =usePathname();
  const currentPath =path.toString();
  return (
    <>
      <div className={style.lists}>
        <ul>
          {lists.map((item) => {
            return (
              <>
                <li key={item.path} >
                  <a href={`/dashboard${item.path}`} className={currentPath === item.path && style.active}>
                    {item.icon}
                    {item.title}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
