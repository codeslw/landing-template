import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type DrawerProps = {
	open: boolean,
	handleClose: () => void
}

export const Drawer: React.FC<DrawerProps> = ({ open, handleClose }) => {
	const menuItems = ["About", "Services", "Clients", "Blog", "Contact"]
	return (open ? <>

		<div onClick={(e) => {
			e.stopPropagation()
			handleClose()
		}} className="fixed bg-black pointer-events-none  bg-opacity-50 w-screen h-full min-h-full top-0 left-0 z-40  sm:hidden overflow-hidden"></div>
		<div className="fixed w-80 h-screen left-0  top-0  bg-white px-0 py-4 flex flex-col items-center sapce-y-5 z-40 sm:hidden">
			<div onClick={handleClose} className="flex w-full justify-end px-4">
				<div className="w-8 h-8 rounded-lg hover:bg-gray-300 font-extrabold flex items-center justify-center text-xl">x</div>
			</div>
			{menuItems.map((item) => (<div className="text-lg w-full font-medium flex justify-center py-2 hover:bg-gray-200">{item}</div>))}
		</div>
	</> : <></>
	);
};