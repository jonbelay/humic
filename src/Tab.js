import React, {useState} from 'react'
import { motion, AnimatePresence} from "framer-motion"
import Profile from './Profile'
import Event from './Event'

const main1 = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

// const homeText = "We are a community of undergraduates at Harvard aiming to promote and foster interest in machine learning and artificial intelligence. We host technical workshops on advanced topics in machine learning, work on challenging real-world problems, discuss the current state of the field, and - most importantly - attempt to create a friendly and collaborative environment both for aspiring machine learning researchers and also for people who have just taken their first step into the fascinating and mysterious world of artificial intelligence. We seek to equip everyone with knowledge in machine learning and artificial intelligence and prepare them to face the new wave of the future."
const homeText2 = "HUMIC is an organization dedicated to all ideas related to the field of machine intelligence including machine learning, computational neuroscience and philosophy of mind"

const title = ["Harvard Undergraduate Machine Intelligence Community", "Education", "Intelligence Lab", "Applied Projects", "Board Members"]

const titleVariants = {
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.7
    }
  }, 
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      type: 'spring',
    }
  }
}

const homeVariants = {
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1, 
      delay: 1
    }
  },
  exit: {
    x: -500,
    opacity: 0,
    transition: {
      type: 'spring'
    }
  }
}

const details = [
  {date: 'Saturday 12 February', time: '15:00', where: 'Science Center 101', image: './fnn.gif', topic: 'Deep Learning 101',
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
  {date: 'Saturday 19 February', time: '15:00', where: 'Quincy Extra Room', image: './simclr.gif', topic: 'SimCLR paper', 
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
  {date: 'Saturday 26 February', time: '15:00', where: 'Science Center B', image: './cnn.gif', topic: 'CNNs', 
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
  {date: 'Saturday 5 March', time: '15:00', where: 'Harvard Hall 101', image: './transformer.gif', topic: 'NLP and Transformers', 
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
  {date: 'Saturday 26 March', time: '15:00', where: 'SEC 1.023', image: './gan.gif', topic: 'Generative Adverserial Networks', 
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
  {date: 'Saturday 2 April', time: '15:00', where: 'Cabot Library L0.09', image: './rl.gif', topic: 'Deep Reinforcement Learning', 
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
  {date: 'Saturday 9 April', time: '15:00', where: 'Science Center 203', image: './alphafold.gif', topic: 'AlphaFold', 
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
  {date: 'Saturday 16 April', time: '15:00', where: 'Emerson Hall 306', image: './compneuro.gif', topic: 'Neural Attractor Models', 
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
  {date: 'Saturday 23 April', time: '15:00', where: 'Long-Term AI Ethics', image: './ethics.gif', topic: 'Ethics in Artificial Intelligence', 
    info: 'A brief theoretical and practical introduction to deep learning using Keras. We will explore the feedforward neural network and the backpropagation algorithm derivation, while also training a feed-forward neural-network on the MNIST dataset'},
]

const people = [
  {name: "Darius Lam", role: "Co-President", photo: './darius.jfif'},
  {name: "Chloe Loughridge", role:  "Co-President", photo: './chloe.JPG'},
  {name: "Jonathan Belay", role: "Director of Applied Projects", photo: './jon.png'}, 
  {name: "Deepak Singh", role:  "Director of Research", photo: './deepak.JPEG'},
  {name: "Elie Eshoa", role: "Co-Director of Education", photo: './elie.jfif'},
  {name: "Jason Wang", role: "Co-Director of Education", photo: './jason.jpg'},
  {name: "Zad Chin", role: "Director of Outreach", photo: './zad.jpg'},
  {name: "Warren Sunada-Wong", role: "Director of Alignment", photo: './warren.JPEG'},
  ]

const Tab = ({index}) => {

  const [currentActive, setCurrentActive] = useState(-1)

  return (
    <>
      <div style={main1}>

      <AnimatePresence>
        <motion.div
          key={index}
          initial={{scale:0, opacity: 0}} 
          variants={titleVariants}
          animate='enter'
          exit='exit'
          style={{marginTop: index === 1 ? 100 : 20, marginBottom: 20, backgroundColor: 'rgba(255,0,255,0)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 60}} 
          className='title'
        >
          <div style={{fontSize: 60, fontFamily: 'Source Sans Pro'}}>{title[index-1]}</div>
          {
            (index === 2) && (
              <div style={{fontSize: 25, fontFamily: 'Source Sans Pro'}}>Spring 2022 Calendar</div>
            )
          }
          {
            (index === 5) && (
              <div style={{fontSize: 25, fontFamily: 'Source Sans Pro'}}>2021-22</div>
            )
          }
        </motion.div>
      </AnimatePresence>

        {
          index === 1 && 
          <>
          <AnimatePresence>
            <motion.div 
              initial={{x: -200, opacity: 0}}
              variants={homeVariants}
              animate='enter'
              exit='exit'
              className='item' style={{marginBottom: 20, fontSize: 30, display: 'flex', flexDirection: 'column', padding: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'Source Sans Pro'}}
            >
              {homeText2}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div 
              initial={{x: 200, opacity: 0}}
              variants={homeVariants}
              animate='enter'
              exit='exit'
              className='item' 
              style={{fontSize: 20, display: 'flex', flexDirection: 'column', padding: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'Source Sans Pro'}}
            >
              Apply for Member Track and Fellowship Track!
            </motion.div>
          </AnimatePresence>
          <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            
            <a style={{textDecoration:'none', color: 'black'}} href='https://docs.google.com/forms/d/e/1FAIpQLSd2td_7ZTmKWcWH4NgWuaR6NfKrB1P78aVkgeTmmA6XnC13Ag/viewform?usp=send_form' rel="noreferrer">
              <motion.div
                initial={{y:-50, scale: 0, opacity: 0}}
                animate={{y: 0, scale: 1, opacity: 1}}
                transition={{type: 'spring', delay: 1.5}}
                style={{borderRadius: 40, margin: 10, }}
              >           
                <motion.div 
                  whileHover={{boxShadow:'#381786 0px 1px 6px, #F1642C 0px -1px 6px'}}
                  style={{height: 80, width: 80, backgroundColor: 'white', boxShadow: 'rgba(0,0,0,0.1) 0px 0px 10px', borderRadius: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                >
                  <img src={require('./group.png')} style={{height: '50%', width: '50%'}} alt='membership'/>
                  <div style={{textDecoration:'none'}}>member</div>
                </motion.div>
              </motion.div>
            </a>

            <a style={{textDecoration:'none', color: 'black'}} href='https://tinyurl.com/AI-fellowship-2022' rel="noreferrer">
              <motion.div
                initial={{y:-50, scale: 0, opacity: 0}}
                animate={{y: 0, scale: 1, opacity: 1}}
                transition={{type: 'spring', delay: 1.5}}
                style={{borderRadius: 40, margin: 10, }}
              >
                <motion.div 
                  whileHover={{boxShadow:'#381786 0px 1px 6px, #F1642C 0px -1px 6px'}}
                  style={{height: 80, width: 80, backgroundColor: 'white', boxShadow: 'rgba(0,0,0,0.1) 0px 0px 10px', borderRadius: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                >
                  <img src={require('./scholar.png')} style={{height: '50%', width: '50%'}} alt='membership'/>
                  <div>fellow</div>
                </motion.div>
              </motion.div>
            </a>

          </div>
          </>
        }

        {
          index === 2 &&
          <motion.div 
            style={{marginTop: 30, display: 'flex', flexDirection: 'row', paddingTop: 60,}}
            className='events'
          >
            {
              details.map((detail, index) => {
                return (
                  <Event details={detail} index={index} currentActive={currentActive} setCurrentActive={setCurrentActive}/>
                )
              })
            }
          </motion.div>
        }

        {
          index=== 5 && (
            <div>
              <div style={{display: 'flex', flexDirection: 'row', marginBottom: 30}}>
                <Profile person={people[0]} index={0}/>
                <Profile person={people[1]} index={1}/>
                <Profile person={people[2]} index={2}/>
                <Profile person={people[3]} index={3}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Profile person={people[4]} index={4}/>
                <Profile person={people[5]} index={5}/>
                <Profile person={people[6]} index={6}/>
                <Profile person={people[7]} index={7}/>
              </div>
            </div>
          )
        }
    </div>
    </>
  )
}

export default Tab;
