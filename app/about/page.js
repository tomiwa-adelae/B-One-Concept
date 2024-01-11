import Link from "next/link";

export const metadata = {
	title: "About B.one Concept",
	description: "B.one concept, ",
};

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
								B.one Concept is a retail business for affordale
								and durable mobile phone, computers, accessories
								and vairous types of Electronics. We do not just
								sell electronics gadget, we provide first-class
								after-sales support that is comparable to the
								international standards.
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
