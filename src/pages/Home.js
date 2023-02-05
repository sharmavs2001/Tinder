import Nav from "../components/Nav";

const Home = () => {

    const authToken=false
    return (
        <div className="overlay">    
        <Nav authToken={authToken}/>
        <div className="home">
            <h1>Swipe Right®</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken?'Signout' : 'Create Account'}
            </button>
        </div>
        </div>
        
    );
}
export default Home

function handleClick(){
    
}