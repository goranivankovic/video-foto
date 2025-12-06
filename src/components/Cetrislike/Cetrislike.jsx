
import slika1 from '../../assets/images/par1.jpg'
import slika2 from '../../assets/images/par2.jpg'

import dete from '../../assets/images/dete.jpg'
import devojka from '../../assets/images/devojka.jpg'

import styles from '../../styles/cetrislike/cetrislike.module.css';
import { FaVideo, FaImages  } from "react-icons/fa";

import { motion } from "framer-motion";

import { Link ,useNavigate  } from 'react-router-dom';


import { useState } from "react";



import Slika from '../Slika/Slika';

function Cetrislike() {


  //Vencanje
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const [boja, setboja] = useState('#000000')


  const handleMouseMove = (e) => {



    // const rect = e.currentTarget.getBoundingClientRect();
    // setPosition({
    //   x: e.clientX - rect.left,
    //   y: e.clientY - rect.top,
    // });
// setVisible(true);


setboja('#403e3eff')

  };

  const handleMouseLeave = (e) => {
    setVisible(false);
   setboja('#000000')


   
  };



  const handleMouseMove2 = (e) => {

setboja('#23a2cc')

  };




  const handleMouseLeave2 = () => {

   setboja('#000000')

   
  };







  

  const handleMouseMove3 = (e) => {

setboja('#ff8fa1')

  };




  const handleMouseLeave3 = () => {

   setboja('#000000')

   
  };
 






  const handleMouseMove4 = (e) => {


setboja('#01aa01')

  };




  const handleMouseLeave4 = () => {
  setVisible4(false);
   setboja('#000000')

   
  };
 


 






  return (
    <div className={`${styles.main} `} style={{background : boja ,transition:'1.2s'}}>


        <div className={`${styles.first} cursor-pointer`}>


          <div className={styles.imageBox}>
          <Link  to='/posao/svadba2' >     
         <Slika  images = {slika1} text ="SVADBA / 🎉🎁"  /> </Link> 

            <div className={styles.items}>
                   <div>VENČANJA / VERIDBE</div>
                    <div>Marija & Setfan <span className={styles.icons}><FaVideo /> <FaImages  /></span></div> 
                  
             </div> 
  

          </div>



          <div className={styles.imageBox}>
   <Link  to='/posao/rodjendan1' >  <Slika images = {dete}  text ="KRŠTENJA / 👶"/></Link>


          <div className={styles.items}>
                  <div>1 ROĐENDAN</div>
                    <div>Filipov 1 Rođendan <span className={styles.icons}><FaVideo /> <FaImages  /></span></div> 
                     
             </div>
            
          </div>










           <div className={styles.imageBox}>
          
   <Link  to='/posao/rodjendan18'> 
           <Slika images = {devojka}  text ="PUNOLESTVO / 🎉🎁"/> 
   </Link> 

                    <div className={styles.items}>
                   <div>18 ROĐENDAN</div>
                    <div>Marijin 18 Rođendan <span className={styles.icons}><FaVideo /> <FaImages  /></span></div> 
                  
             </div> 
   

          </div>



          <div className={styles.imageBox}>
   <Link  to='/posao/svadba1' >  <Slika images = {slika2}  text ="SVADBA / 🎉🎁"/></Link>


          <div className={styles.items}>
                  <div>VENČANJA / VERIDBE</div>
                    <div>Emad & David<span className={styles.icons}><FaVideo /> <FaImages  /></span></div> 
                     
             </div>
            
          </div>     












   









           

        </div>





           <div className={styles.line}></div>


    </div>
  )
}

export default Cetrislike