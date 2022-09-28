import React from "react"

class PracticeRef extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
        this.focusTextInput = this.focusTextInput.bind(this)
    }

    focusTextInput() {
        this.textInput.current.focus()
    }

    render() {
        return (
            <div style={{marginTop: "10px"}}>
                <input 
                    type="text" 
                    ref={this.textInput}
                />
                <input 
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput} 
                />
            </div>
        )
    }
    // componentDidMount() {
    //     console.log(this.textInput)
    // }
}



export default PracticeRef