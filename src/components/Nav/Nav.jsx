import styles from '../../styles/nav/nav.module.css';

import { Link ,useNavigate  } from 'react-router-dom';

import { useState ,useEffect } from 'react'
import { motion } from "framer-motion";

import slika from '../../assets/images/fotograf.jpg'
import slika1 from '../../assets/images/par1.jpg'
import slika2 from '../../assets/images/par2.jpg'

import slika3 from '../../assets/images/dete.jpg'
import slika4 from '../../assets/images/devojka.jpg'



import HoverText from '../HoverText/HoverText'

const sections = Array.from({ length: 7 });

function Nav() {
  const navigate = useNavigate();


const [reverse, setReverse] = useState(false);
 const [scrolled, setScrolled] = useState(false);
const [laz, setlaz] = useState(false)
 const[laz2,setlaz2]=useState(false)
 const[laz3,setlaz3]=useState(false)





 



  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 250) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const handleClick = () => {
    setReverse((prev) => !prev);
  };


  function toggleBar(params) {

    if (laz) {
       document.body.style.overflow = 'auto';

    
setlaz(!laz)
setTimeout(() => {
    
   setlaz3(!laz3)
}, 1650);

  }else if (!laz) {

    
setlaz(!laz)
setTimeout(() => {
    
   setlaz3(!laz3)
}, 1650);

 
  

       document.body.style.overflow = 'hidden';
      
    }

  
}









  

  return (
    <div>


      { !scrolled ?



        <div className={styles.main}>

            <Link className={styles.jc} to='/'>FV</Link>
            <motion.div
       initial={{ y: -100, opacity: 0 ,rotate:0}}
      animate={{ y: 0, opacity: 1,rotate:[12,0] }}
      transition={{ duration: 1.5, ease: "easeOut" }}
            > <Link to='/posao'>POSAO</Link> <Link to='/usluge'>USLUGE</Link>  <Link to='/onama' >O NAMA</Link>    <Link  to='/fotografije'>FOTOGRAFIJE</Link>   <Link to='/video'>VIDEO</Link> 
            
           </motion.div>
            <Link className={styles.kontakt} to='/kontakt'>KONTAKT</Link>


        </div>


:



<div className={styles.bars}>

<motion.svg width="74" className={styles.bars} height="43" viewBox="0 0 74 43" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleBar}

    initial={{ opacity: 0, scale: 0.5 ,y:100,rotate:0}}
      animate={{ opacity: 1, scale: [2,1],y:[100,0],rotate:[180,0] }}
        transition={{
            duration: 1.4,
           repeat: 0,
            type: "spring",
          }}


>
<g id="Frame 3">
<motion.path 
    initial={{ scale: 1 }}
          animate={{ rotate: !laz ? 0 : -45 , y : !laz ? 0 :10}}
          transition={{ duration: 1 }}

id="Line 20" d="M6.5 6H68.5" stroke="#a4a4a4" strokeWidth="6"/>
<motion.line 
    initial={{  scale: 1 }}
          animate={{ rotate : !laz ? 0 : 45 }}
          transition={{ duration: 1 }}

 id="Line 20_2" x1="6" y1="20.5" x2="68" y2="20.5" stroke="#a4a4a4" strokeWidth="6"/>
{!laz ? <motion.path id="Line 20_3" d="M6 35H54" stroke="#a4a4a4" strokeWidth="6" 


         initial={{ x:0}}
          animate={{ x:[0,20,0] }}
          transition={{
            duration:2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2
          }}

/> :''}
</g>
</motion.svg> 


</div>
 
    
    }


{laz3 ?
    
     <div className={`${styles.container}`}>

   
       {sections.map((_, index) => (
        <motion.div

            key={`${reverse}-${index}`} 
         className={styles.section}
          style={{ top: `${(100 / 6) * index}vh` }}
          initial={{ y: reverse ? 0 : "-100vh" }}
          animate={{ y: reverse ? "-100vh" : 0 }}
          exit={{ y: reverse ? "-100vh" : "100vh" }}
          transition={{
            duration: 1.5,
            delay: 0.5 + index * 0.3,
            type: "spring",
          }}
        >

      
         
       
        </motion.div>
      ))}
    
    </div>   

:"" }



{laz3 ?

 <div className={`${styles.fullNav} cursor-crosshair`}>
  <motion.div
     initial={{ opacity: 0, scale: 0.5 ,y:100}}
      animate={{ opacity: 1, scale: [2,1],y:[100,20] }}
        transition={{
            duration: 1.2,
            delay: 2,
            type: "spring",
          }}>

 <Link onClick={toggleBar} to="/"><HoverText word="FV" /></Link>  

<Link onClick={toggleBar} to="/posao"><HoverText word="POSAO" /></Link>  

 <Link onClick={toggleBar} to="/usluge"><HoverText word="USLUGE" /></Link> 

<Link onClick={toggleBar} to="/onama"><HoverText word="O NAMA" /></Link>

<Link onClick={toggleBar} to="/fotografije"><HoverText word="FOTOGRAFIJE" /></Link>

<Link onClick={toggleBar} to="/video"><HoverText word="VIDEO" /></Link>  

<Link onClick={toggleBar} to="/kontakt"><HoverText word="KONTAKT" /></Link>  
    
    
    
     </motion.div>


<motion.div className={styles.slikeDiv}

  initial={{ opacity: 0, scale: 0.5 ,y: 500}}
      animate={{ opacity: 1, scale: [2,1],y:[500,0] }}
        transition={{
            duration: 1.2,
            delay: 3,
            type: "spring",
          }}

>

  <div className={styles.i1} > <img  src={slika3} alt="" /> </div>
   <div className={styles.i2}> <img src={slika2} alt="" /></div>

  <motion.div 
   initial={{ opacity: 0, scale: 0.5 ,y: 500}}
      animate={{ opacity: 1, scale: [2,1],y:[500,0] }}
        transition={{
            duration: 1.2,
            delay: 4,
            type: "spring",
          }} 
          className={styles.i3}
          
  ><img src={slika} alt=""  /></motion.div>

  <div className={styles.i4}> <img src={slika1} alt="" /></div>
 <div className={styles.i5}> <img src={slika4} alt="" /></div>

</motion.div>

 </div>
 :""}




    </div>
  )
}

export default Nav