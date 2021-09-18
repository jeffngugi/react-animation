import {useSpring, animated} from 'react-spring'
import './App.css'
const App = () => {
  const props = useSpring({
    from: {
      left: "0%",
      bottom: "100%",
      width: "100%",
      height: "100vh",
      background: "#4D806B",
      marginTop:"-500px"
    },
    to: async (next) => {
      await next({
        left: "0%",
        bottom: "0%",
        width: "100%",
        height: "100vh",
        background: "#4D806B",
        marginTop:"0px"
      });
    },
  });

  return (
    <animated.div className='main' style={props}>
      tech
    </animated.div>
  )
}

export default App
