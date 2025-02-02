import { useNavigate } from 'react-router-dom';
import './welcome.css'
import { FaCrown } from "react-icons/fa6";

const Welcome = () =>{

     const navigate = useNavigate();

    return(
        <div className="welcome">
        
       <h1>Welcome <span>Princess <FaCrown id='crown'/></span></h1>
       <button onClick={()=>navigate('/why_i_made_this😠')}>Next</button>
        </div>
    )
}


export default Welcome;