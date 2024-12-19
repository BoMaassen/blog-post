import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import BlogPost from "./pages/blog-post/BlogPost.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {


    /*async function updateBlogPost() {
        try {
            const result = await axios.put("http://localhost:3000/posts/1", {
                title: "De Smaken van Italië",
                subtitle: "Een culinaire reis door Florance",
                content: "Italië, het land van heerlijke pasta, pizza en gelato, is een culinair paradijs dat elke fijnproever moet ervaren. In deze blog nemen we je mee op een smakelijke reis door Bella Italia. Ontdek de geheimen achter de perfecte risotto, leer hoe je zelfgemaakte pasta maakt en proef de verrukkelijke regionale gerechten van Noord tot Zuid. Bereid je voor om je smaakpapillen te verwennen in de keuken van de laarsvormige natie.",
                created: "2023-09-21T09:30:00Z",
                author: "Anna de Kok",
                readTime: 5,
                comments: 12,
                shares: 8

            });
            console.log("Je blog is veranderd!", result.data)
        } catch (e) {
            console.error("Er is iets mis gegaan", e);

        }

    }*/


    return (
        <>
            <div className="page-container">
                <div className="nav-content-container">
                    <Navigation/>
                    {/*<button type="button" onClick={fetchBlogs}>Klik hier voor alle blogs</button>
                    <button type="button" onClick={fetchBlogPost}>Klik hier voor blog 6</button>
                    <button type="button" onClick={sendBlogPost}>Klik hier om blog te maken</button>
                    <button type="button" onClick={deleteBlogPost}>Klik hier om blog te verwijderen</button>
                    <button type="button" onClick={updateBlogPost}>Klik hier om blog te veranderen</button>*/}

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new-post" element={<NewPost/>}/>
                        <Route path="/overview" element={<Overview/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/blog-post/:id" element={<BlogPost/>}/>
                    </Routes>
                </div>
                <div className="footer-container">
                    <Footer/>
                </div>
            </div>

        </>

    )
}

export default App
