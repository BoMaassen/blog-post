import posts from "../../constants/data.json";
import "./Overview.css"
import {Link} from "react-router-dom";
function Overview(){
    return (
        <main>
            <header>
            <h1>Bekijk alle {posts.length} posts op het platform</h1>
            </header>
            <section>
            <ul>
            {posts.map((post) => {
                return <li key={post.id}>
                    <article className={"blog-post-link"}>
                        <Link to={`/blog-post/${post.id}`}>
                        <div className="blog-title">
                        <h2>{post.title} </h2> <p className="author"> ({post.author})</p>
                        </div>
                        </Link>
                        <p className="blog-stats">{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </article>
                </li>
            })}
            </ul>
            </section>
        </main>
    )
}

export default Overview;