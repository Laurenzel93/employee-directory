const Navbar = (props) => {
    return (
        <div className='jumbotron bg-primary'>
            <h1>User Directory</h1>
            <nav className="navbar bg-primary justify-content-center">
                <form onSubmit={props.handleFormSubmit}>
                    <input
                        type="search"
                        placeholder="Search"
                        onChange={props.handleInputChange} />
                    <button className="btn btn-outline-light" type="submit">Go</button>
                </form>
            </nav>
        </div>
    );
}

export default Navbar;