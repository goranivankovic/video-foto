
import styles from '../../styles/komentari/komentari.module.css';

import { useRef ,useState } from 'react';
import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion";



function Komentari() {


  const [laz, setLaz] = useState(false)
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [name, setName] = useState('')
  const [boja, setBoja] = useState('#262626')

 const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add('active');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  
    
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove('active');

     setBoja('#262626')
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove('active');
    
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
   
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    
  };

  function fun1() {


    setLaz(!laz)
    setText1('Fotografije su kao iz bajke! Uhvatili su svaki važan trenutak, a da nismo ni primetili da su tu. Njihova prisutnost bila je tiha, ali moćna — kao senka koja zna kada da se povuče, a kada da zabeleži magiju. Zahvaljujući njima, sada imamo uspomene koje ne blede, već sijaju još jače svaki put kada ih pogledamo.')
    setText2('Svaka fotografija nosi emociju, kao da je vreme na trenutak stalo. Gledajući ih, ne samo da se prisećamo, već ponovo proživljavamo svaki osmeh, svaki zagrljaj, svaki pogled pun ljubavi. To nije samo umetnost — to je dar.')
    setName('Milica & Stefan')
    
  }



    function fun2() {


    setLaz(!laz)
    setText1('Od prvog kontakta do poslednje isporučene slike — sve je bilo profesionalno, toplo i savršeno. Komunikacija je tekla glatko, sa puno razumevanja i pažnje prema svakom detalju. Svaki dogovor je ispoštovan, a prisustvo fotografa bilo je nenametljivo, ali uvek na pravom mestu u pravom trenutku.')
    setText2('Osetili smo da im je zaista stalo da uhvate ono što je nama važno, i to se vidi u svakom kadru. Njihova posvećenost, kreativnost i osećaj za emociju učinili su da se osećamo opušteno i prirodno, kao da nas fotografi poznaju godinama. Rezultat? Uspomene koje ćemo zauvek čuvati i sa osmehom deliti.')
    setName('Jelena, mama slavljenika')
    
  }


    function fun3() {


    setLaz(!laz)
    setText1('Odličan rad! Kompozicija, svetlo i boje su savršeno izbalansirani, a kadar deluje promišljeno i tehnički precizno. Svaka fotografija odiše profesionalizmom, ali i umetničkim dodirom koji joj daje posebnu toplinu.')
    setText2('Nije reč samo o tehničkoj veštini, već o sposobnosti da se oseti trenutak i zabeleži emocija. Fotograf je uspeo da spoji estetiku sa iskrenošću, da uhvati spontane izraze i nežne detalje koji često promaknu oku. Gledajući slike, ne vidimo samo događaj — vidimo priču, atmosferu, energiju. To je ono što pravi razliku između obične fotografije i one koja ostaje zauvek u srcu.')
    setName('Nikola')
    
  }



      function fun4() {


    setLaz(!laz)
    setText1('Atmosfera sa zabave bukvalno isijava sa svake fotografije — hvala što ste mi ulepšali proslavu! Svaki kadar nosi emociju, energiju i radost koju smo svi osećali tog dana. Fotografije nisu samo dokumentovale događaj, već su ga oživljavale, prenoseći smeh, pokret i iskrene trenutke.')
    setText2('Fotograf je uspeo da uhvati ne samo ono što se vidi, već i ono što se oseća — tihe poglede, iskrene osmehe, spontane zagrljaje. Sve deluje prirodno, a opet savršeno uklopljeno. Tehnička preciznost ide ruku pod ruku sa toplinom i atmosferom, što čini da se svaka slika doživljava kao mala umetnička priča.')
    setName('Milica')
    
  }


   function fun5() {


    setLaz(!laz)
    setText1('Savršen balans između spontanosti i estetike – bravo fotografu! Svaka fotografija odiše prirodnošću, a istovremeno izgleda kao da je pažljivo komponovana do poslednjeg detalja. Uspeli ste da uhvatite emocije bez nameštanja, svetlo bez dodatnog podešavanja, i trenutke koji govore više od reči.')
    setText2('To je ono što pravi razliku — kada se umetnost spoji sa iskrenošću, nastaju slike koje ne samo da se gledaju, već se osećaju. Vaš rad je dokaz da se profesionalizam ne meri samo tehnikom, već i sposobnošću da se oseti ono nevidljivo. Hvala vam što ste naš dan pretvorili u večnu uspomenu.')
    setName('Petar & Lana')
    
  }



     function fun6() {


    setLaz(!laz)
    setText1('Sjajna atmosfera, odlična muzika i predivni ljudi – sve je bilo savršeno! Od prvog trenutka pa sve do poslednjeg takta, osećala se energija koja se ne može opisati rečima. Svaki detalj je bio pažljivo osmišljen, ali ništa nije delovalo prenaglašeno — sve je teklo spontano, prirodno i iskreno.')
    setText2('Ljudi su se smejali, plesali, razgovarali, a muzika je bila savršen spoj emocije i ritma koji je nosio veče. Bilo je to ono posebno okupljanje koje se ne zaboravlja, gde se stvara zajedništvo, gde se deli radost i gde se oseća da je svaki trenutak vredan pamćenja. Hvala svima koji su bili deo toga — učinili ste da sve zaista bude magično.')
    setName('Luka')
    
  }




  function close(params) {
    setLaz(!laz)
    setText1('')
    setText2('')
    setName('')
  
  }


  function izadjiMisom () {
   
    setTimeout(() => {
       setBoja('#262626')
    }, 600);
  

  };


    function udjiMisom () {
   setTimeout(() => {
     setBoja('#01aa01')
   }, 600);
  

  };




  return (
    <div className={styles.main} >
           <div className={styles.firstDiv}>STA NAŠI</div>
           <div className={styles.secondDiv}>KLIJENTI KAŽU 
             <span 
                  onMouseEnter={udjiMisom}
                 onMouseLeave={izadjiMisom}

           >KOMENTARI</span></div>

           <div className={` ${styles.skrolujuciSadrzaj} scroll-content`} 

                 ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
           
           >

                <div className={styles.box} style={{background : boja}}> 
                    <div>Fotografije su kao iz bajke! Uhvatili su svaki važan trenutak, a da nismo ni primetili da su tu.</div>
                    <div   onClick={fun1}> + Procitaj vise</div>
                    <div>Milica & Stefan</div>

                </div>


                <div className={styles.box} style={{background : boja}}> 
                    <div>Od prvog kontakta do poslednje isporučene slike — sve je bilo profesionalno, toplo i savršeno.</div>
                    <div onClick={fun2}> + Procitaj vise</div>
                    <div>Jelena, mama slavljenika</div>

                </div>

           <div className={styles.box} style={{background : boja}}> 
                    <div>Odličan rad! Kompozicija, svetlo i boje su savršeno izbalansirani, a kadar deluje promišljeno i tehnički precizno.</div>
                   <div onClick={fun3}> + Procitaj vise</div>
                    <div>Nikola</div>

                </div>   
    


                <div className={styles.box} style={{background : boja}}> 
                    <div>Atmosfera sa zabave bukvalno isijava sa svake fotografije hvala što ste mi ulepšali proslavu.</div>
                   <div onClick={fun4}> + Procitaj vise</div>
                    <div>Milica</div>

                </div>



              <div className={styles.box} style={{background : boja}}> 
                    <div>Savršen balans između spontanosti i estetike – bravo fotografu!.</div>
                   <div onClick={fun5}> + Procitaj vise</div>
                    <div>Petar & Lana</div>

                </div>   






               <div className={styles.box} style={{background : boja}}> 
                    <div>Sjajna atmosfera, odlična muzika i predivni ljudi – sve je bilo savršeno!</div>
                   <div onClick={fun6}> + Procitaj vise</div>
                    <div>Luka</div>

                </div> 





           </div>

  { laz ?

           <motion.div className={styles.klikDiv}
               initial={{ y:0 ,opacity:0}}
          animate={{ y:[100,0] ,opacity:[0,1]}}
          transition={{
            duration:2,
            ease: "easeInOut",
            repeat: 0,
            repeatType: "loop",
            repeatDelay: 2
          }}
           >

            <div> <IoClose className={styles.close} onClick={close} /> </div>  

            <div>{text1}</div>

            <div>{text2}</div>
             

             <div className={styles.credintialls}>{name}</div>

           </motion.div>

           :"" }



    </div>
  )
}

export default Komentari