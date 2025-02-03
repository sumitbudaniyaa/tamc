import "./letter.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'


const Letter = () => {

    const navigate = useNavigate();

  return (
    <div className="letter">
      <h1>
        This letter has something which you should open and see at your own risk{" "}
        <span>
          ARE YOUR READY TO TAKE THE RISK IF YES THEN CLICK THAT DAMN HEART😤😤😤
        </span>
      </h1>


      <div className="letter-box">
         <div className="letter-box-cap">

         <BsFillSuitHeartFill id="heart" onClick={()=>navigate('/i_love_you_so_much💗')}/>
         </div>
         <p>I LOVE YOU</p>
      </div>
    </div>
  );
};

export default Letter;
