import { useParams} from "react-router-dom";

function BlogPost(){
    const {id} = useParams();
    return(
        <h1>Blog post {id}</h1>
    )
}

export default BlogPost;