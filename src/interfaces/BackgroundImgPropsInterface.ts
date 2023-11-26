interface BackgroundImgPropsInterface {
	backgroundImage: string;
	backgroundSize?: string;
	backgroundRepeat?: string;
	backgroundPosition?: string;
}

export class BackgroundImgProps {
	static SrcCentered(src: string): BackgroundImgPropsInterface {
		return {
			backgroundImage: `url(${src})`,
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
		};
	}
}

export type { BackgroundImgPropsInterface };
