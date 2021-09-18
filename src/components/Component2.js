import {Spring} from 'react-spring'
const Component2 = () => {
    return (
        <div>
             <Spring
        from={{ opacity: 0,  }}
        to={{ opacity: 1,  }}>
        {props => 
            <div style={props}>
                <div style={c2Style}>
                    <h1>Component1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>}
        </Spring>
        </div>
    )
}

export default Component2

const c2Style ={
    background:'slateblue',
    color:'white',
    padding: '1.5rem'
}