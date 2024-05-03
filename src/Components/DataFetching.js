import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
     
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [buttonClick, setButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
            .then((res) => {
                console.log(res)
                setPost(res.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }, [buttonClick])

    const handleClick = () => {
        setButtonClick(id)
    }

  return (
    <div>
        <input type='text' value={id} onChange={event => setId(event.target.value)}/>
        <button onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
        {/* <ul>
            {posts.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul> */}
    </div>
  )
}

export default DataFetching
