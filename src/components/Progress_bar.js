import React from 'react'
  
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
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    
      }
        
    return (
    <div style={Parentdiv}>
      <div className='childdiv' style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;