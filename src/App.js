import React, {useState} from 'react'
import "@fontsource/source-sans-pro"
import Tab from './Tab'
import {motion} from 'framer-motion'
import "./App.css";

const mainScreen = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: "flex",
  flexDirection: 'column',
  background: "linear-gradient(160deg ,#ffffff 50%, rgba(91,0,255,0.1) 90%)"
  // background: 'rgba(0,0,0,0.1)'
}

const tabs = {
  // position: 'absolute',
  paddingTop: 20,
  height: 50,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

const tab = {
  height: 50,
  width: 120,
  borderRadius: 10,
  margin: 20,
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // boxShadow: "#381786 0px 1px 3px, #F1642C 0px -1px 3px'
  fontFamily: 'Source Sans Pro',
  fontSize: 22,
}

function App() {

  const [index, setIndex] = useState(1)

  return (
    <>

    <div style={mainScreen}>

      <div style={tabs}>
        <button onClick={() => setIndex(1)}>
          <motion.div style={tab} 
            whileHover={{ scale: 1.1, boxShadow:  '#381786 0px 1px 6px, #F1642C 0px -1px 6px' }}
            whileTap={{ scale: 0.9 }}
          >
            home
          </motion.div>
        </button>
        <button onClick={() => setIndex(2)}>
          <motion.div style={tab} 
              whileHover={{ scale: 1.1, boxShadow:  '#381786 0px 1px 6px, #F1642C 0px -1px 6px'}}
              whileTap={{ scale: 0.9 }}
          >
            education
          </motion.div>
        </button>
        <button onClick={() => setIndex(3)}>
          <motion.div style={tab} 
                whileHover={{ scale: 1.1, boxShadow:  '#381786 0px 1px 6px, #F1642C 0px -1px 6px' }}
                whileTap={{ scale: 0.9 }}
          >
            lab
          </motion.div>
        </button>
        <button onClick={() => setIndex(5)}>
          <motion.div style={tab} 
                whileHover={{ scale: 1.1, boxShadow:  '#381786 0px 1px 6px, #F1642C 0px -1px 6px' }}
                whileTap={{ scale: 0.9 }}
          >
            members
          </motion.div>
        </button>
      </div>

      <Tab index={index}/>

      <>
      <img src={require('./logo.png')} style={{height: 50, width: 150}} className='logo' alt='humic logo'/>
      <div style={{color: 'grey', fontSize: 14, position: 'absolute', bottom: 3, right: '50%', transform: 'translate(50%,0)'}}>
        © Harvard Undergraduate Machine Intelligence Community. All Rights Reserved.
      </div>
      </>
    </div>



    </>
  );
}

export default App;
