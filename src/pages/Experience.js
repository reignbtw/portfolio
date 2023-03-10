import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e498a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2022-2023'
        iconStyle={{background: "#3e498a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> UC Berkeley Extension, Full-Stack Web Development Bootcamp</h3>
          <p> Graduation Certificate</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline lineColor='#3e498a'>
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bishop O'Dowd High School, Oakland, California
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            High School
          </h4>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience
