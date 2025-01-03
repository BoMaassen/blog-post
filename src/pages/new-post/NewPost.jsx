import {useForm} from "react-hook-form";
import "./NewPost.css";
import ReadingTime from "../../helpers/ReadingTime.js";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";


function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, toggleError] = useState(false);
    const [succes, toggleSucces] = useState(false);
    const [newBlogId, setNewBlogId] = useState(0);
    const [loading, toggleLoading] = useState(false);

    async function handelFormSubmit(data) {
        toggleError(false);
        toggleSucces(false);
        toggleLoading(true);
        try {
            const timestamp = new Date().toISOString()
            const result = await axios.post("http://localhost:3000/posts",
                {
                    title: data.title,
                    subtitle: data.subtitle,
                    content: data.content,
                    author: data.author,
                    created: timestamp,
                    readTime: ReadingTime(data.content),
                    comments: 0,
                    shares: 0
                });
            console.log(result.data);
            toggleSucces(true);
            setNewBlogId(result.data.id);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }finally {
            toggleLoading(false);
        }
    }

    if (loading) {return <main className="blog-container"><header><h1>Een moment geduld..</h1></header></main>}
    if (succes) {return <main className="blog-container"><header><h1>De blogpost is succesvol toegevoegd.</h1></header> <section> <p>Je kunt deze hier <Link
        to={`/blog-post/${newBlogId}`}> bekijken.</Link></p></section></main>
    }
    return (
        <main className="new-post-container">
            <header>
                <h1>Post toevoegen</h1>
            </header>
            <section>
                    {error && <h2 className="error-message">Er is iets misgegaan met het versturen. Probeer het
                        opnieuw!</h2>}

                    <form onSubmit={handleSubmit(handelFormSubmit)} className="new-post-form">
                        <label htmlFor="title">
                            Titel

                            <input type="text" id="title" {...register("title", {
                                required: {value: true, message: "Veld is verplicht"},
                            })}/>
                            {errors.title && <p>{errors.title.message}</p>}
                        </label>


                        <label htmlFor="title">
                            Subtitel

                            <input type="text" id="subtitle" {...register("subtitle", {
                                required: {value: true, message: "Veld is verplicht"},
                            })}/>
                            {errors.subtitle && <p>{errors.subtitle.message}</p>}
                        </label>

                        <label htmlFor="title">
                            Naam en achternaam

                            <input type="text" id="author" {...register("author", {
                                required: {value: true, message: "Veld is verplicht"},
                            })}/>
                            {errors.author && <p>{errors.author.message}</p>}
                        </label>

                        <label htmlFor="message">
                            Blogpost

                            <textarea id="content" {...register("content", {
                                required: {value: true, message: "Veld is verplicht"},
                                minLength: {value: 300, message: "Minimaal 300 karakters"},
                                maxLength: {value: 2000, message: "Maximaal 2000 karakters"},
                            })} rows="20" cols="5"></textarea>
                            {errors.content && <p>{errors.content.message}</p>}
                        </label>

                        <button type="submit">Toevoegen</button>
                    </form>
            </section>
        </main>
    )
}

export default NewPost;