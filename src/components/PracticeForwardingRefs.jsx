import React from "react"


const FancyButton = React.forwardRef((props, ref) => (
    <button
    style={{margin: "10px", borderRadius: "15px", backgroundColor: "#8b0000", color: "white",
    width: "150px", padding: "10px", border: "none"}}
    ref={ref}
    >
            {props.children}
        </button>
))

const ref = React.createRef();
<FancyButton ref={ref}>Click Me!</FancyButton>
console.log(ref)

const PracticeForwardingRefs = () => {
    return(
        <FancyButton ref={ref}>Click Me!</FancyButton>
        
    )
}


export default PracticeForwardingRefs