import React from 'react'
import Style from './style.module.css'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { AiOutlineInfoCircle} from 'react-icons/ai'
import  images  from './img/Group 1000001143.png'

export function SEction1() {
  return (
    <div>
        <div className={Style.d2}><FaRegCalendarCheck color='green' size='50px' className={Style.icon}/>
            <h2 className={Style.d3}>Automated Holiday Notifications</h2>
        </div>
        <div className={Style.d4}>
                <p className={Style.text}>Inform your team about upcoming holidays and non-working days with automated notifications. WebWork Bot does it and more for you.</p>
            </div>
            <div className={Style.d5}><button className={Style.button}>Start 14-day free trial</button>
            <p className={Style.bottonAnderText}><AiOutlineInfoCircle className={Style.icon0}/>No credit card required</p></div>
         <img
         className={Style.img}
          src={images}
         />
         <div className={Style.p}>
          <p >No more filling out sheets for <b>holidays</b>and<b>leaves</b>-WebWork has something better.A <b>Laeve Management system</b> that simplifies the process of requesting and provideing holiday and time off</p>
         </div>
         
    </div>
  )
}
