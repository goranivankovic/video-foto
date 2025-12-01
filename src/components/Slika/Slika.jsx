
import { useEffect, useRef, useState } from "react";
import slika from '../../assets/images/fotograf.jpg'

import styles from '../../styles/slika/slika.module.css';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

function Slika({images,text}) {



  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);








  const handleMouseMove = (e) => {



    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setVisible(true);


  };

  const handleMouseLeave = () => {
    setVisible(false);

   
  };


  return (
    <div className={`${styles.main} cursor-pointer`}>
                      <div className={`${styles.first}`}
      onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave} >


               {visible ?
        <motion.div 

          className={`${styles.nevidljiviDiv}`}
          style={{
            left: position.x - 100,
            top: position.y - 60,
            opacity:[0,1],
            transition:5,
          }}

         initial={{  opacity: 0 ,scale : 0 }}
          whileInView={{  opacity:[ 1],scale : [0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: .7,
        }}> 



     <motion.div
  animate={{ x: ['0%', '100%'] }}
  transition={{
    repeat: Infinity,
    duration: 30,
    ease: 'linear',
  }}
  style={{
    whiteSpace: 'nowrap',
    // display: 'inline-block',
  }}
>
 {Array.from({ length: 20 }).map((_, i) => (
      <span key={i} style={{ marginRight: '32px' }}>{text}</span>
    ))}

</motion.div>







         </motion.div>
      :''
    }
    



                <img src={images}  alt="" />

              </div>
  

    </div>

  )
}

export default Slika