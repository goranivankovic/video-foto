import { useState,useEffect  } from 'react'
import Posao from './components/Posao/Posao'
import Nav from './components/Nav/Nav'
import Slika from './components/Slika/Slika'
import Cetrislike from './components/Cetrislike/Cetrislike'
import Prvitekst from './components/Prvitekst/Prvitekst'
import Komentari from './components/Komentari/Komentari'
import Drugitekst from './components/Drugitekst/Drugitekst'
import VideoDiv from './components/VideoDiv/VideoDiv'
import Slider from './components/Slider/Slider'
import OgromanTekst from './components/OgromanTekst/OgromanTekst'
import Footer from './components/Footer/Footer'
import Foto from './components/Foto/Foto'


import { useRef } from "react";

import slika from './assets/images/photo3.jpg'
import slika2 from './assets/images/photo2.jpg'
import slika3 from './assets/images/photo4.png'
import slika4 from './assets/images/par1.jpg'
import slika5 from './assets/images/par2.jpg'
import dete from './assets/images/dete.jpg'
import devojka from './assets/images/devojka.jpg'



import { Routes, Route } from 'react-router-dom';


import { motion, useScroll, useTransform } from "framer-motion";
import NotFound from './components/NotFound/NotFound'
import VideoTekst from './components/VideoDiv/VideoTekst'








function App() {
  const [count, setCount] = useState(0)
  const [laz, setlaz] = useState(true)




  return (
    <div>

      <Routes>

         {/* HOME ROUTE */}
       <Route path='/' element ={
          <div>


         {/* <Nav />  */}

         <Posao  text1="FOKUS FOTOGRAFIJE" text2="STRAST" text3="DETALJI"/> 
         <Slika images = {slika2}  text ="FOTO / VIDEO" />
         <Prvitekst />
         <Cetrislike />
         <Komentari />
      {/*    <Drugitekst />
         <VideoDiv />
         <Slider />
         <OgromanTekst />
         <Footer />     */}





          </div>

        } 
        /> 


    {/* POSAO ROUTE */}
    <Route  path='/posao' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >
         <Nav />
         <Posao text1="POSVEĆENI VIZUALNIM" text2="PRIČAMA" text3="" />
        <Slika images = {slika}  text ="PORTRET / SNIMAK"/>
         <Prvitekst />
         <OgromanTekst />
         <Slider />
         
        <Footer /> 

      </motion.div>
      
      }/>






 {/* Usluge ROUTE */}
    <Route  path='/usluge' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >

         <Nav />

        <Posao text1="PONUDE AKTIVNOSTI" text2="PAKETI" text3=""/> 
         <Slika images = {slika3}  text ="USLUGE / FOTO"/>  
         <Drugitekst />
         <OgromanTekst />
         <Slider /> 
         <Footer /> 
      </motion.div>
      
      }/>









      

 {/* Onama ROUTE */}
    <Route  path='/onama' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >

         <Nav />

        <Posao text1="KADAR FOTO VIDEO" text2="FOKUS" text3="USPOMENA" /> 
         <Prvitekst />
         <Komentari />
         <OgromanTekst />
         <Slider />
         
        <Footer /> 
      </motion.div>
      
      }/>






 {/* Fotografija ROUTE */}
    <Route  path='/fotografije' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >
         <Nav />
         <Foto />

         <OgromanTekst />
         <Slider />
         
        <Footer /> 
      </motion.div>
      
      }/>







    

 {/* Video ROUTE */}
    <Route  path='/video' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >

         <Nav />
              <Posao text1="VIDEO FOTO KADAR" text2="FOKUS" text3="USPOMENA" /> 
             
        
           <VideoTekst />
           <VideoDiv />
       
         <OgromanTekst />
         <Slider />
         
        <Footer /> 
      </motion.div>
      
      }/>




 {/* Kontakt ROUTE */}
    <Route  path='/kontakt' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >

            <Nav />
           <Slika images = {slika3}  text ="KONTAKT"/>  
            <Footer /> 
           <OgromanTekst />
            <Slider />
         
      
      </motion.div>
      
      }/>





{/* ----------------------------------------------------------- */}



    {/* POSAO SVADBA1 ROUTE */}
    <Route  path='/posao/svadba1' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >
         <Nav />
         <Posao text1="SVADBE PROSLAVE" text2="VESELJA" text3="" />
        <Slika images = {slika5}  text ="SVADBA / 🎉"/>
         <Prvitekst />
         <OgromanTekst />
         <Slider />
         
        <Footer /> 

      </motion.div>
      
      }/>



    {/* POSAO SVADBA2 ROUTE */}
    <Route  path='/posao/svadba2' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >
         <Nav />
         <Posao text1="SVADBE PROSLAVE" text2="VERIDBE" text3="" />
        <Slika images = {slika4}  text ="SVADBA / 🎉🎁"/>
         <Prvitekst />
         <OgromanTekst />
         <Slider />
         
        <Footer /> 

      </motion.div>
      
      }/>




   {/* POSAO Rodjendan 1 ROUTE */}
    <Route  path='/posao/rodjendan1' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >
         <Nav />
         <Posao text1="PROSLAVE 1 ROĐENDAN " text2="KRŠTENJA" text3="" />
        <Slika images = {dete}  text ="KRŠTENJA / 👶"/>
         <VideoTekst />
         <OgromanTekst />
         <Slider />
         
        <Footer /> 

      </motion.div>
      
      }/>    






     {/* POSAO Rodjendan 18 ROUTE */}
    <Route  path='/posao/rodjendan18' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >
         <Nav />
         <Posao text1="PROSLAVE PUNOLESTVA " text2="18." text3="" />
        <Slika images = {devojka}  text ="PUNOLESTVO / 🎉🎁"/>
         <VideoTekst />
         <OgromanTekst />
         <Slider />
         
        <Footer /> 

      </motion.div>
      
      }/>      





        {/* POSAO ROUTE  FOR ALL PATHS*/}
    <Route  path='*' element={
      <motion.div
          initial={{  opacity: 0 ,width: '0%' ,scale:0}}
          animate={{  opacity:[ 1],width: '100%',scale:[0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: 1,
        }}
      >

         <Nav />
         <NotFound />


         <Slider />

        <Footer /> 

      </motion.div>
      
      }/>





    </Routes>




    </div>
  )
}

export default App
