import Image from "next/image";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type CLientProps = {}

export const CLient: React.FC<CLientProps> = ({ }) => {
	return (
		<div className="px-7 w-full xl:w-11/12 relative lg:mt-20">
			<div className="w-full flex flex-col items-center">
				<div className="text-4xl text-[#303948]">Client</div>
				<div className="text-lg text-text-#303948 font-normal mt-4 lg:mt-6" >
					Using Our Experience To Make Your Digital Experience Brighter
				</div>
				<div className="flex flex-col md:items-center  md:flex-row md:justify-between  mt-4 lg:mt-10 xl:mt-14 items-center space-y-4 md:space-x-6">
					<div className="w-[200px] h-[60px] relative">
						<Image fill src="/microsoft.svg" alt="" />
					</div>
					<div className="w-[150px] h-[50px] relative">
						<Image fill src="/google.svg" alt="" />
					</div>
					<div className="w-[150px] h-[60px] relative">
						<Image fill src="/amazon.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};