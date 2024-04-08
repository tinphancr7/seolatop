import {RankLogo} from "@/interfaces";
import {IoLocationSharp} from "react-icons/io5";
import {MdEmail, MdLocalPhone} from "react-icons/md";
import {
	hi88,
	hi88mobile,
	img789bet,
	img789betmobile,
	jun88,
	jun88mobile,
	mb66,
	mb66mobile,
	new88,
	new88mobile,
} from "../../public";

const listMenuHeader = [
	{
		id: 1,
		name: "Trang chủ",
		path: "/",
	},
	{
		id: 2,
		name: "Giới thiệu",
		path: "/gioi-thieu",
	},
	{
		id: 3,
		name: "Blog",
		path: "/blog",
	},
	{
		id: 4,
		name: "Hoạt động",
		path: "/hoat-dong",
	},
	{
		id: 5,
		name: "Dự án",
		path: "/du-an",
	},
	{
		id: 6,
		name: "Liên hệ",
		path: "/lien-he",
	},
];
const listMenuBlog = [
	{
		id: 1,
		name: "Kinh nghiệm",
	},
	{
		id: 2,
		name: "Công cụ",
	},
	{
		id: 3,
		name: "Đời sống",
	},
];

const rankLogo: RankLogo = {
	highlight: {
		name: "highlight",
		url: "highlight.png",
		width: "182px",
		height: "206px",
		widthImg: "84px",
		heightImg: "84px",
		top: "22%",
		bottom: "63px",
	},
	master: {
		name: "master",
		url: "master.png",
		width: "w-[80px] lg:w-[182px]",
		height: "h-[90px] lg:h-[206px]",
		widthImg: "w-9 lg:w-[84px]",
		heightImg: "h-9 lg:h-[84px] ",
		top: "22%",
		bottom: "62px",
	},
	seo: {
		name: "seo",
		url: "seo.png",
		width: "200px",
		height: "226px",
		widthImg: "86px",
		heightImg: "86px",
		top: "30%",
		bottom: "60px",
	},
	diamond: {
		name: "diamond",
		url: "diamond.png",
		width: "200px",
		height: "205px",
		widthImg: "90px",
		heightImg: "90px",
		top: "29%",
		bottom: "48px",
	},
	platinum: {
		name: "platinum",
		url: "platinum.png",
		width: "156px",
		height: "160px",
		widthImg: "86px",
		heightImg: "86px",
		top: "23%",
		bottom: "30px",
	},
	gold: {
		name: "gold",
		url: "gold.png",
		width: "115px",
		height: "118px",
		widthImg: "80px",
		heightImg: "80px",
		top: "17%",
		bottom: "16px",
	},
	bronze: {
		name: "bronze",
		url: "bronze.png",
		width: "108px",
		height: "111px",
		widthImg: "80px",
		heightImg: "80px",
		top: "15%",
		bottom: "18px",
	},
};

const listPartners = [
	{name: "789bet", url: img789bet},
	{name: "jun88", url: jun88},
	{name: "mb66", url: mb66},
	{name: "new88", url: new88},
	{name: "hi88", url: hi88},
];
const listPartnersMobile = [
	{name: "789bet", url: img789betmobile},
	{name: "jun88", url: jun88mobile},
	{name: "mb66", url: mb66mobile},
	{name: "new88", url: new88mobile},
	{name: "hi88", url: hi88mobile},
];
const ListMenuMobile = [
	{
		name: "Trang chủ",
		icon: "/images/home.png",
		area: "w-[58px] h-[30px] ",
		link: "/",
	},
	{
		name: "Blog",
		icon: "/images/blog.png",
		area: "w-[30px] h-[30px] ",
		link: "/blog",
	},
	{
		name: "Hoạt động",
		icon: "/images/activity.png",
		area: "w-9 h-9 ",
		link: "/hoat-dong",
	},
	{
		name: "Dự án",
		icon: "/images/project.png",
		area: "w-[30px] h-[30px] ",
		link: "/du-an",
	},
];
const listContacts = [
	{
		name: "+84 943713223",
		Icon: MdLocalPhone,
	},
	{
		name: "contact@sed.edu.vn",
		Icon: MdEmail,
	},
	{
		name: "Tầng 1, Số 4 Nguyễn Thị Minh Khai, Quận 1, Thành phố Hồ Chí Minh",
		Icon: IoLocationSharp,
	},
];
const URL_IMAGE = "http://109.123.229.78:9000/kaizen";
export {
	listMenuHeader,
	rankLogo,
	listPartners,
	ListMenuMobile,
	URL_IMAGE,
	listMenuBlog,
	listContacts,
	listPartnersMobile,
};
