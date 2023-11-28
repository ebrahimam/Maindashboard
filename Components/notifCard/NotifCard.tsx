import style from "./notifCard.module.scss"

interface Myprops {
    title:string,
    value:number,
    percent:number,
    description:string
}
const NotifCard:React.FC<Myprops> =({title,value,percent,description})=>{
    return (
        <>
        <div className={style.card}>
            <div className={style.title}>{title}</div>
            <div className={style.value}>{value}</div>
            <div className={style.description}>
                <span className={percent > 0 ? style.green : style.red}>{percent}</span>
                {description}
                </div>
        </div>
        </>
    )
}


export default NotifCard