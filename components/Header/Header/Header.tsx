import Image from "next/image";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type HeaderProps = {
	handleBurgerClick: () => void
}

export const Header: React.FC<HeaderProps> = ({ handleBurgerClick }) => {
	const menuItems = ["About", "Services", "Clients", "Blog", "Contact"]
	return (
		<div className="mx-auto px-4 items-center pt-16 md:w-full lg:w-10/12 lg:px-7 xl:w-11/12 flex justify-between">
			<div className="logo">
				<Image src="/main_logo.svg" width={75} height={58} alt="" />
			</div>
			<nav className="sm:flex  hidden sm:space-x-1 text-base text-dark-primary sm:items-center ">
				{menuItems.map((item: string) => <div className="cursor-pointer px-3 py-2 rounded-3xl hover:bg-gray-200">{item}</div>)}
			</nav>
			<div onClick={handleBurgerClick} className="flex flex-col pointer justify-between items center h-7 sm:hidden">
				<div className="w-10 h-1 rounded-md bg-gray-500"></div>
				<div className="w-10 h-1 rounded-md bg-gray-500"></div>
				<div className="w-10 h-1 rounded-md bg-gray-500"></div>
			</div>
		</div>
	);
};