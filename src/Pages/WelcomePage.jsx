import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import MyImage from '../Assets/Images/Me.jpg';
import CoolBackground from '../Assets/Images/cool-background.png';
import { motion } from "framer-motion";

const imageVariants = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      ease: "easeInOut",
      duration: 2
    }
  }
}

const imageLVariants = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      ease: "easeInOut",
      duration: 1.5,
      delay: 2
    }
  }
}

const letterVariants = {
  hidden:{
    opacity:0,
    x:-400
  },
  visible:{
    opacity:1,
    x: 0,
    transition:{
      ease: "easeInOut",
      duration: 2
    }
  }
}

const letterLVariants = {
  hidden:{
    opacity:0,
    y:-400
  },
  visible:{
    opacity:1,
    y: 0,
    transition:{
      ease: "easeInOut",
      duration: 2
    }
  }
}

const btnVariants = {
  hidden:{
    opacity:0,
    x:-400
  },
  visible:{
    opacity:1,
    x: 0,
    transition:{
      type: 'spring',
      stiffness: 120,
      delay: 2
    }
  } 
}

function WelcomePage() {
  const [isAllChecked, setIsAllChecked]= useState(false);
  let [lettersChecked, setLettersChecked] = useState(0);
  
  function handleClick(e){
    if(e.target.checked){
      setLettersChecked(lettersChecked + 1);
      if(lettersChecked === 8){
        setIsAllChecked(true);
      } 
    } else if(!e.target.checked){
      setLettersChecked(lettersChecked - 1);
      setIsAllChecked(false);
    }
  }
  return (
    <div className="WelcomePage">
      {isAllChecked && (
          <motion.div className="image-texture"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="box glowing">
                <img src={MyImage} alt="" className="picture" />
            </div>
            <img src={CoolBackground} alt="" className="texture" />
          </motion.div>
      )}
      {!isAllChecked && (
        <motion.div className="image-text"
          variants={imageLVariants}
          initial="hidden"
          animate="visible"
        >
        <p id="text">
          Family Accomplish  Action Ambition Believe Clarity Challenge Commitment Confidence Courage Dare Determination Drive
          Envision Excellence Focus Fulfillment Goals Gratitude Honesty Hope Imagination Improve Inspiration Joy Kindness Knowledge
          Listen Mindfulness Mission Opportunity Outstanding Passion Patience Perseverance Practice Skill Smile Succeed Think Trust
          Understand Value Winner Wisdom Zeal Family Accomplish  Action Ambition Believe Clarity Challenge Commitment Confidence Courage Dare Determination Drive
          Envision Excellence Focus Fulfillment Goals Gratitude Honesty Hope Imagination Improve Inspiration Joy Kindness Knowledge
          Listen Mindfulness Mission Opportunity Outstanding Passion Patience Perseverance Practice Skill Smile Succeed Think Trust
          Understand Value Winner Wisdom Zeal Family Accomplish  Action Ambition Believe Clarity Challenge Commitment Confidence Courage Dare Determination Drive
          Envision Excellence Focus Fulfillment Goals Gratitude Honesty Hope Imagination Improve Inspiration Joy Kindness Knowledge
          Listen Mindfulness Mission Opportunity Outstanding Passion Patience Perseverance Practice Skill Smile Succeed Think Trust
          Understand Value Winner Wisdom Zeal Family Accomplish  Action Ambition Believe Clarity Challenge Commitment Confidence Courage Dare Determination Drive
          Envision Excellence Focus Fulfillment Goals Gratitude Honesty Hope Imagination Improve Inspiration Joy Kindness Knowledge
          Listen Mindfulness Mission Opportunity Outstanding Passion Patience Perseverance Practice Skill Smile Succeed Think Trust
          Understand Value Winner Wisdom Zeal Family Accomplish  Action Ambition Believe Clarity Challenge Commitment Confidence Courage Dare Determination Drive
          Envision Excellence Focus Fulfillment Goals Gratitude Honesty Hope Imagination Improve Inspiration Joy Kindness Knowledge
          Listen Mindfulness Mission Opportunity Outstanding Passion Patience Perseverance Practice Skill Smile Succeed Think Trust
          Understand Value Winner Wisdom Zeal Family Accomplish  Action Ambition Believe Clarity Challenge Commitment Confidence Courage Dare Determination Drive
          Envision Excellence Focus Fulfillment Goals Gratitude Honesty Hope Imagination Improve Inspiration Joy Kindness Knowledge
          Listen Mindfulness Mission Opportunity Outstanding Passion Patience Perseverance Practice Skill Smile Succeed Think Trust
        </p>
      </motion.div>)}
      <div className="glow-text">
        <ul>
          <motion.div className="fName"
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            >
            <li>
              <input onClick={handleClick} type="checkbox" />
              <div className="letter-glue">F</div>
            </li>
            <li>
              <input onClick={handleClick} type="checkbox" />
              <div className="letter-glue">A</div>
            </li>
            <li>
              <input onClick={handleClick} type="checkbox" />
              <div className="letter-glue">B</div>
            </li>
            <li>
              <input onClick={handleClick} type="checkbox" />
              <div className="letter-glue">I</div>
            </li>
            <li>
              <input onClick={handleClick} type="checkbox" />
              <div className="letter-glue">O</div>
            </li>
          </motion.div>
          <motion.div className="lName"
            variants={letterLVariants}
            initial="hidden"
            animate="visible"
          >
            <li>
              <input onClick={handleClick} type="checkbox" />
              <div className="letter-glue">L</div>
            </li>
            <li>
              <input onClick={handleClick} type="checkbox" />
              <div className="letter-glue">U</div>
            </li>
            <li>
              <input onClick={handleClick} type="checkbox" />
              <div className="letter-glue">I</div>
            </li>
            <li>
              <input onClick={handleClick}  type="checkbox" />
              <div className="letter-glue">Z</div>
            </li>
          </motion.div>
        </ul>
        <motion.div className="btn"
          variants={btnVariants}
          initial="hidden" animate="visible"
        >
          <NavLink to="/home" exact>
            <button>
              Home
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}

export default WelcomePage;
