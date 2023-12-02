import Layout from "../../../Components/Layout"
import Dashboard from "../../../Components/Dahsboard/Dashboard"
import { createRoot } from 'react-dom/client';
import "./i18n"

const index:React.FC =() =>{
    return (
        <>
        
            <Layout>
        <Dashboard/>
        </Layout>
     
        
        </>
    )
}
export default index