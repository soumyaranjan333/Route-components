
import React, { Component } from "react"
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div class="card container my-4" key={post.id}>
                     <Link to={'/'+post.id}><h5 class="card-header bg-warning">{post.title}</h5></Link>
                        <div class="card-body">
                            <p class="card-text">{post.body}</p>    
                        </div>
                    </div>
                )
            })
        ) : (
            <div>No posts yet...</div>
        )
        return (
            <>
             {postList}   
            </>
        )
    }
}
export default Home;