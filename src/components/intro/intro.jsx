import "./intro.css";
import {useNavigate} from 'react-router-dom'

const Intro = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className="intro">
        <div className="intro-box">
          <p>
            Hi😠 I am making this rn when you just treated me like shit and made me angry I am still angry but i also love you and i thought of making this so i am making it........I dont think you will like it but okay like ik its shit but ok pls dont judge i just made it ainvayi and like its shit ik still i hope you like it but i am v v v v v angry from you rn like aghhhh
            i just feel like shouting at you but i am doing this coz i love you im obsessed like anyways i hope you like it 😠😠😠😠😠💗💗💗💗💗
          </p>
          <button onClick={()=>navigate('/custie_hai_baby_tu😘')}>Next</button>
        </div>
    </div>
    </>
  );
};

export default Intro;
