"use client";
import React, {useEffect} from "react";
import {Modal, ModalContent, ModalBody} from "@nextui-org/react";
import Image from "next/image";
import {URL_IMAGE} from "@/constants";

const ModalActivity = ({
	isOpen,
	onClose,
	images,
}: {
	isOpen: boolean;

	onClose: () => void;
	images: any;
}) => {
	const [index, setIndex] = React.useState(0);
	useEffect(() => {
		if (isOpen) {
			setIndex(0);
		}
	}, [isOpen]);

	return (
		<>
			<Modal
				backdrop={"blur"}
				isOpen={isOpen}
				isDismissable={false}
				onClose={onClose}
				placement="center"
				classNames={{
					body: "p-0 border-2 border-green32 shadow-card rounded-2xl",
					closeButton:
						"z-[100] bg-red-500 hover:bg-red-600 text-white font-bold m-2",
					base: "lg:max-w-[80%] w-full  h-[205px] lg:h-[700px] ",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalBody>
								<div className="w-full h-full relative ">
									<Image
										src={`${URL_IMAGE}/${images[index]}`}
										alt="mb66"
										fill
										className="object-cover rounded-[20px]"
									/>
								</div>
							</ModalBody>
						</>
					)}
				</ModalContent>

				<div
					className="absolute left-10 top-[50%]  -translate-y-[50%] cursor-pointer z-[10000000] w-[10px] h-[21px] lg:w-[28px] lg:h-[56px] before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:w-12 before:h-12 before:bg-black/30 before:rounded-full"
					onClick={() => {
						if (index === 0) {
							setIndex(images.length - 1);
						} else {
							setIndex(index - 1);
						}
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						viewBox="0 0 28 56"
						fill="none"
					>
						<path d="M0 28L28 0L14 28L28 56L0 28Z" fill="#32DFC0" />
					</svg>
				</div>

				<div
					className="absolute right-10 top-[50%]  -translate-y-[50%] cursor-pointer z-[10000000] w-[10px] h-[21px] lg:w-[28px] lg:h-[56px] before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:w-12 before:h-12 before:bg-black/30 before:rounded-full"
					onClick={() => {
						if (index === images.length - 1) {
							setIndex(0);
						} else {
							setIndex(index + 1);
						}
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						viewBox="0 0 28 56"
						fill="none"
					>
						<path d="M28 28L0 0L14 28L0 56L28 28Z" fill="#32DFC0" />
					</svg>
				</div>
			</Modal>
		</>
	);
};

export default ModalActivity;
