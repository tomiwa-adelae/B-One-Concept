export const metadata = {
	title: "B.one Concept Services",
};

const ServicePage = () => {
	return (
		<div className="services-page">
			{/* Showcase and Intro section */}
			<div className="showcase-section">
				<div className="img">
					<div className="trans-background"></div>
					<img
						src="services-showcase.jpg"
						alt="The scrap of a mobile phone"
					/>
				</div>
				<div className="intro container">
					<h1 className="text-primary">Our Services</h1>
				</div>
			</div>

			{/* Sales & Repair section */}
			<div className="sales-repairs-section">
				<div className="container">
					<div className="content">
						<h4 className="text-primary">Sales & Repairs</h4>
						<p>
							Welcome to our one-stop destination for sales and
							repair solutions! At{" "}
							<span className="text-primary">B.one Concept</span>,
							we don't just offer top-notch products for sale; we
							go above and beyond by providing unparalleled repair
							services, ensuring your items remain in optimal
							condition. Explore our extensive catalog of
							cutting-edge electronics, durable appliances, and
							innovative gadgets—all carefully selected to meet
							your needs. Whether you're seeking the latest
							smartphones, reliable home appliances, or
							specialized tech gear, we've got you covered with
							quality products from trusted brands.
						</p>
					</div>
				</div>
			</div>

			{/* Showcase products */}
			<div className="products-section">
				<div className="container">
					<h4>Products</h4>
					<p>Here are some of the products we sell</p>

					<div className="products">
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>
								<img
									src="./ps4-pad.jpg"
									alt="Play Station 4 Game Pad"
								/>
							</div>
							<h5>Play Station 4 Game Pad</h5>
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
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>

								<img src="./iPhone.jpg" alt="A new Iphone" />
							</div>
							<h5>Open Box Iphone</h5>
						</div>
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>

								<img src="./camera.jpg" alt="Camera" />
							</div>
							<h5>Camera</h5>
						</div>
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>

								<img src="./charger.jpg" alt="Phone Charger" />
							</div>
							<h5>Chargers</h5>
						</div>
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>

								<img
									src="./flash-drive.jpg"
									alt="Flash drive"
								/>
							</div>
							<h5>Flash Drive</h5>
						</div>
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>

								<img src="./hard-drive.jpg" alt="Hard Drive" />
							</div>
							<h5>Hard Drive</h5>
						</div>
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>

								<img src="./keyboard.jpg" alt="Keyboard" />
							</div>
							<h5>Keyboard</h5>
						</div>
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>

								<img src="./mouse.jpg" alt="Mouse" />
							</div>
							<h5>Mouse</h5>
						</div>
						<div className="product-box">
							<div className="img">
								<div className="trans-background"></div>

								<img src="./power-bank.jpg" alt="Power Bank" />
							</div>
							<h5>Power Bank</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicePage;
