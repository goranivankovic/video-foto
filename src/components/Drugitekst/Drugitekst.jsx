import styles from '../../styles/drugitekst/drugitekst.module.css';
import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion"

import slika from '../../assets/images/fotograf.jpg'
import slika1 from '../../assets/images/par1.jpg'
import slika2 from '../../assets/images/par2.jpg'

import slika3 from '../../assets/images/dete.jpg'
import slika4 from '../../assets/images/devojka.jpg'

const images = [
  slika,
  slika1,
  slika2,
  slika3,
  slika4,

];


function Drugitekst() {

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
    <div className={styles.main}>

        <div className={`${styles.firstDiv} cursor-move`}

    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave} 
        
        >


      {visible ?
        <motion.div 

          className={`${styles.nevidljiviDiv}`}
       style={{
            left: position.x +200,
            top: position.y - 220,
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


 {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`Slika ${i + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
        
         
          }}
          animate={{
            y: [ -300, 300 ], // od gore ka dole
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
             delay: i * 1, // svaka slika kreće sa zakašnjenjem
          }}
        />
      ))}

      


         </motion.div>
      :''
    }



            <div className={styles.firstDivDiv1}>Bilo da vam je potreban vizuelni sadržaj za poslovnu prezentaciju, venčanje, reklamnu kampanju ili društvene mreže  naš tim stručnjaka pretvara ideje u upečatljive fotografije i dinamične video snimke.</div>

           
            <div className={styles.firstDivDiv2}>FOKUS NA FOTOGRAFIJE</div>
             {/* Linija */}
            <div></div>

            <div className={styles.items}> 
                <div>Tehnička preciznost + umetnički dodir</div>

                <div>
                       Koristimo najnoviju opremu i softverske alate za snimanje i obradu, ali ono što nas izdvaja jeste oko za detalj, osećaj za kompoziciju i sposobnost da uhvatimo ono nevidljivo — trenutak, atmosferu, karakter.
                           Rezervišite termin
                         Kontaktirajte nas već danas i obezbedite svoj termin za snimanje. Radimo po dogovoru, sa fleksibilnim paketima i mogućnošću prilagođavanja vašem budžetu.
                       Ako želite, mogu dodati i deo za kontakt, poziv na akciju, ili stilizovati tekst za konkretne platforme poput Facebooka, Instagrama ili LinkedIna. Hoćete da ga pretvorimo u objavu za društvene mreže?

                </div>

              

            </div>

        </div>




    </div>
  )
}

export default Drugitekst