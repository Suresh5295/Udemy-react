function Navbar()
{
    return(
        <div class="navbar">
        <div class="navbar-s1">
            <h2 class="navbar-s1__title">Udemy</h2>
        </div>
        <div class="navbar-s2">
            <i class="fa-solid fa-magnifying-glass" style={{color:" #d5206e"}}></i>
            <input placeholder="Search whatever you need.."></input>

        </div>
        <div class="navbar-s3">
            <p>Courses</p>
            <div class="learning__tab">
            <p>My learning</p>
            <div class="learning__popup">
<p> You are not purchase any course ,kindly purchase it</p>
            </div>
        </div>
            <i class="fa-solid fa-user" style={{color:" #FFD43B"}}></i>
            <i class="fa-solid fa-cart-shopping" style={{color: "#0c43a1"}}></i>
            <i class="fa-solid fa-bell" style={{color: "#c52062"}}></i>
        </div>
        <div class="navbar-s4">
            <i class="fa-solid fa-bars"></i>
        </div>

    </div>
    )
}

export default Navbar