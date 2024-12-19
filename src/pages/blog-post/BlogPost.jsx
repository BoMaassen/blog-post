import {Link, useParams} from "react-router-dom";
import Timestamp from "../../helpers/Timestamp.js";
import "./BlogPost.css";
import {useEffect, useState} from "react";
import axios from "axios";

function BlogPost() {
    const {id} = useParams();
    const [blogPost, setBlogPost] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function fetchBlogPost() {
            toggleError(false);
            try {
                const result = await axios.get("http://localhost:3000/posts");
                console.log(result.data[id - 1])
                setBlogPost(result.data[id - 1]);
            } catch (e) {
                console.error("Er is iets mis gegaan probeer het opniew", e);
                toggleError(true);
            }

        }

        fetchBlogPost();
    }, []);


    return (
        <main className="blog-container">
            {error ? <h1 className="error-message">Er is iets misgegaan met het ophalen. Probeer het
                opnieuw!</h1> : <>
                {Object.keys(blogPost).length > 0 &&
                    <article className="blog-post">
                        <h1>{blogPost.title}</h1>
                        <h3>{blogPost.subtitle}</h3>
                        <p>Geschreven door {blogPost.author} op {Timestamp(blogPost.created)} </p>
                        <p className="readtime">{blogPost.readTime} minuten lezen</p>
                        <p>{blogPost.content}</p>
                        <p>{blogPost.comments} reacties - {blogPost.shares} keer gedeeld </p>
                        <p><Link className="link-back" to="/overview"> Terug naar de overzichtspagina</Link></p>
                    </article>}</>}
        </main>


    )
}

export default BlogPost;