import React, {Component} from "react";
import axios from 'axios'

class Post extends Component{
    state={
        post:null
    }
    componentDidMount(){
        // console.log(this.props)
        let id=this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then(res=>{
            this.setState({
                post:res.data
            })
            console.log(res.data)
        })    
    }

    render(){
        const post=this.state.post ? (
            <div className='my-5 container'>
                <h4 className="text-danger my-2">{this.state.post.title}</h4>
                <p className="text-success">{this.state.post.body}</p>
            </div>
        ):(
            <div>Loading Post... </div>
        )
        return(
            <div>
                {post}
            </div>
        )
    }
}

export default Post;