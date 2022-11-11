import Image from "next/image";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type TestimonalsProps = {}

export const Testimonals: React.FC<TestimonalsProps> = ({ }) => {
	return (
		<div className="app-container">
			<div className="xl:h-[680px]  lg:[650px] md:h-[650px] flex flex-col lg:flex-row w-full">
				<div className="hidden lg:flex lg:w-5/12 xl:w-[472px] relative">
					<div className="absolute rounded-[50%] bottom-[30%] lg:-right-[10%] xl:right-[5%] w-[100px] h-[100px] bg-[#FCA311] bg-opacity-50 z-20 backdrop-blur-[10px]">
					</div>
					<div className="absolute z-0 top-[18%] -translate-x-[50px] left-[0] w-[100px] h-[100px] bg-[#FCA311] bg-opacity-50  backdrop-blur-[10px]">
					</div>
					<div className="absolute top-0 right-0 translate-x-[60px] -translate-y-[88px]">
						<div className="relative w-[200px] h-[200px] top-6 right-10">
							<Image src="/dotgrid.svg" fill alt="" />

						</div>
					</div>
					<div className="xl:h-[622px] relative overflow-hidden">

						<Image src="/testimonals.jpg" className="rounded-default z-20" width={398} height={600} alt="" />
						<div className="absolute w-[100px] h-[100px] z-[1000] top-0 right-0 -translate-y-5 translate-x-[22%]">
							<Image src="/dotgridsmall.svg" fill alt="" />
						</div>

					</div>


				</div>
				<div className="flex flex-col xl:mt-[130px] w-full items-center lg:items-start lg:w-[692px] xl:w-[732px] px-8">
					<div className="text-title">
						Testimonials by them
					</div>
					<div className="text-small mt-4 lg:mt-[22px] md:max-w-[550px] lg:max-w-[500px]  xl:max-w-[627px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span className="font-bold">-Joe Z</span>
					</div>
					<div className="flex justify-end w-full items-center space-x-10 mt-24 xl:mt-36">
						<div className="btn-navigation">
							<div className="relative w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]">
								<Image fill src={"/arrow_left.svg"} alt="" />

							</div>
						</div>
						<div className="btn-navigation">
							<div className="relative lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]">
								<Image fill src={"/arrow_left.svg"} className="rotate-180" alt="" />
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};