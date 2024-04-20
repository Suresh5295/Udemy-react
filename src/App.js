import Navbar from './navbar.js';
import Categories from './categories.js';
import Saleimage from './saleimage.js';
import Recommended from './recommended.js';
import Topic from './topic.js';
import Popular from './popular.js';
import Footer from './footer.js';
function App()
{
    return(
        <div>
        <Navbar></Navbar>
  <Categories></Categories>
  <Saleimage></Saleimage>
  <Recommended></Recommended>
  <Topic></Topic>
  <Popular></Popular>
  <Footer></Footer>
  </div>
    )
}
export default App