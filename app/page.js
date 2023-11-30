import Link from 'next/link'
import {FaEarListen } from 'react-icons/fa6'

const HomePage = () => {
  return (
    <div className='home-page'>
      {/* Showcase and Intro section */}
      <div className="showcase-section">
        <div className="img">
          <div className="trans-background"></div>
          <img src="home-showcase.jpg" alt="Phone cases" />
        </div>
        <div className="intro container">
          <h3>Bold & Amazing</h3>
          <h1 className='text-primary'>GADGET ACCESSORIES</h1>
          <p>
            We handle repairs for laptops and phones. For their most important project, leading organizations and individuals rely on <strong className='text-primary'>B.one Concept</strong> to effectively match them with top-notch, vetted personnel.
          </p>
          <Link href='/contact' className="btn btn-primary">SHOP WITH US</Link>
        </div>
      </div>

      {/* Products sections */}
      <div className="products-section">
        <div className="container">
          <h4 className='text-primary'>Products</h4>
          <div className="products">
            <div className="product-box">
              <div className="img">
          <div className="trans-background"></div>
                <img src="./iphone-case.jpg" alt="Phone case" />
              </div>
              <h5>Phone Case</h5>
            </div>
            <div className="product-box">
              <div className="img">
          <div className="trans-background"></div>

                <img src="./macbook.jpg" alt="Silver Macbook" />
              </div>
              <h5>Macbook</h5>
            </div>
            <div className="product-box">
              <div className="img">
              <div className="trans-background"></div>

                <img src="./airpods.jpg" alt="White Airpods" />
              </div>
              <h5>Airpods</h5>
            </div>
            <div className="product-box">
              <div className="img">
              <div className="trans-background"></div>

                <img src="./iwatch.jpg" alt="Apple iWatch" />
              </div>
              <h5>Apple iWatch</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Smaller showcase section */}
      <div className="small-showcase section">
       <div className="container">
          <div className="img">
            <img src="macbook.jpg" alt="Silver Macbook laptop" />
          </div>
          <div className="box">
              <FaEarListen />
              <h4>We deliver high quality phone and laptop accessories at your doorsteps</h4>

              <Link className='btn btn-primary' href='/contact'>Contact Us</Link>
          </div>
        </div> 
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam cupiditate aspernatur sit? Quae sint commodi asperiores rem ad est officiis dicta, reprehenderit qui non illum dolor maxime perferendis maiores hic. Eos ut veritatis itaque aspernatur. Mollitia necessitatibus dignissimos corrupti blanditiis nesciunt reiciendis eius sunt officia rerum? Excepturi porro similique natus cupiditate voluptatum dicta exercitationem, necessitatibus quidem molestiae dolor consequatur reprehenderit inventore possimus nesciunt labore. Excepturi, at ex? Nostrum quae excepturi tenetur natus. Aspernatur error laudantium nesciunt ipsam obcaecati debitis dolor ratione, incidunt et quos beatae ullam voluptatibus sint perspiciatis numquam totam necessitatibus! Rem, facilis voluptate? Earum blanditiis commodi quo.
      </p>
    </div>
  )
}

export default HomePage