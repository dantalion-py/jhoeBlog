const Information = () => {
    return(
        <section className="grid justify-center items-center grid-cols-4 grid-rows-4 bg-red-500 ">
            <div className="flex justify-center items-center col-start-1 col-end-2 row-start-1 row-end-2">
                <h1>Information 1</h1>
            </div>
            <div className="flex justify-center items-center col-start-3 col-end-4 row-start-1 row-end-2">
                <h1>Information 2</h1>
            </div>
            <div className="flex justify-center items-center col-start-1 col-end-4 row-start-2 row-end-3">
                <h1>Information 3</h1>
            </div>
            <div className="flex justify-center items-center col-start-1 col-end-4 row-start-3 row-end-4">
                <h1>Information 4</h1>
            </div>
        </section>
    )
}
export default Information;