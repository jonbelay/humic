import React from 'react'
import './logo.png'
import "./App.css";
import {motion} from 'framer-motion'

const Profile = ({person, index}) => {
  return (
    <motion.div 
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      transition={{duration: 1.2, delay: (index*0.2)+0.8}}
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 20, marginTop: 0}}
    >
      <img src={require(`${person.photo}`)} style={{height: 150, width: 150, borderRadius: 100, marginBottom: 10, boxShadow: 'rgba(0,0,0,0.2) 0px 0px 5px'}} alt='humic logo' />
      <motion.div 
        // initial={{scale: 0, opacity: 0}}
        // animate={{scale: 1, opacity: 1}}
        // transition={{duration: 1, delay: (index*0.1)+0.9}}
        style={{height: 80, width: 220, backgroundColor:'rgba(255,255,255,0.2)', borderRadius: 5, boxShadow: 'rgba(0,0,0,0.2) 0px 0px 5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Source Sans Pro'}}
      >
        <b style={{fontSize: 22, fontFamily: 'Source Sans Pro'}}> {person.name} </b>
        {person.role}
      </motion.div>
    </motion.div>
  )
}

export default Profile;