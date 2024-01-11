import { Nunito } from "next/font/google";
import "../css/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Nunito({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "B.One Concept",
	description:
		"Welcome to B.one concept! Explore our online emporium offering a wide array of cutting-edge electronic accessories. From sleek phone cases to powerful chargers, stylish headphones, and innovative smart home gadgets, we've got everything you need to elevate your tech game. Dive into a world of convenience, style, and functionality with our carefully curated selection of electronic accessories designed to complement your devices and enhance your digital lifestyle. Discover the perfect fusion of innovation and convenience right at your fingertips.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
