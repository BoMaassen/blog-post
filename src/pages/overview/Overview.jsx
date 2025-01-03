import "./Overview.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
function Overview(){
    const [allBlogs, setAllBlogs] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchBlogs() {
            toggleError(false);
            toggleLoading(true);
            try {
                const result = await axios.get("http://localhost:3000/posts");
                console.log(result.data)
                setAllBlogs(result.data)
            } catch (e) {
                console.error("Er is iets mis gegaan probeer het opniew",e);
                toggleError(true);
            }finally {
                toggleLoading(false);
            }

        }
      fetchBlogs();
    }, []);

    if (loading) {return <main className="blog-container"><header><h1>Een moment geduld..</h1></header></main>}

    return (
        <main className="overview-container">
            <header className="overview-header">
                {error ? <h1 className="error-message">Er is iets misgegaan met het ophalen. Probeer het
                    opnieuw!</h1> : <h1 >Bekijk alle {allBlogs.length} posts op het platform</h1>}
            </header>
            <section className="overview-section">
                {Object.keys(allBlogs).length > 0 &&
                <ul>
            {allBlogs.map((blog) => {
                return <li key={blog.id}>
                    <article className={"blog-post-link"}>
                        <Link to={`/blog-post/${blog.id}`}>
                        <div className="blog-title">
                        <h2>{blog.title} </h2> <p className="author"> ({blog.author})</p>
                        </div>
                        </Link>
                        <p className="blog-stats">{blog.comments} reacties - {blog.shares} keer gedeeld</p>
                    </article>
                </li>
            })}
            </ul>}
            </section>
        </main>
    )
}

export default Overview;