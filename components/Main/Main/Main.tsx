import Image from "next/image";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type MainProps = {}

export const Main: React.FC<MainProps> = ({ }) => {
	return (
		<div className="h-[550px] sm:h-[600px] md:h-[650px] lg:h-[800px] xl:h-[800px]">
			<div className="w-full 2xl:h-[700px] h-[400px] lg:h-[600px] px-4 relative mt-10 lg:mt-12 lg:w-5/6 mx-auto xl:w-11/12 xl:px-7">
				<div className="absolute top-0 left-0 w-full h-[400px] lg:h-[600px] px-4 xl:px-7">
					<div className="w-full  relative h-[400px] lg:h-[600px] 2xl:h-[700px]">
						<Image fill className="rounded-xl" src={"/background.jpg"} alt="" />
					</div>
				</div>
				<div className="w-full relative h-full lg:h-full flex flex-col md:items-center z-20 lg:items-start lg:justify-start lg:flex-row 2xl:h-full xl:px-0 ">
					<div className="flex flex-col text-white md:items-start items-center lg:items-center justify-center lg:mx-auto lg:w-3/6 h-full">
						<div className="flex flex-col items-center lg:items-start">
							<div className=" text-4xl xs:text-5xl font-bold leading-[1.375] text-start">
								Go digital with us
							</div>
							<div className="max-w-[300px] xs:max-w-[350px] mt-4 text-base font-normal md:text-lg md:max-w-[400px] text-start lg:h-[108px]">
								We have designed hundreds of websites and helped improve their online performance through SEO, SEM and Social Media Marketing
							</div>
							<button className="bg-white mt-4 md:mt-[10px] rounded-button px-10 py-2 xs:px-12 xs:py-4 md:px-[53px] md:py-[18px] text-black text-xl md:text-[22px] md:leading-[1.375] flex hover:bg-dark-button hover:text-white">
								See portfolio
							</button>
						</div>
					</div>
					<div className="relative hidden lg:block w-3/6 h-full">
						<div className="xl:w-[500px] xl:h-[561px] lg:w-[400px] lg:h-[448px] absolute right-0 bottom-0">
							<Image width={500} height={500} className="rounded-xl" src={"/hero.png"} alt="" />
						</div>
					</div>
					<div className="absolute bottom-0 translate-y-[70%] left-[50%] -translate-x-[50%] w-[300px] h-[150px] xs:w-[350px] xs:h-[180px] sm:w-[450px] sm:h-[220px] md:w-[580px] md:h-[240px] lg:w-[700px] lg:h-[300px] xl:w-[1040px] xl:h-[300px] 2xl:w-[1040px] 2xl:h-[326px] 3xl:w-[1120px] 3xl:h-[326px] rounded-xl sm:rounded-2xl lg:rounded-3xl xl:rounded-[35px] bg-[#14213D]
					 text-white px-4 py-6  xs:px-6 xs:py-8 lg:px-10 lg:py-20 xl:px-11 xl:py-24
					 flex flex-col items-start justify-between bg-vector
				">
						<div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
							We are experienced
						</div>
						<div className=" text-xs sm:text-sm xl:text-lg font-normal mt-3 md:mt-4  lg:mt-5 xl:mt-7">
							We have been around for a long time since 2010, thousands of products have been created, we are always here to provide new innovations for you
						</div>
						<div className="flex justify-end w-full  mt-2 md:mt-3  lg:mt-4 xl:mt-5">
							<div className="w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 xl:w-12 xl:h-12 relative">
								<Image src={"/arrow.svg"} fill alt="" />

							</div>
						</div>
					</div>


				</div>

			</div>
		</div>
	);
};