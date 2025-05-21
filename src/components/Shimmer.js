const Shimmer=()=>{
    return (
        <div className="shimmer">
        <div className="top-body">
                <div className="search">
                    <input type="search" placeholder="Search for Restaurant" className="search-bar"></input>
                    <i className="fa-solid fa-magnifying-glass" style={{color:" #ff0000",padding:"15px"}}></i>
                </div>
                <button className="top-btn">Top Restaurants 🔥</button>
        </div>
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            
        </div>
        </div>
    );
}
export default Shimmer;