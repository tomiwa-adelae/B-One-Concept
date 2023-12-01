import Link from "next/link";

const AboutPage = () => {
	return (
		<div className="about-page">
			{/* Showcase and Intro section */}
			<div className="showcase-section">
				<div className="img">
					<div className="trans-background"></div>
					<img src="about-showcase.jpg" alt="X-box Game Pad" />
				</div>
				<div className="intro container">
					<h1 className="text-primary">About Us</h1>
				</div>
			</div>

			{/* About Content */}
			<div className="about-content-section">
				<div className="container">
					<div className="content">
						<div className="img">
							<img
								src="motherboard.jpg"
								alt="Motherboard of a Desktop"
							/>
						</div>
						<div className="about">
							<h4 className="text-primary">
								Our Purpose is higher than profit
							</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Hic perferendis exercitationem
								numquam non corporis eligendi nemo officia velit
								doloribus dolores ipsum porro quam est
								reprehenderit sequi ex distinctio dolorum, fugit
								dolor? Maiores vitae alias aliquam repellat, in,
								quia dolorum nisi ipsum nesciunt sit dolorem hic
								eaque unde cum explicabo, est numquam? Quos amet
								optio facere corrupti laudantium delectus,
								labore consequuntur provident consequatur harum.
								Aspernatur nulla veritatis tenetur ut
								consectetur aliquid ipsam voluptatum facere
								repellat. Sunt, laborum veritatis nesciunt odit
								iusto consectetur excepturi, reprehenderit iure
								omnis molestiae quas explicabo reiciendis dicta
								assumenda quisquam veniam modi eaque earum
								itaque maiores provident! Suscipit!
							</p>
							<div className="contact-btn">
								<Link
									href="/contact"
									className="btn btn-primary"
								>
									Get in touch with us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
