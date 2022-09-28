const withSomeLogic = (Component) => {
    return (props) => <Component {...props}/>
}

const Button = ({onClick}) => <button>Press here</button>

const PracticeHOCs = withSomeLogic(Button)

export default PracticeHOCs