import React from 'react'
import Style from './style.module.css'
import Img1 from './img/img1.png'
import Img2 from './img/img2.png'


export default function Section5() {
  return (
    <div className={Style.matherdiv}>
      <div className={Style.Activitymonitoring}>
        <h1>Activity Level Monitoring</h1>
        <h3>See how active your employees are during working hours. WebWork tracks activity level based on the number of mouse clicks and keystrokes. Then it gives you detailed reports which you can use to determine the productivity level of your employees.</h3>
      </div>
      <div className={Style.bec}></div>
      <div className={Style.TaskImage}>
        <h1>Task Managment</h1>
        <p>Assign tasks to your team members on WebWork. Other than time tracking, WebWork also functions as a task and project manager. You can create tasks, add priority, deadlines, write comments and track the time spent on them.</p>
        <img
        className={Style.img1}
        src={Img1}
        />
        <img
        className={Style.img2}
        src={Img2}
        />
      </div>
    </div>
  )
}
