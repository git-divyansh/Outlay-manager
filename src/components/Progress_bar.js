import React, { useTransition } from 'react'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '90%',
        marginLeft : "15px",
        backgroundColor: 'lightgray',
        margin: 5
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress >= 100 ? 100 : progress}%`,
        backgroundColor: bgcolor,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;