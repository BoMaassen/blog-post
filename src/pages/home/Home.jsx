import billboard from  "../../assets/logo-black.png";
import "./Home.css";

function Home(){
    return (
        <main className="home-containaer">
            <header className='home-header'>
                <h1 className="home-h1">Bij Blogventure geloven we in de kracht van woorden*</h1>
                <span className='billboard-container'>
                    <img className="billboard-img" src={billboard}
                         alt="billboard Blogventure"/>
                </span>
            </header>
            <div className="disclaimer-div">
                <p className="disclaimer">*En in billboards. Die zijn niet te missen namelijk.</p>
            </div>
        </main>
    )
}

export default Home;