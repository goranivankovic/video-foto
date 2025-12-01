
import styles from '../../styles/prvitekst/prvitekst.module.css';

import {  useState ,useEffect } from "react";


function Prvitekst() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);


       useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner
      }, []);


  
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
    <div className={`${styles.main}  cursor-crosshair`}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}

    >

                 {visible ?
              <div
                className={styles.nevidljiviDiv}
                style={{
                  left: position.x - 10,
                  top: position.y + 60,
                  opacity:[0,1],
                  transition:2,
                  
            
                }}
              > 
      
      
               </div>
            :''
          }

          
             


   <div className={styles.second}>





        <div>Zašto baš mi ?</div>
        <div>
      Naš tim profesionalnih fotografa posvećen je hvatanju iskrenih emocija, spontanih osmeha i onih neponovljivih trenutaka koji čine vaše slavlje jedinstvenim.
       Bilo da slavite venčanje, rođendan, krštenje ili korporativni događaj — mi smo tu da svaki kadar bude umetnički, a svaka fotografija uspomena.

          </div>
       </div>



     <div className={styles.threeLines}>

        <div></div>
        <div></div>
        <div></div>
        
     </div>



    </div>
  )
}

export default Prvitekst