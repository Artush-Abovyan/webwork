import React from 'react'
import Style from './style.module.css'
import backgrounddiv from './img/underforma.png'
import Loginform from './img/loginform.png'
import Ellips from './img/Ellipse.png'
import Varints from './img/varints.png'
import Vector1 from './img/Vector 1.png'
import Vector2 from './img/Vector 2.png'

export default function Section3() {
    return (
        <div className={Style.matherdiv}>
            <div className={Style.text}>
                <h1>WebWork Saves You Time for More Important Things</h1>
                <p>WebWork Bot notifies your team of the upcoming public holidays, memorial days, and non-working days, so that you or your HR don’t have to spend time doing it manually. Instead, you can spend that time on more beneficial work.</p>
            </div>
            <div className={Style.anderdiv}>
                <img
                    src={backgrounddiv}
                    alt='bacgroundforma'
                />
                <img
                    className={Style.formimg}
                    src={Loginform}
                    alt='image form login in'
                />
            </div>
            <img
                className={Style.ellips}
                src={Ellips}
            />
            <img
                className={Style.variants}
                src={Varints}
            />
            <img
            className={Style.vector1}
            src={Vector1}
            />
            <img
            className={Style.vector2}
            src={Vector2}
            />
        </div>

    )
}
