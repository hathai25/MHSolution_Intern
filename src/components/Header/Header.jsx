import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Time from "../Time/Time"

//introducing JSX
const user = ""

function getGreeting(user) {
    if (user) {
        return(<h1>Hello, {user}</h1>)
    } else {
        return(<h1>Hello Stranger</h1>)
    }
}

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div style={{padding: "10px"}}>Imagine a {props.color} datepicker here.</div>
    },
    SayHi: function SayHi(props) {
        return <div style={{padding: "10px"}}>Greeting {props.name}.</div>
    }
}
//PropTypes
function Menu(props) {
    return(
        <ul style={{ listStyleType: "none"}}>
            <li>Food: {props.name}</li>
            <li>Price: {props.price}</li>
            <li>Description: {props.description}</li>
            <li>Test props {props.test}</li>
        </ul>
    )
}
Menu.propTypes = {
    name: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    description: PropTypes.string.isRequired
}
//defaultProps
Menu.defaultProps = {
    name: "Banh mi",
    price: 100,
    description: "Contain eggs and sausages"
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
    const [value, setValue] = useState('')
    const [gift, setGift] = useState('')

    const handleGifts = () => {
        setGift(gifts[Math.floor(Math.random() * gifts.length)])
        console.log(gifts[Math.floor(Math.random() * gifts.length)])
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    const upperInput = () => {
        setValue(value.toUpperCase)
    }

    const handleChanges = (e) => {
        setValue(e.target.value)
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
        setTask(<ul style={{ listStyleType: "none" }}>{todoList}</ul>);
    }

    const handleSubmit = () => {
        alert("An essay was submitted: " + value)
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
            <div>
                {getGreeting(user)}
            </div>
            {task}
            <button onClick={displayTask}>Show task</button>
            <MyComponents.DatePicker color="blue"/>
            <MyComponents.SayHi name="Shady"/>
            <Time/>
            <button onClick={handleClick}>{toggle ? "ON" : "OFF"}</button>
            <Menu/>
            <br/>
            <input style={{margin: "10px"}} value={title} onChange={handleChange}/>
            <br/>
                <label style={{margin: "10px"}} htmlFor="">
                    Name:
                    <input type="text" name="name" />
                </label>
                <label style={{margin: "10px"}} htmlFor="">
                    Essay:
                    <textarea value={value} onChange={handleChanges}></textarea>
                </label>
                <button onClick={upperInput}>Uppercase</button>
            <div>
                <p>Receive your gifts here</p>
                <div style={{paddingBottom: "10px"}} >{gift}</div>
                <button onClick={handleGifts}>Gifts</button>
                <button onClick={reset}>Clear</button>
            </div>
        </>
    )
}