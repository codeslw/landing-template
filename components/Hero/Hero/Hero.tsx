import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type HeroProps = {}

export const Hero: React.FC<HeroProps> = ({ }) => {
	return (
		<div className="mt-8 w-full relative">
			<div className="flex w-full flex-col xl:flex-row">
				<div className="flex justify-center items-center text-white flex-col">
					<div className="xl:text-[50px] font-bold xl:leading-[71.25px] lg:text-4xl text-3xl">
						Go digital with us
					</div>
					<div className="w-5/6 lg:max-w-[418px] text-lg font-normal leading-snug">
						We have designed hundreds of websites and helped improve their online performance through SEO, SEM and Social Media Marketing
					</div>
					.mt-[10px]
				</div>
			</div>

		</div>
	);
};