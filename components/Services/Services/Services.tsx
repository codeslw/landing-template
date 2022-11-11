import Image from "next/image";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type ServicesProps = {}

export const Services: React.FC<ServicesProps> = ({ }) => {
	return (
		<div className="app-container">
			<div className="flex flex-col lg:flex-row w-full lg:h-[800px] xl:h-[900px]">
				<div className="hidden lg:block w-3/6 relative h-auto bg-white mb-5">

					<div className="rounded-[50%] absolute w-[150px] h-[150px] xl:top-[398px] top-[350px] bg-[#FCA311] left-0 -translate-x-[50%] z-30"></div>
					<div className="absolute top-0 right-0 z-40 -translate-x-1.5  translate-y-[18px]">
						<Image width={200} height={200} src="/dotgrid.svg" alt="" />
					</div>
					<div className="absolute hidden lg:block z-10 rounded-[30px] xl:rounded-[35px] bg-[#E5E5E5] xl:top-[115px] left-[33px] xl:h-[743px] h-[693px] xl:w-[522px] lg:w-[400px] top-[100px]">

					</div>
					<div className="relative hidden lg:block z-20 rounded-[30px] xl:rounded-[35px]  xl:top-[69px] left-0 xl:h-[743px] h-[693px] xl:w-[522px] lg:w-[400px] top-[59px] overflow-hidden">
						<Image fill src="/services1.jpg" alt="" />
					</div>
				</div>
				<div className="w-full lg:w-3/6 flex flex-col lg:mt-20 lg:ml-3 xl:ml-6">
					<div className="flex flex-col w-full items-center lg:items-start space-y-3">
						<div className="text-lg font-normal text-text-primary">
							Who We Help
						</div>
						<div className="text-3xl sm:text-4xl font-medium text-text-primary text-center lg:text-start lg:max-w-md">
							Specific challenges require specific solutions
						</div>
						<div className="text-base lg:text-lg font-normal text-[#59616D] text-center lg:text-start">
							Some of the industries our digital agency specialises in
						</div>
					</div>
					<div className="grid grid-cols-1 grid-rows-4 gap-4 xs:grid-cols-2 xl:gap-24 lg:gap-20 xs:grid-rows-2 mt-6 lg:mt-20 xl:pt-1">
						<div className="flex flex-col items-center space-y-6 xs:items-start hover:underline underline-offset-4 cursor-pointer">
							<div className="flex flex-col items-center xs:justify-start xs:items-center w-full space-y-4 lg:space-x-6 xs:flex-row">
								<Image width={48} height={48} src="/globus.svg" alt="" />
								<div className="text-center text-base">
									Web & Mobile Apps
								</div>
							</div>
							<div className="text-lg font-normal max-w-[15rem] text-center xs:text-start">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div className="flex flex-col items-center space-y-6 xs:items-start hover:underline underline-offset-4 cursor-pointer">
							<div className="flex flex-col items-center xs:justify-start xs:items-center w-full space-y-4 lg:space-x-6 xs:flex-row">
								<Image width={48} height={48} src="/dashboard.svg" alt="" />
								<div className="text-center text-base">
									Design services
								</div>
							</div>
							<div className="text-lg font-normal max-w-[15rem] text-center xs:text-start">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div className="flex flex-col items-center space-y-6 xs:items-start hover:underline underline-offset-4 cursor-pointer">
							<div className="flex flex-col items-center xs:justify-start xs:items-center space-y-4 lg:space-x-6 xs:flex-row xs:space-y-0">
								<Image width={48} height={48} src="/dart.svg" alt="" />
								<div className="text-center text-base">
									SEO
								</div>
							</div>
							<div className="text-lg font-normal max-w-[15rem] text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div className="flex flex-col items-center space-y-6 xs:items-start hover:underline underline-offset-4 cursor-pointer">
							<div className="flex flex-col items-center xs:justify-start xs:items-center  space-y-4 lg:space-x-6 xs:flex-row xs:space-y-0">
								<Image width={48} height={48} src="/shield.svg" alt="" />
								<div className="text-center text-base">
									Security Testers
								</div>
							</div>
							<div className="text-lg font-normal max-w-[15rem] text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>

	);
};