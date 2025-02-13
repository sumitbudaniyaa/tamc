import { useState } from "react";
import "./home.css";
import { GiBowTieRibbon } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [revealImg, setrevealImg] = useState("blankboard.jpeg");
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="home-box">
        <h1>Hi baby,</h1>
        <span>
          kaisi h motu hiiiii babyyyy i love you soo muchhh babyyyy likeee so so
          so so so so so so so muchhhhhhh i cant even express you are literally
          the best person i ever had you are perfect like you are soo pretty and
          so nice i just feel blessed having you pls be with me forever like i
          just cant believe its surreal like from being shy while standing near
          you <img src="usbefore.jpeg" alt="" /> to holding you in my arms
          <img src="usafter.jpeg" className="bigimg" alt="" /> like omgggg
          babyyyy its sooo surreal like this chotu ronu{" "}
          <img src="chotaronu.jpeg" alt="" /> isne kbhi socha vi nhi hoga ki
          iski bade hoke itni pyari aur sundar biwi hogi bb im literally blessed
          to have you in my life like you are perfect in everyway like you are
          smart mature pretty nice caring loving and like baby im obsessed with
          you at this point rn like never thought that we will be so close like
          and now we are here our first valentine and also we will be completing
          out first year together like yk tbh to me it feels like tht we are
          husband and wife and we are together for 5-10 years and like you toh
          my home baby i love being around you i love your smell your voice your
          smile your everything baby like you are a gem that i got bychance or
          idk im just thankful to god for giving you to me. I remember the first
          day we talked and ahahah you were so cutu then we became friend and
          you used to ignore me like bro
          <img src="angrycat.jpeg" className="bigbigimg" alt="" /> i toh used to
          get so sad😞 like i like her so much and she ignores me😞 why just why
          but i just prayed everyday ki pls god pls this girl pls just make her
          mine i just want her and yk what her listened to my prayers aur baby
          mtlb m toh sad ho jata tha jab tu mrko ignore krti thi aur jealous vi
          ki bhai mrko ese treat kyun ni kr rhi ye jese dusro ko krti hai bhai
          mtlb itni tension hoti thi na ki bhai ek ldki psnd ayi voh vi bhaw ni
          deti mtlb mar hi jaun fir toh🙁🙁🙁🙁 aur baby mtlb yaar fir thike aa
          hi gye sth kasam se bhai agr tu abhi meri gf na hoti toh jo regret
          krta na m but haan mtlb shi time p bol diya acha kra... aur baby mtlb
          yaar mrko itna accha lgta na tere sth hona mtlb tbh mrko time ka pta
          vi ni chlta tere sth ki bhai kab nikal gya aur trko preshan krne m vi
          mza ata😈😈😈 aur pyar krne m toh ata hi obv mtlb aab toh ghrwalon ko
          bhi pta ki tu biwi hai meri bs aab jese bhagwan ne tujhe gf bnaya meri
          vese hi shaadi vi krwa de toh accha ho jayega aur tu itni custie hna
          baby mtlb gusse m vi itni pyari lgti tu custu motu baby
          <div className="angry-meme">
            <h3>POV</h3>
            <p>what you think you look like when you are angry</p>
            <img src="angrytiger.jpeg" alt="" />
            <p>v/s what you actually look like🤣🤣😘😘😘</p>
            <img src="angrycustie.jpeg" alt="" />
          </div>
          ye dekh baby ye hmare jese lgre na{" "}
          <img src="runningus.jpeg" className="bigimg" alt="" />{" "}
          <img src="swingus.jpeg" className="bigimg" alt="" />{" "}
          <img src="batcustu.jpeg" className="bigimg" alt="" />
          baby tu mrko bhot bhot bhot bhot bhot bhot bhot jyada pasand hai baby
          and I loveeee youuuuuuuuuuuuu soooooooooo muchhhhhhhhh
          babyyyyyyyyyyyyyyyyyyy
          <img src="batprop.jpeg" className="bigbigimg" alt="" />
          dont ever think of leaving me baby if you are ever tired of me than
          just take a nap you wont be tired then😝😝😝 and drink v v v much
          water baby okay and baby pls i might act childish and annoy you so pls
          dont mind it okay just slap me but yk what i wont stop after getting
          slaps also🤣🤣🤣😘😘😘😘 i am your smallie custie baby this much toh
          you will have to tolerate baby yk i love it when you scold me like a
          child like wow mommy sorry but i will do it again baby i just love you
          so much and i cant imagine my life without you rn like baby i am so
          attached to you rn baby i just want you around me all the time and i
          just want to be loved by you and love you I just wish and hope that we
          end up marrying like i will be the happiest person on this planet if
          it tht happens
          <img src="kittybatkiss.jpeg" className="bigbigimg" alt="" />
          baby like i was angry from you but bhai like i cant do it like i just
          want to talk to you all the time merse ni rha jata bina bat kre baby
          yaar i promise baby m kbhi kch esa ni krunga jis se tu hurt ho bhai bs
          m trko pyar krna chahta har time mtlb aur kese ky likhun smjh ni aara
          bs i love you baby and i love you so so so much ki bs puch mat itni
          bkwas likhi hai jiska sense kn banta but okay baby tu best hai yaar tu
          acchi hai bhot tu jesi h vesi hi reh mtlb kbhi dur mt jana merse pls
          aur hmesha pyar krna mrko aur meri smallie fatty cow banke rehna baby
          abhi ye bhi m trko ignore krke kr rha hu sorry baby trko khane ka name
          leke ye sb kr rha sorry but i love you baby bhai terse aaj mene
          hackathon ke liye ky puch liya tu bhai wow bb bhai itna bura feel
          krwati na mtlb bhai trko dikat hi merse kalesh krke aab same ese letke
          phone chlari bhai hadd hoti hai mtlb bhai merse hi dikat h tujhe aab
          tu dekhna jis din tune kisi aur ke sth kri na fir dekhna m btaunga
          tujhe anyways baby hiiiiiii tom you will be seeing this bb no matter how much we fight i will still love you always baby like never giving up on you my baby you are the best i love you so muchh baby itna hi dimak m aa rha aab likhne ko idk what more should i write like idk whether you will like it or not anyways baby see yaa  <br /> Regards ~ Your Smallie Lover
          <div className="valentinereveal">
            <img src={revealImg} className="bigbigimg" alt="" />
            <p>This smallie has a hidden message</p>
            <button onClick={() => setrevealImg("writtenboard.jpeg")}>
              Reveal
            </button>
          </div>
          <div className="quiz">
            <p>I have a short Quiz for you</p>
            <button
              onClick={() => navigate("/jawab_degi_toh_certificate_dunga😘")}
            >
              Next
            </button>
          </div>
        </span>
      </div>
      <GiBowTieRibbon id="bow" />
    </div>
  );
};

export default Home;
