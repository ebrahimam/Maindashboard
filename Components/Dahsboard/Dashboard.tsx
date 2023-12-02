import { useState } from "react";
import style from "./dashboard.module.scss";
import NotifCard from "../notifCard/NotifCard";
import React, { PureComponent } from "react";
import "@/app/global.css"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {BiPlayCircle } from "react-icons/bi"
export default function Dashboard() {
  interface cardinfo {
    title: string;
    data: number;
    percent: number;
    description: string;
  }
  interface transactionData {
    photo: string;
    name: string;
    status: string;
    data: string;
    amount: number;
  }
  interface chartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }
  const cardData: cardinfo[] = [
    {
      title: "Total",
      data: 10.928,
      percent: 12,
      description: "%more than previous week",
    },
    {
      title: "Stock",
      data: 8.832,
      percent: -2,
      description:"more than previous week",
    },
    {
      title: "Revinue",
      data: 6.642,
      percent: 18,
      description:"more than previous week",
    },
  ];
  const transactions: transactionData[] = [
    {
      photo: "sas",
      name: "Josiphen Zim",
      status: "Pending",
      data: "2024/12/16",
      amount: 3520,
    },
    {
      photo: "sas",
      name: "Josiphen Zim",
      status: "Pending",
      data: "2024/12/16",
      amount: 3520,
    },
    {
      photo: "sas",
      name: "Josiphen Zim",
      status: "Pending",
      data: "2024/12/16",
      amount: 3520,
    },
    {
      photo: "sas",
      name: "Josiphen Zim",
      status: "Pending",
      data: "2024/12/16",
      amount: 3520,
    },
    {
      photo: "sas",
      name: "Josiphen Zim",
      status: "Pending",
      data: "2024/12/16",
      amount: 3520,
    },
    {
      photo: "sas",
      name: "Josiphen Zim",
      status: "Pending",
      data: "2024/12/06",
      amount: 3520,
    },
  ];
  const data: chartData[] = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.cards}>
            {cardData.map((item) => {
              return (
                <>
                  <NotifCard
                    title={item.title}
                    description={item.description}
                    percent={item.percent}
                    value={item.data}
                  />
                </>
              );
            })}
          </div>
          <div className={style.transactions}>
            <div className={style.title}>Latest Transactions</div>
            <div className={style.table}>
              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Data</td>
                    <td>Amount</td>
                  </tr>
                </thead>
                {transactions.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>
                          {item.photo}-{item.name}
                        </td>
                        <td
                          className={
                            item.status === "Pending"
                              ? style.green
                              : item.status === "done"
                              ? "red"
                              : "green"
                          }
                        >
                          {item.status}
                        </td>
                        <td>{item.data}</td>
                        <td>$ {item.amount}</td>
                      </tr>
                    </>
                  );
                })}
              </table>
            </div>
          </div>
          <div className={style.recap}>
            <AreaChart
              width={800}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#26225f"
                fill="#26225f"
              />
            </AreaChart>

          </div>
        </div>
        <div className={style.infocards}>
          <div className={style.now}>
            <div className={style.title}>Avalible Now</div>
            <div className={style.des}>
              How to use the new version of admin 
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Facere esse eius ipsa 
              laudantium eum, enim distinctio 
              voluptatibus ullam! Nam, voluptate? 
              Vel veritatis, temporibus eaque quis 
              nesciunt nam
               velit dicta consequuntur.
              adhere dashboard
            </div>
            <button>
            <BiPlayCircle/> Watch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
