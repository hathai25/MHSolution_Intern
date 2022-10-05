import { useState, useEffect } from "react";

const Feed = () => {
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            
            if (entry.isIntersecting) {
                entry.target.style.backgroundColor = "#DFF6FF"
                entry.target.style.color = "#06283D"
                entry.target.style.display = "block"
            } else {
                entry.target.style.backgroundColor = "#06283D"
                entry.target.style.color = "#DFF6FF"
                entry.target.style.display = ""
            }
        })
    }, {threshold: 0.9})

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then((responses) => responses.json())
            .then((posts) => setPosts(posts.posts))
        
    }, [])

    useEffect(() => {
        const elements = document.querySelectorAll(".sad")
        console.log(elements)
        elements.forEach(element => {
            observer.observe(element)
        })
    }, [])

    return(
        <>
            {posts.map(post => (
                <div 
                    className="sad"
                    key={post.id} 
                    style={{width: "600px", margin: "auto", color: "#DFF6FF",
                    marginBottom: "10px", backgroundColor: "#06283D",
                    borderRadius: "20px", boxShadow: "10px 10px #256D85"}}>
                    <p style={{height: "100px", lineHeight: "100px"}}>
                        <strong><em>{post.title}</em></strong>
                    </p>
                    <div style={{height: "500px", lineHeight: "45px", padding: "0 50px"}}>{post.body}</div>
                </div>
            ))}    
        </>
        
    )
}

export default Feed