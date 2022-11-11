import Image from "next/image";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type FooterProps = {}

export const Footer: React.FC<FooterProps> = ({ }) => {
	return (
		<div className="app-container relative lg:py-0">
			<div className="absolute lg:block hidden -left-5 z-40 bottom-32">
				<div className="relative w-[100px] h-[100px] ">
					<Image src={"/dotgridmedium.svg"} alt="" fill />
				</div>
			</div>
			<div className="rounded-default w-full xl:flex xl:justify-between overflow-hidden relative h-[400px] xs:h-[350px] sm:h-[350px] md:h-[380px] lg:h-[430px] xl:h-[491px] mb-10">
				<div className="absolute top-0 left-0 bg-footer w-full bg-cover h-full">
				</div>
				<div className="flex flex-col md:flex-row md:justify-between w-5/6 mx-auto  md:mx-0 md:px-4 md:w-5/6 xl:w-[88%] py-[30px] lg:py-[55px] lg:px-[20px] xl:py-[69px] xl:px-[22px]">
					<div className="hidden h-max  z-20 md:flex flex-col space-y-10">
						<div className="relative w-[75px] h-[58px]">
							<Image fill src="/footer_logo.svg" alt="" />
						</div>
						<div className="flex flex-col md:max-w-[190px] lg:max-w-[200px] space-y-5">
							<div className="text-small">Go digital with us</div>
							<div className="text-small">50 Raya Building Call us: 123-456-678</div>
						</div>
					</div>
					<div className="flex flex-col max-w-[200px] text-start z-20 md:max-w-[190px] lg:max-w-[200px] md:hidden space-y-5">
						<div className="text-xs text-gray-50">Go digital with us 50 Raya Building Call us: 123-456-678</div>

					</div>
					<div className="z-20 mt-4 xs:mt-5 md:mt-0 grid grid-cols-2 gap-16 lg:py-[25px] xl:py-[30px]">
						<div className="flex flex-col space-y-3">
							<div className="text-medium">Company</div>
							<div className="flex flex-col space-y-5">
								<div className="text-mlight hover:underline hover:underline-offset-4 cursor-pointer">About</div>
								<div className="text-mlight hover:underline hover:underline-offset-4 cursor-pointer">Blog</div>
								<div className="text-mlight hover:underline hover:underline-offset-4 cursor-pointer">Galery</div>
								<div className="text-mlight hover:underline hover:underline-offset-4 cursor-pointer">Contact</div>

							</div>

						</div>
						<div className="flex flex-col space-y-[11px]">
							<div className="text-medium">Social Media</div>
							<div className="flex flex-col space-y-3 sm:space-y-5">
								<div className="text-mlight hover:underline hover:underline-offset-4 cursor-pointer">Facebook</div>
								<div className="text-mlight hover:underline hover:underline-offset-4 cursor-pointer">Instagram</div>
								<div className="text-mlight hover:underline hover:underline-offset-4 cursor-pointer">Twitter</div>

							</div>
						</div>
					</div>
				</div>

				<div className="hidden lg:block w-20 h-20 rounded-[20px] absolute  bg-white opacity-50 z-10 lg:top-[60px] lg:right-[45px] xl:top-[70px] xl:right-[58px]">
				</div>
				<div className="absolute hidden lg:block w-[100px] h-[100px] rounded-[50%] z-20 lg:top-20 right-0 xl:top-[90px]">
					<div className="relative w-full h-full">
						<Image src="/dotgridrounded.svg" fill alt='' />
					</div>
				</div>
				`<div className="absolute hidden lg:block -bottom-5 right-0 w-[200px] h-[200px]">
					<div className="relative w-full h-full">
						<Image src={"/conturrect.svg"} alt="" fill />
						<div className="absolute w-20 h-20 rounded-[1.25rem] bg-dark-button opacity-80 top-[56px] left-0 -translate-x-[50%]">

						</div>
					</div>

				</div>


				<div className="absolute z-20 left-[22px] text-center md:text-start text-base font-normal text-text-gray md:text-small bottom-3 sm:bottom-8">
					Copyright © 2021 Steelthemes. All Rights Reserved.
				</div>
			</div>
		</div>
	);
};