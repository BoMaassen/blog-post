import {useForm} from "react-hook-form";
import "./NewPost.css";
import ReadingTime from "../../helpers/ReadingTime.js";
import {useNavigate} from "react-router-dom";

function NewPost(){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    function handelFormSubmit(data){
        const timestamp = new Date().toISOString()

        const newData = {
            ...data,
            "created": timestamp,
            "comments": 0,
            "shares": 0,
            "readTime": ReadingTime(data.message)
        }
        console.log(newData);
        navigate("/overview")
    }


    return (
        <main className="new-post-container">
            <header>
            <h1>Post toevoegen</h1>
            </header>

            <form onSubmit={handleSubmit(handelFormSubmit)} className="new-post-form">
                <label htmlFor="title">
                    Titel

                    <input type="text" id="title" {...register("title", {
                        required: { value:true, message:"Veld is verplicht"},})}/>
                    {errors.title && <p>{errors.title.message}</p>}
                </label>


                <label htmlFor="title">
                    Subtitel

                    <input type="text" id="subtitle" {...register("subtitle", {
                        required: { value:true, message:"Veld is verplicht"},})}/>
                    {errors.subtitle && <p>{errors.subtitle.message}</p>}
                </label>

                <label htmlFor="title">
                    Naam en achternaam

                    <input type="text" id="author" {...register("author", {
                        required:{ value:true, message:"Veld is verplicht"},})}/>
                    {errors.author && <p>{errors.author.message}</p>}
                </label>

                <label htmlFor="message">
                    Blogpost

                    <textarea id="message" {...register("message", {
                        required:{ value:true, message:"Veld is verplicht"}, minLength:{ value:300, message:"Minimaal 300 karakters"}, maxLength:{ value:2000, message:"Maximaal 2000 karakters"},})} rows="20" cols="5"></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </label>

                <button type="submit">Toevoegen</button>


            </form>
        </main>
    )
}

export default NewPost;