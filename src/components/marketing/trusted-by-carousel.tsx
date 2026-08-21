import { trustedBrands, type TrustedBrand } from "#/content/trusted-brands.ts";
import { cn } from "#/lib/utils.ts";

type TrustedByCarouselProps = {
	logos?: readonly TrustedBrand[];
	className?: string;
};

export function TrustedByCarousel({
	logos = trustedBrands,
	className,
}: TrustedByCarouselProps) {
	const trackLogos = [...logos, ...logos];

	return (
		<div
			className={cn(
				"mx-auto flex w-full max-w-4xl flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8 lg:max-w-5xl",
				className,
			)}
		>
			<p className="shrink-0 text-body-sm-strong text-body">Trusted by:</p>
			<div
				className="relative min-w-0 w-full max-w-[18rem] overflow-hidden sm:max-w-[22rem] md:max-w-[26rem]"
				style={{
					maskImage:
						"linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
					WebkitMaskImage:
						"linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
				}}
			>
				<div className="trusted-by-track flex w-max items-center gap-10 py-1">
					{trackLogos.map((logo, index) => (
						<span
							key={`${logo.name}-${index}`}
							className="flex shrink-0 items-center gap-2"
						>
							<img
								src={logo.src}
								alt={logo.showName ? "" : logo.name}
								className={cn(
									"w-auto shrink-0 object-contain opacity-70",
									logo.name === "Epson"
										? "h-8 max-w-[10rem]"
										: "h-7 max-w-[7.5rem]",
								)}
							/>
							{logo.showName ? (
								<span className="whitespace-nowrap text-caption text-body">
									{logo.name}
								</span>
							) : null}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
