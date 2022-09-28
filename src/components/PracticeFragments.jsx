import React from "react"

const items = [
    {
        id: 1,
        term: "sad",
        description: "an emotion that expresses sadness"
    },
    {
        id: 2,
        term: "Iphone",
        description: "a thing that I can never buy"
    },
    {
        id: 3,
        term: "happy",
        description: "an emotion that I never get"
    }
]

const PracticeFragments = () => {
    console.log(items.map(item => item.id))
    return(
        <table style={{width: "80%", margin: "auto", border: "1px", borderStyle: "solid"}}>
            <tr style={{ border: "1px", borderStyle: "solid"}}>
                {items.map(item => (
                    <React.Fragment key={item.id}>
                        <th style={{ border: "1px", borderStyle: "solid"}}>{item.term}</th>
                    </React.Fragment>
                ))}
            </tr>
            <tr style={{ border: "1px", borderStyle: "solid"}}>
                {items.map(item => (
                    <React.Fragment key={item.id}>
                        <th style={{ border: "1px", borderStyle: "solid"}}>{item.description}</th>
                    </React.Fragment>
                ))}                    
            </tr>
            
        </table>
    )
}

export default PracticeFragments