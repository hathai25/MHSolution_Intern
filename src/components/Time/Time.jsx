import React from "react"

class Time extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
        }
        this.activateLasers = this.activateLasers.bind(this);
    }

    activateLasers () {
        console.log("Laser activated");
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
            <p>{this.state.time}</p>
            <button onClick={this.activateLasers}>Trigger Laser</button>
            </>
        )
    }

}

export default Time