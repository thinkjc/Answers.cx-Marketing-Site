export type TrustedBrand = {
	name: string;
	src: string;
	className?: string;
	showName?: boolean;
};

export const trustedBrands = [
	{
		name: "Vodafone",
		src: "/images/trusted-by/vodafone.svg",
		className: "h-9",
		showName: true,
	},
	{
		name: "Deutsche Telekom",
		src: "/images/trusted-by/deutsche-telekom.svg",
		className: "h-9",
		showName: true,
	},
	{
		name: "Pearson",
		src: "/images/trusted-by/pearson.svg",
		className: "h-9",
		showName: true,
	},
	{
		name: "Caterpillar",
		src: "/images/trusted-by/caterpillar.svg",
		className: "h-6 max-w-[9.5rem]",
	},
	{
		name: "Epson",
		src: "/images/trusted-by/epson.svg",
		className: "h-8 max-w-[10.5rem]",
	},
	{
		name: "Kellanova",
		src: "/images/trusted-by/kellanova.svg",
		className: "h-7 max-w-[8.5rem]",
	},
] as const satisfies readonly TrustedBrand[];
