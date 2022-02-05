import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const event = {
  height: 200,
  width: 400,
  borderRadius: 10,
  backgroundColor: 'white',
  position: 'relative',
  boxShadow: 'rgba(0,0,0,0.5) 0px 0px 10px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1, 
  justifyContent: 'center',
  alignItems: 'center',
  margin: -5
}

const topicStyle = {
  backgroundColor: 'white',
  position: 'absolute',
  top: -32,
  padding: 5,
  borderRadius: 5,
  boxShadow: 'rgba(0,0,0,0.2) 0px 0px 5px'
}

const dateStyle = {
  backgroundColor: 'white',
  position: 'absolute',
  bottom: -22,
  padding: 5,
  borderRadius: 5,
  boxShadow: 'rgba(0,0,0,0.2) 0px 0px 5px'
}

const extraInfo = {
  backgroundColor: 'white',
  width: 320,
  padding: 20,
  boxShadow: 'rgba(0,0,0,0.2) 0px 0px 5px',
  marginTop: 50,
  borderRadius: 5,
  alignText: 'center'
}

const buttonVariants = {
  enlarge: {
    scale: 1.2,
    marginLeft: 50,
    marginRight: 50
  },
  normal: {
    scale: 1
  }
}

const Event = ({details, index, currentActive, setCurrentActive}) => {  

  const {date, time, where, image, topic, info} = details

  console.log(where)
  
  return (
    <motion.div
      key={index}
      animate={{}}
      style={{display:'flex',flexDirection:'column', alignItems: 'center'}}
      className='event'
    >
      <motion.button
        variants={buttonVariants}
        animate={index === currentActive ? 'enlarge' : 'normal'}
        onClick={() => {
          if (currentActive === index) 
          {
            setCurrentActive(-1)
          }
          else {
            setCurrentActive(index)
          }
        }}
      >
        <motion.div style={event}
          initial={{scale: 0, opacity: 0}}
          animate={{scale: 0.9, opacity: 1}}
          transition={{delay: ((index*0.5)+0.8)}}
        >
          <div style={topicStyle}><b style={{fontSize: 20}}>{topic}</b></div>
          <img style={{width:'100%', height:'100%', borderRadius: 10}} src={require(`${image}`)} alt='neural network'/>
          <div style={dateStyle}>{date} | {time}</div>
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {
          currentActive === index && (
            <motion.div 
              style={extraInfo}
              initial={{y: -100, scale:0, opacity: 0}}
              animate={{y: 0, scale: 1, opacity: 1}}
              exit={{y: -100, scale:0, opacity: 0}}
              transition={{duration: 0.5}}
            >
              {info}
            </motion.div>
          )
        }
      </AnimatePresence>
    </motion.div>
    
  )
}

export default Event