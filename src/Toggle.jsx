import React, {useState} from 'react'
import {useSpring} from 'react-spring'

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const fade = useSpring({
        color: isToggled ? '#000' : 'green',
        transform: isToggled
          ? 'translate3d(0, 15px, 0)'
          : 'translate3d(0, 15px, 0)',
        fontSize: isToggled ? '2rem' : '3rem',
      });

    return (
        <div>
            <h1>Hello </h1>
            <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        </div>
    )
}

export default Toggle
