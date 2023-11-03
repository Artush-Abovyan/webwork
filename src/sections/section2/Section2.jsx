import React from 'react'
import Style from './style.module.css'
import image from './img/slack.png'
import forma from './img/Group 1000001119.png'
import slick from './img/Group 1000001152.png'


export default function Section2() {
    const workspace=["Workspace-with","Workspace-heigt"]

  return (
    <div className={Style.body}>
        <div className={Style.title}>
            <h1>Notify Your Team on Slack</h1>
            <img
           src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'
           width='48px'
        />
        </div>
        <div className={Style.text1}>
            <p>Add holidays and memorial days to your workspace. If you use Slack, integrate it with WebWork Bot and it will notify your team without your further intervention.</p>
        </div>
        <div className={Style.howdasitwork}>
            <h1>How does it work?</h1>
            <p>First, you write a congratulatory message for each holiday and memorial day in the settings. Then you mark each as working or non-working days, choose workspace-wide or team-wide and it’s ready.</p>
        </div>
        <div className={Style.anderdiv}>

        </div>
        <div className={Style.list}>
           <img
           src={forma}
           alt='login forma image'
           /> 
          </div>
          <div className={Style.images}>
              <img
               src={slick}
              />
          </div>
          <div>
              <div className={Style.slick}>
                  <img
                      src={image}
                      alt='slack logo'
                  />
                  <p>Connect WebWork Bot to your Slack works and receive holiday and memorial day natifications to your preferred #channel</p>
                  <button>Enabl</button>
              </div>
          </div>
        
    </div>
  )
}
