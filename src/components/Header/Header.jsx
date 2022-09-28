import { useState } from "react"

const MyComponents = {
    SayHi: function SayHi(props) {
        return <div style={{padding: "10px"}}>Greeting <strong>{props.name}</strong>.</div>
    }
}


const gifts = [
    "Iphone 14",
    "Ipad Pro",
    "Macbook M2"
]


export default function Header(props) {
    
    const [task, setTask] = useState();
    const [toggle, setToggle] = useState(true);
    const [title, setTitle] = useState('');
    const [toggleTask, setToggleTask] = useState(true)
    const [gift, setGift] = useState('')

    const handleGifts = () => {
        setGift(gifts[Math.floor(Math.random() * gifts.length)])
        console.log(gifts[Math.floor(Math.random() * gifts.length)])
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const reset = () => {
        setGift('')
    }

    document.title = title

    const handleClick = () => {
        console.log("Toggled!")
        setToggle(!toggle);
    }

    const displayTask = () => {
        setToggleTask(!toggleTask)
        setTask(toggleTask ? <ul style={{ listStyleType: "none" }}>{todoList}</ul> : "");
        console.log(toggleTask)
    }

    const todoLists = [
        {
            id: 1,
            task: "code"
        },
        {
            id: 2,
            task: "clean"
        }
    ]

    const todoList = todoLists.map((todo) => 
        <li style={{ padding: "10px" }} key={todo.id}>You have to {todo.task} today!</li>
    )

    return(
        <>  
            <MyComponents.SayHi name="Shady"/>
            {task}
            <button 
                onClick={displayTask}
                style={{borderRadius: "15px", backgroundColor: "green", color: "white",
                width: "150px", padding: "10px", border: "none", marginRight: "10px"}}>
                    {toggleTask ? "Show task" : "Hide Task"}
            </button>
            <button 
                style={{marginRight: "10px", borderRadius: "15px", backgroundColor: "red", color: "white",
                width: "100px", padding: "10px", border: "none"}}
                onClick={handleClick}>
                    {toggle ? "ON" : "OFF"}
            </button>
            <input 
                placeholder="Change page title here" 
                style={{padding: "10px", borderRadius: "20px",}} 
                value={title} 
                onChange={handleChange}/>
            <div>
                <p>Receive your gifts below</p>
                <div style={{paddingBottom: "10px"}} >{gift}</div>
                <button 
                    style={{marginRight: "10px", borderRadius: "15px", backgroundColor: "orange", color: "white",
                    width: "150px", padding: "10px", border: "none"}}
                    onClick={handleGifts}>
                        Random Gifts
                </button>
                <button 
                    style={{marginRight: "10px", borderRadius: "15px", backgroundColor: "grey", color: "white",
                    width: "100px", padding: "10px", border: "none"}}
                    onClick={reset}>
                        Clear
                </button>
            </div>
        </>
    )
}