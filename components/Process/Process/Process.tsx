import Image from "next/image";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type ProcessProps = {}

export const Process: React.FC<ProcessProps> = ({ }) => {
	return (
		<div className="app-container">
			<div className="flex flex-col justify-center w-full items-center lg:items-start lg:flex-row md:h-[400px] lg:h-[700px] xl:h-[786px]">
				<div className="flex flex-col items-center w-full grow lg:justify-center lg:items-start space-y-8 lg:space-y-14 h-full">
					<div className="text-4xl leading-[1.5] font-medium text-text-primary">
						How does our process work?
					</div>
					<div className="text-lg font-base text-gray max-w-[480px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
					<button className="btn-primary">
						See Details
					</button>
				</div>
				<div className="hidden lg:block h-full w-full grow">
					<div className="grid w-max ml-11 xl:ml-[60px] mt-28 grid-cols-2 grid-rows-2 lg:gap-4 xl:gap-[22px] relative">
						<div className="xl:w-[250px] xl:h-[260px] lg:w-[] lg:h-[] rounded-default overflow-hidden relative">
							<Image fill src="/process1.jpg" alt="" />
						</div>
						<div className="xl:w-[250px] xl:h-[260px] lg:w-[220px] lg:h-[230px] rounded-default overflow-hidden relative">
							<Image fill src="/process1.jpg" alt="" />
						</div>
						<div className="xl:w-[250px] xl:h-[260px] lg:w-[220px] lg:h-[230px] rounded-default overflow-hidden relative">
							<Image fill src="/process1.jpg" alt="" />
						</div>
						<div className="xl:w-[250px] xl:h-[260px] z-20 lg:w-[220px] lg:h-[230px] rounded-default overflow-hidden relative">
							<Image fill src="/process1.jpg" alt="" />
						</div>
						<div className="w-20 h-20 rounded-[50%]  absolute top-0 right-0 z-20 bg-[#FCA311] bg-opacity-50 -translate-y-[40%] translate-x-[35%] backdrop-blur-[10px]">
						</div>
						<div className="absolute  bottom-0 right-0 translate-x-[28px] translate-y-[59px]">
							<div className="relative w-[200px] h-[200px]">
								<Image fill src="/dotgridorange.svg" alt="" />
							</div>
						</div>
						<div className="absolute  top-[60%] left-0 -translate-x-[50%] z-10">
							<div className="relative w-[100px] h-[100px]">
								<Image fill src="/semicircle.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>
	);
};