interface BackgroundImgPropsInterface {
	backgroundImage: string;
	backgroundSize?: string;
	backgroundRepeat?: string;
	backgroundPosition?: string;
}

class BackgroundImgProps {
	static SrcCentered(src: string): BackgroundImgPropsInterface {
		return {
			backgroundImage: `url(${src})`,
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
		};
	}
}

export { BackgroundImgProps };
export type { BackgroundImgPropsInterface };
