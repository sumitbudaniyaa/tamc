import { useState, useSyncExternalStore } from 'react'
import './quiz.css'
import {useNavigate} from 'react-router-dom';

const Quiz = () =>{


  const [ans,setAns] = useState({
    nickname: "",
    suckdick: "",
    marry: ""
  });

  const [correctans,setcorrectans] = useState(false);

const handleSubmit = () => { 
     if(ans.nickname === "gattu" && ans.suckdick === "Yes" && ans.marry === "Yes"){
        setcorrectans(true);
     }
  }

  const navigate = useNavigate();

    return(
        <div className="quiz">
             <div className="quiz-box">
                  <ul>
                    <li>What is the nickname i gave you?</li>
                    <li><input type="text" value={ans.nickname}  onChange={(e) => setAns((prev) => ({ ...prev, nickname: e.target.value.toLowerCase() }))} required/></li>
                    <li>Will you suck my dick?</li>
                    <li><button onClick={() => setAns((prev) => ({ ...prev, suckdick: 'Yes' }))}>Yes</button><button onClick={() => setAns((prev) => ({ ...prev, suckdick: 'No' }))}>No</button></li>
                    <li>Will you marry me? (try clicking no)</li>
                    <li><button onClick={() => setAns((prev) => ({ ...prev, marry: 'Yes' }))}>Yes</button><button className='nobtn' onClick={() => setAns((prev) => ({ ...prev, marry: 'No' }))}>No</button></li>
                  </ul>

                  <button className='button submit' onClick={()=>handleSubmit()}>Submit</button>

{correctans ? <button className='button' onClick={()=>navigate('/best_gf💗💗💗💗')}>Avail Certificate</button> : '' }
               
             </div>
        </div>
    )
}

export default Quiz;