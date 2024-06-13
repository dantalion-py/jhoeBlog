import FollowingCard from "../../components/following/FollowingCard";
import NavBar from "../../components/navBar/NavBar";

const Home = () => { 
    return(
        
    <>
        <main className="flex">
            <section className="w-2/3 flex justify-center items-center h-screen bg-blue-100">
                <div className="bg-red-50">
                    <h1>Home 1</h1>
                </div>
                <div className="bg-red-50">
                    <h1>Home 2</h1>
                </div>
                <div className="bg-red-50">
                    <h1>Home 3</h1>
                </div>
            </section>
            <aside className="">
                <div> 
                    <FollowingCard />
                    <FollowingCard />
                    <FollowingCard />
                    <FollowingCard />
                </div>
            </aside>
        </main>
    </>

    )
}

export default Home;

