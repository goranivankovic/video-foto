


import styles from '../../styles/videodiv/videodiv.module.css';
import dj from '../../video/weading.mp4'

function VideoDiv() {
  return (
    <div className={styles.main}>

           <div className={styles.firstDiv}>

             <video className={styles.video}  type="video/mp4" src={dj}  autoPlay loop muted ></video> 


           </div>
             
             
    </div>
  )
}

export default VideoDiv