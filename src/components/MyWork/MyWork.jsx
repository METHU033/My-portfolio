import React from 'react'
import './MyWork.css'
import theme_pattern from '@/assets/theme_pattern.png'
import mywork_data from '@/assets/mywork_data'
// import next_icon from '../../assets/next_icon.png'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
       <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
       </div>
       <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt="" />
        })}
       </div>
       {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={next_icon} alt="" />
       </div> */}
    </div>
  )
}

export default MyWork