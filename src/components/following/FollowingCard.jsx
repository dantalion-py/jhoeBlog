const FollowingCard = () => {
    const name = 'makima kurosaki ichigo'
    return(
        <article className="flex justify-center items-center gap-5">
            <header>
                <img 
                    className="w-20 h-20 rounded-lg m-4"
                    src="https://aniyuki.com/wp-content/uploads/2023/02/aniyuki-makima-78.jpg"  
                    alt="image" />
                <div className="flex justify-center items-center">
                    <strong>{name}</strong>
                </div>
            </header>
            <aside>
                <button className="rounded-lg bg-green-400 hover:bg-slate-50">
                    following
                </button>
            </aside>
        </article>
    )
}
export default FollowingCard