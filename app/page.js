import Link from "next/link";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HearingIcon from "@mui/icons-material/Hearing";

const HomePage = () => {
	return (
		<div className="home-page">
			{/* Showcase and Intro section */}
			<div className="showcase-section">
				<div className="img">
					<div className="trans-background"></div>
					<img src="home-showcase.jpg" alt="Phone cases" />
				</div>
				<div className="intro container">
					<h3>Bold & Amazing</h3>
					<h1 className="text-primary">GADGET ACCESSORIES</h1>
					<p>
						We handle repairs for laptops and phones. For their most
						important project, leading organizations and individuals
						rely on{" "}
						<strong className="text-primary">B.one Concept</strong>{" "}
						to effectively match them with top-notch, vetted
						personnel.
					</p>
					<Link href="/contact" className="btn btn-primary">
						SHOP WITH US
					</Link>
				</div>
			</div>

			{/* Products sections */}
			<div className="products-section">
				<div className="container">
					<h4 className="text-primary">Products</h4>
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
			<div className="small-showcase-section">
				<div className="img">
					<div className="trans-background"></div>
					<img src="laptop.jpg" alt="Silver Macbook laptop" />
				</div>
				<div className="box">
					<HearingIcon />
					<h4>
						We deliver high quality phone and laptop accessories at
						your doorsteps
					</h4>

					<Link className="btn btn-primary" href="/contact">
						Contact Us
					</Link>
				</div>
			</div>

			{/* Small section for icons and texts */}
			<div className="icon-text-section">
				<div className="container">
					<div className="boxes">
						<div className="box">
							<LocationOnIcon
								sx={{
									fontSize: {
										xs: 30,
										sm: 40,
										md: 50,
										lg: 60,
									},
								}}
							/>
							<h5>Find your products</h5>
						</div>
						<div className="box">
							<LocalShippingIcon
								sx={{
									fontSize: {
										xs: 30,
										sm: 40,
										md: 50,
										lg: 60,
									},
								}}
							/>
							<h5>Delivery & Pickup</h5>
						</div>
						<div className="box">
							<CelebrationIcon
								sx={{
									fontSize: {
										xs: 30,
										sm: 40,
										md: 50,
										lg: 60,
									},
								}}
							/>
							<h5>Enjoy your products</h5>
						</div>
					</div>
				</div>
			</div>

			{/* Customer reviews section */}
			<div className="customer-reviews-section">
				<div className="container">
					<h4 className="title">Our Customer Reviews</h4>
					<div className="customer-reviews">
						<div className="review">
							<div className="img">
								<img
									src="tomiwa-adelae.jpg"
									alt="Tomiwa Adelae"
								/>
							</div>
							<div className="content">
								<h4>&rsquo;&rsquo;</h4>
								<p>
									I love it to the core. A touch of passion
									and flawless delivery characterized the
									service. It was an experience of
									satisfaction.
								</p>
								<h4>Tomiwa Adelae</h4>
							</div>
						</div>
						<div className="review">
							<div className="img">
								<img
									src="kimberly-siakpere.jpg"
									alt="Kimberly Siakpere"
								/>
							</div>
							<div className="content">
								<h4>&rsquo;&rsquo;</h4>
								<p>
									I love it! Their service, quality of
									accessories everything. Great purchase. I
									highly recommend to everyone
								</p>
								<h4>Kimberly Siakpere</h4>
							</div>
						</div>

						<div className="contact-btn">
							<Link href="/contact" className="btn btn-primary">
								Get in touch with us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
