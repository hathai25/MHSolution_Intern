import React from "react"

//import { useState } from "react"

class Time extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {
        return(
            <>
            <h3 style={{color: "red"}}>{this.state.time}</h3>
            </>
        )
    }

}

// const Time = () => {
//     const [time, setTime] = useState(new Date().toLocaleTimeString())

//     setInterval(() => {
//         setTime(new Date().toLocaleTimeString())
//     }, 1000)
    
//     return(
//         <>
//         <h3>{time}</h3>
//         </>
//     )
// }

export default Time