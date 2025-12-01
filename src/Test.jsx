import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";




import { useNavigate } from "react-router-dom";


function Test() {
//  const { scrollYProgress } = useScroll(); // prati skrol cele stranice
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 22]);
//   const navigate = useNavigate();

//   // Kada skrol pređe 80%, automatski pređi na /posao
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       if (v > 0.8) {
//         navigate("/posao");
//       }
//     });
//     return () => unsubscribe(); 
//   }, [scrollYProgress, navigate]);



  return (
    <div>

        {/* 
  <div
      style={{
        height: "110vh", 
                  display: "flex",
          justifyContent: "center",
          alignItems: "center",
     
      }}
    >
      <motion.div
        style={{
          position: "sticky",
          top: '50%',

          transform: "translateY(-50%)",
          minHeight: "50vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          background:"red"
        }}
      >
        <motion.div
          style={{
            scale: scale,
            fontSize: "clamp(2rem, 5vw, 6rem)", // 👈 automatsko prilagođavanje
            maxWidth: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "clip",
            textAlign: "center",
          }}
          transition={{
            duration: 5.5, // ⏱️ sporija animacija
            ease: "easeOut",
          }}

        >
          CLEAR CLEANE
        </motion.div>
      </motion.div>
    </div> */}



    </div>
  )
}

export default Test