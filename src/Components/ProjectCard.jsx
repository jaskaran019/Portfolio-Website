import React from 'react'
import { useState } from 'react'
import styles from '../styles/ProjectCard.module.css'
import{AiOutlineGithub} from 'react-icons/ai'
import{AiOutlineClose} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/styles.css';
// import required modules
import { Pagination } from 'swiper/modules';

const ProjectCard = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggle the state value
        console.log("true");
    };

  return (
    <div className={`${styles.cardMaster} ${isVisible ? styles.visible : ''}`} id='card'>
        <button className={styles.closebtn} onClick={toggleVisibility}><AiOutlineClose/></button>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide style={{height:"16em"}}><img src={props.img1} alt="Project Screenshot" style={{objectFit:"fill"}}/></SwiperSlide>
            <SwiperSlide style={{height:"16em"}}><img src={props.img2} alt="Project Screenshot" style={{objectFit:"fill"}}/></SwiperSlide>
            <SwiperSlide style={{height:"16em"}}><img src={props.img3} alt="Project Screenshot" style={{objectFit:"fill"}}/></SwiperSlide>
        </Swiper>
        <div className={styles.cardTitleContainer}>
            <h1>{props.cardTitle}</h1>
            <button className={styles.githubBtn}><a href={props.projectLink} target='_blank'>View on Github<AiOutlineGithub style={{fontSize:"1.5em", position:"relative", bottom:"1px"}}/></a></button>
        </div>
        <div className={styles.projectDetails}>
        <h3 style={{fontSize:".8em", color:"#444", marginBottom:"1.5em", lineHeight:"20px"}}>{props.timeline}</h3>
        <h3><span>Skills:&nbsp;&nbsp;</span>{props.skills}</h3>
        <h3><span>Team Size:&nbsp;&nbsp;</span>{props.teamSize}</h3>
        </div>
        <p style={{fontWeight:"500", marginTop:"1.5em", color:"#555", fontSize:"1em"}}>Description</p>
        <p style={{lineHeight:"1.5em", marginTop:"0.5em", width:"90%"}}>{props.desc}</p>
    </div>
  )
}

export default ProjectCard