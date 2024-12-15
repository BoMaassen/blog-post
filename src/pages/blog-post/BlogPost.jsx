import posts from "../../constants/data.json";
import {Link, useParams} from "react-router-dom";
import Timestamp from "../../helpers/Timestamp.js";

function BlogPost() {
    const {id} = useParams();
    return (
        <main>
            <div className="blog-post">
                <h1>{posts[id - 1].title}</h1>
                <h3>{posts[id].subtitle}</h3>
                <p>Geschreven door {posts[id - 1].author} op {Timestamp(posts[id -1].created)} </p>
                <p>{posts[id - 1].readTime} minuten lezen</p>
                <p>{posts[id - 1].content}</p>
                <p>{posts[id - 1].comments} reacties - {posts[id - 1].shares} keer gedeeld </p>
            </div>
            <p><Link to="/overview"> Terug naar de overzichtspagina</Link></p>
        </main>


    )
}

export default BlogPost;