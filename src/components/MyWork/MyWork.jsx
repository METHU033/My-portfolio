import React from 'react'
import './MyWork.css'
import theme_pattern from '@/assets/theme_pattern.png'
import mywork_data from '@/assets/mywork_data'
import next_icon from '../../assets/next_icon.png'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
        <p className="mywork-subtitle">
          Here are some of my recent projects showcasing my skills and passion for creating digital experiences.
        </p>
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a 
            key={index} 
            href={work.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mywork-card"
          >
            <div className="mywork-img-container">
              <img src={work.w_img} alt={work.w_name} className="mywork-img" />
              <div className="mywork-overlay">
                <h3>{work.w_name}</h3>
              </div>
            </div>
            <div className="mywork-content">
              <p>{work.w_name}</p>
              <div className="mywork-tags">
                {work.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

       <a 
        href="https://virtual-one-pi.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mywork-showmore"
       >
        <button>Show More</button>
        <img src={next_icon} alt=""/>
       </a>
    </div>
  )
}

export default MyWork
