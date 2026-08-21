import { cn } from "#/lib/utils.ts";

type SiteLogoProps = {
	className?: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
	return (
		<span className={cn("inline-flex items-center", className)}>
			<img
				src="/logo-answers-wordmark.png"
				alt="Answers.cx"
				className="h-6 w-auto sm:h-7"
				width={168}
				height={30}
				decoding="async"
			/>
		</span>
	);
}
