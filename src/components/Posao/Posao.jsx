
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"
// import * as flubber from "flubber";

import styles from '../../styles/posao/posao.module.css';


import { CiCamera ,CiVideoOn  } from "react-icons/ci";

import { BiParty } from "react-icons/bi";

import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaVenusMars } from "react-icons/fa";




const icons = [CiVideoOn, CiCamera, HiOutlineEmojiHappy,FaVenusMars, BiParty];




function Posao({text1,text2,text3}) {


 const [index, setIndex] = useState(0);
  const CurrentIcon = icons[index];

  useEffect(() => {


        window.scrollTo(0, 0); // Scrolls to the top-left corner
 

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);




  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);



  const handleMouseMove = (e) => {



    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top- 100,
    });
    setVisible(true);


  };

  const handleMouseLeave = () => {
    setVisible(false);

   
  };





  return (




  <div className={` ${styles.main} cursor-grabbing`}
     onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    
  >





              <div className={styles.firstDiv}> 

               {visible ?
        <div
          className={styles.nevidljiviDiv}
          style={{
            left: position.x - 100,
            top: position.y - 100,
            opacity:[0,1],
            transition:2,
            
      
          }}
        > 


         </div>
      :''
    }
       

                    <div>{text1}</div>  
                    <div>{text2}</div>

                </div>


          <div className={`${styles.secondDiv}`}>
 

 <motion.div 
      key={index}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      style={{  color: '#01aa01' }}
    >
      <CurrentIcon className={styles.icons} />
    </motion.div>



                 
                    <div>{text3}</div>



          </div>

   


                <div className={styles.threeDiv}>
                  <div>Kreativni pristup za vaše projekte.</div>
                  <div>Šta možemo da uradimo za tebe?</div>
                </div>






    </div>

  )
}

export default Posao