import c4 from "./assets/images/c4.jpg"
import c2 from "./assets/images/c2.jpg"
import c3 from "./assets/images/c3.jpg"
import c1 from "./assets/images/c1.jpg"
function Recommended()
{
    return(
        <div class="recom__title">
        <h2 class="recom__title__t1">Recommended for you</h2>
        <p>Pick your best fit</p>
        <div class="recom__container">
            <div class="recom__course">
                <img src={c4} alt="c4"></img>
                <h3>Python Data Masterclass</h3>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>499 <del> 1999</del></p>
            </div>
            <div class="recom__course">
                <img src={c2} alt="c2"></img>
                <h3>Devops Automation</h3>
                <p>steve wills</p>
                <p>4.9⭐⭐⭐⭐⭐</p>
                <p>499 <del> 1999</del></p>
            </div>
            <div class="recom__course">
                <img src={c3} alt="c3"></img>
                <h3>Advanced UI/UX Design</h3>
                <p>Logan paul</p>
                <p>4.8⭐⭐⭐⭐⭐</p>
                <p>499 <del> 1999</del></p>
            </div>
            <div class="recom__course">
                <img src={c1} alt="c1"></img>
                <h3>DevSecops Automation</h3>
                <p>jack mills</p>
                <p>4.4⭐⭐⭐⭐</p>
                <p>499 <del> 1999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended