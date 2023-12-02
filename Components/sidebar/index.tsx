"use client";
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
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function Sidebar() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  interface Item {
    title: string;
    icon: React.ReactNode;
    path: string;
  }
  const lists: Item[] = [
    {
      title: `${t("Dashboard")}`,
      icon: <MdDashboard size={22} />,
      path: "/",
    },
    {
      title: `${t("user")}`,
      icon: <MdPerson size={22} />,
      path: "/user",
    },
    {
      title: `${t("products")}`,
      icon: <MdOutlineProductionQuantityLimits size={22} />,
      path: "/products",
    },
    {
      title: `${t("transactions")}`,
      icon: <MdOutlineMoney size={22} />,
      path: "/transactions",
    },
    {
      title: `${t("revenue")}`,
      icon: <MdDataThresholding size={22} />,
      path: "/revenue",
    },
    {
      title: `${t("reports")}`,
      icon: <MdOutlineReport size={22} />,
      path: "/reports",
    },
    {
      title: `${t("teams")}`,
      icon: <MdOutlineDiversity3 size={22} />,
      path: "/teams",
    },
    {
      title: "Setting",
      icon: <MdOutlineBuild size={22} />,
      path: "/setting",
    },
    {
      title: "Help",
      icon: <MdHelp size={22} />,
      path: "/help",
    },
  ];
  const path: string = usePathname();
  const currentPath = path.split("/").pop().toString();
  console.log(currentPath);

  return (
    <>
      <div className={style.lists}>
        <ul>
          {lists.map((item) => {
            return (
              <>
                <li key={item.path}>
                  <a
                    href={`/dashboard/${item.path}`}
                    className={currentPath === item.path ? style.active : null}
                  >
                    {item.icon}
                    {item.title}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
        {t("dashboard")}
        <button type="button" onClick={handleChangeLanguage}>
          Change Language
        </button>
        <h1>{t('Dashboard')}</h1>
      </div>
    </>
  );
}
