import Image from "next/image";
import * as React from "react";
import { A11y, Pagination, Scrollbar } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type PortfolioProps = {}

export const Portfolio: React.FC<PortfolioProps> = ({ }) => {



	return (
		<div className="app-container">
			<div className="w-full  md:h-[600px]  lg:h-[800px] xl:h-[864px]">
				<div className="flex flex-col w-full">
					<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-8 w-full">
						<div className="flex flex-col items-center lg:items-start space-y-[14px]">
							<div className="text-small">
								Our Product
							</div>
							<div className="text-title">
								We’ll let our work speak for itself
							</div>
							<div className="text-small">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
							</div>
						</div>
						<div className="hidden lg:flex items-ceter space-x-10 ">
							<button className="btn-navigation">
								<div className="relative w-[38px] h-[38px]">
									<Image src={"/arrow.svg"} className="rotate-180" fill alt="" />
								</div>
							</button>
							<button className="btn-navigation">
								<div className="relative w-[38px] h-[38px]">
									<Image src={"/arrow.svg"} fill alt="" />
								</div>
							</button>
						</div>
					</div>
					<div className="w-full mt-8 xs:mt-10 lg:mt-20 xl:mt-24">
						<Swiper
							modules={[Pagination, Scrollbar, A11y]}
							scrollbar
							breakpoints={{
								320: {
									slidesPerView: 1,
									pagination: { clickable: true },
									spaceBetween: 10
								},
								640: {
									slidesPerView: 2,
									spaceBetween: 10,
									pagination: true,
								},
								800: {
									spaceBetween: 30
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 30,
									pagination: false
								},
								1260: {
									slidesPerView: 3,
									spaceBetween: 107
								}
							}}
						>
							<SwiperSlide className="flex flex-col items-center justify-center space-y-9">
								<div className="relative w-[250px] h-[250px] lg:w-[270px] lg:h-[270px] xl:w-[300px]  xl:h-[300px] rounded-default overflow-hidden">
									<Image src="/swiper1.jpg" alt="" fill />
								</div>
								<div className="flex flex-col items-center">
									<div className="text-title">
										PT. ABCDE
									</div>
									<div className="text-small mt-[14px]">
										Web Development
									</div>
								</div>
								<button className="btn-primary">
									See portfolio
								</button>

							</SwiperSlide>
							<SwiperSlide className="flex flex-col items-center justify-center space-y-9">
								<div className="relative w-[250px] h-[250px] lg:w-[270px] lg:h-[270px] xl:w-[300px]  xl:h-[300px] rounded-default overflow-hidden">
									<Image src="/swiper2.jpg" alt="" fill />
								</div>
								<div className="flex flex-col items-center">
									<div className="text-title">
										Rose Wood
									</div>
									<div className="text-small mt-[14px]">
										SEO
									</div>
								</div>
								<button className="btn-primary">
									See portfolio
								</button>
							</SwiperSlide>
							<SwiperSlide className="flex flex-col items-center justify-center space-y-9">
								<div className="relative w-[250px] h-[250px] lg:w-[270px] lg:h-[270px] xl:w-[300px]  xl:h-[300px] rounded-default overflow-hidden">
									<Image src="/swiper3.jpg" alt="" fill />
								</div>
								<div className="flex flex-col items-center">
									<div className="text-title">
										CoSpace
									</div>
									<div className="text-small mt-[14px]">
										Presentation Template
									</div>
								</div>
								<button className="btn-primary">
									See portfolio
								</button>
							</SwiperSlide>
						</Swiper>
					</div>
					.
				</div>
			</div>
		</div>
	);
};