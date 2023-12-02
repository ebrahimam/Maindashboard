import React from "react";
import Layout from "../../../../Components/Layout";
import "@/app/global.css";
import Searchpu from "../../../../Components/searchPU/Searchpu";
import Link from "next/Link";
import style from "./product.module.scss";
interface Product {
  title: string;
  type: string;
  price: number;
  stock: number;
  colors: string;
  size: string;
}
const products: Product[] = [
  {
    title: "jae",
    type: "sor",
    price: 40000,
    stock: 41,
    colors: "black",
    size: "38",
  },
  {
    title: "dish",
    type: "sor",
    price: 36000,
    stock: 4,
    colors: "green",
    size: "35",
  },
  {
    title: "changal",
    type: "sor",
    price: 12000,
    stock: 7,
    colors: "white",
    size: "28",
  },
  {
    title: "gab",
    type: "sor",
    price: 40000,
    stock: 41,
    colors: "black",
    size: "38",
  },
];
export default function index() {
  const handleDelete =()=>{
    console.log("OK")
  }
  return (
    <><Layout>
      <div className={style.pcontainer}>
        
          <Searchpu  />
          <div className={style.tcontainer}>
            <table className={style.table}>
            <thead>
              <tr>
                <td>Title</td>
                <td>Type</td>
                <td>Price</td>
                <td>Stock</td>
                <td>Colors</td>
                <td>Size</td>
                <td></td>
              </tr>
              </thead>
              {products.map((product) => {
                return (
                  <>
                    <tr>
                      <td>{product.title}</td>
                      <td>{product.type}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>{product.colors}</td>
                      <td>{product.size}</td>
                      <td className={style.button}>
                        
                        <Link href="/"  className={style.view}>View</Link>
                        <button  className={style.delete} onClick={handleDelete}>Delete</button>
                      </td>
                    </tr>
                  </>
                );
              })}
           
          </table>
          </div>
          
        <div className={style.pagination}>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      </Layout>
    </>
  );
}
