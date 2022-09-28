import React from "react"

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
            <h3>{this.state.time}</h3>
            </>
        )
    }

}

export default Time