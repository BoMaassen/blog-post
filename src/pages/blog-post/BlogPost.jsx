import posts from "../../constants/data.json";
import {Link, useParams} from "react-router-dom";
import Timestamp from "../../helpers/Timestamp.js";
import "./BlogPost.css";

function BlogPost() {
    const {id} = useParams();
    return (
        <main className="blog-container">
            <article className="blog-post">
                <h1>{posts[id - 1].title}</h1>
                <h3>{posts[id].subtitle}</h3>
                <p>Geschreven door {posts[id - 1].author} op {Timestamp(posts[id - 1].created)} </p>
                <p className="readtime">{posts[id - 1].readTime} minuten lezen</p>
                <p>{posts[id - 1].content}</p>
                <p>{posts[id - 1].comments} reacties - {posts[id - 1].shares} keer gedeeld </p>
                <p><Link className="link-back" to="/overview"> Terug naar de overzichtspagina</Link></p>
            </article>

        </main>


    )
}

export default BlogPost;