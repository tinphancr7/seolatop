import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
const Footer = dynamic(() => import("@/components/footer/Footer"));

import MenuMobile from "@/components/menuMobile/MenuMobile";
import Providers from "@/utils/providers";
import dynamic from "next/dynamic";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: {
		template: "%s | seolatop",
		default: "seolatop", // a default is required when creating a template
	},
	description: "seolatop - seo top 1 google",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Header />
					<div className="mt-[100px] lg:mt-[166px]">{children}</div>
					<Footer />
					<MenuMobile />
				</Providers>
			</body>
		</html>
	);
}
