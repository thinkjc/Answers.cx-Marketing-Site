import { trustedBrands } from "#/content/trusted-brands.ts";
import { cn } from "#/lib/utils.ts";

type LogoStripProps = {
	className?: string;
};

export function LogoStrip({ className }: LogoStripProps) {
	return (
		<div className={cn("mx-auto max-w-5xl text-center", className)}>
			<ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--rounded-lg)] bg-hairline shadow-[var(--shadow-inset)] sm:grid-cols-3 lg:grid-cols-6">
				{trustedBrands.map((brand) => (
					<li
						key={brand.name}
						className="flex min-h-24 items-center justify-center bg-canvas px-4 py-5"
					>
						<div className="flex flex-col items-center gap-2.5">
							<img
								src={brand.src}
								alt={brand.showName ? "" : brand.name}
								className={cn(
									"w-auto object-contain opacity-90",
									brand.className,
								)}
							/>
							{brand.showName ? (
								<p className="text-caption font-medium tracking-[0.04em] text-ink">
									{brand.name}
								</p>
							) : null}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
