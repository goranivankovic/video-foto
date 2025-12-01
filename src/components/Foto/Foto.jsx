
import { useState ,useEffect} from "react";

import slika1 from '../../assets/images/par1.jpg'
import slika2 from '../../assets/images/par2.jpg'
import slik3 from '../../assets/images/photo3.jpg'
import slika4 from '../../assets/images/photo2.jpg'
import dete from '../../assets/images/dete.jpg'
import devojka from '../../assets/images/devojka.jpg'



import styles from '../../styles/Foto/Foto.module.css';


import { motion , AnimatePresence } from "framer-motion";
import { div } from "motion/react-m";



const images = [
  slika1,
  slika2,
  slik3,
  slika4,  
  dete,
  devojka
];

function Foto() {


  const [laz, setLaz] = useState(false);
  const [toogleSlika, settoogleSlika] = useState(0)

  useEffect(() => {


        window.scrollTo(0, 0); // Scrolls to the top-left corner
 


  }, []);



 const loopImages = [...images, ...images];

  return (

  <div className={styles.main}>

     {!laz ?
      <div className={`${styles.imagesBoxes} cursor-crosshair`}>
        <motion.div


          className={styles.boxes}
         animate={{y:["0%", "-600%"] }}
                transition={ { repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {loopImages.map((src, i) => (
            <img key={i} src={src}

                    onClick={()=>{ 
                      setLaz(!laz)
                      settoogleSlika(i)
                    }}

             />
          ))}
        </motion.div>

         <motion.div

          className={styles.boxes}
            animate={{y:["-600%", "0%"] }}
    transition={ { repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {loopImages.map((src, i) => (
            <img key={i} src={src} 

                   onClick={()=>{ 
                      setLaz(!laz)
                      settoogleSlika(i)
                    }}
            
            />
          ))}
        </motion.div>
        <motion.div


          className={styles.boxes}
           animate={{y:["0%", "-600%"] }}
    transition={ { repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {loopImages.map((src, i) => (
            <img key={i} src={src} 

                    onClick={()=>{ 
                      setLaz(!laz)
                      settoogleSlika(i)
                    }}

            
            />
          ))}
        </motion.div>

        <motion.div


          className={styles.boxes}
            animate={{y:["-600%", "0%"] }}
    transition={ { repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {loopImages.map((src, i) => (
            <img key={i} src={src} 
                    onClick={()=>{ 
                      setLaz(!laz)
                      settoogleSlika(i)
                    }}

            />
          ))}
        </motion.div>
      </div>

      :

      <motion.div className={styles.toogleDiv}
       initial={{  opacity: 0 ,scale:0}}
          animate={{  opacity:[ 1],scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}

      >

        
            <img src={loopImages[toogleSlika]} alt="" />

        

     

       <motion.h4 

        initial={{  opacity: 0  ,scale:0}}
          animate={{  opacity:[ 1],scale:[0,1],rotate:[0,-90]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          delay:1,
          duration: 1.5,
        }}

       onClick={()=>{setLaz(!laz)}}>CLOSE</motion.h4>

      </motion.div>


      }


    </div>


  )
}

export default Foto