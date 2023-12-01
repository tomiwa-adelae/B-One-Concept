import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactPage = () => {
	return (
		<div className="contact-page">
			{/* Showcase and Intro section */}
			<div className="showcase-section">
				<div className="img">
					<div className="trans-background"></div>
					<img src="tele-phone.jpg" alt="Telephone" />
				</div>
				<div className="intro container">
					<h1 className="text-primary">Contact Us</h1>
				</div>
			</div>

			{/* Contact Content */}
			<div className="contact-section">
				<div className="container">
					<div className="content">
						<div className="head">
							<h4 className="text-primary">
								Contact our friendly team
							</h4>
							<p>Let us know how we can help you</p>
						</div>
						<div className="boxes">
							<div className="box">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="mailto:b.one_concept@yahoo.com"
								>
									<EmailIcon
										sx={{ fontSize: 50 }}
										className="text-primary"
									/>
								</a>

								<h4>Chat to support</h4>
								<small>We are here to help</small>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="mailto:b.one_concept@yahoo.com"
								>
									<h5>b.one_concept@yahoo.com</h5>
								</a>
							</div>
							<div className="box">
								<LocationOnIcon
									sx={{ fontSize: 50 }}
									className="text-primary"
								/>
								<h4>Visit us</h4>
								<small>Visit our office</small>
								<h5>
									Computer Village, 1A, Medical Road, Ikeja,
									100282, Lagos, Nigeria
								</h5>
							</div>
							<div className="box">
								<a href="tel: +234 802 848 4922">
									<PhoneIcon
										sx={{ fontSize: 50 }}
										className="text-primary"
									/>
								</a>

								<h4>Call us</h4>
								<small>Mon - Fri from 9:00am to 5:00pm</small>
								<a href="tel: +234 802 848 4922">
									<h5>+234 802 848 4922</h5>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
