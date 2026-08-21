import { Award, Ban, Lock, Shield, type LucideIcon } from "lucide-react";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { siteConfig } from "#/config/site.ts";
import { privacySecurityPoints } from "#/content/home-team.ts";

const privacySecurityIcons = {
	award: Award,
	shield: Shield,
	lock: Lock,
	ban: Ban,
} as const satisfies Record<
	(typeof privacySecurityPoints)[number]["icon"],
	LucideIcon
>;

export function PrivacySecuritySection() {
	return (
		<SectionBand variant="soft">
			<div className="mb-12 max-w-3xl">
				<p className="section-eyebrow mb-4">Privacy &amp; security</p>
				<h2 className="text-display-lg mb-4">
					Safe to bring to your board. Safe to connect your data.
				</h2>
				<p className="text-body-lg text-body">
					Your AI Agents only work with data you connect, under controls your
					security and legal teams can stand behind.
				</p>
			</div>
			<div className="mb-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
				{privacySecurityPoints.map((item) => {
					const Icon = privacySecurityIcons[item.icon];
					return (
						<div
							key={item.title}
							className="group relative overflow-hidden rounded-[var(--rounded-md)] border border-hairline bg-canvas p-6 shadow-[var(--shadow-elev-2)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-link/30 hover:shadow-[var(--shadow-elev-4)]"
						>
							<div
								className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-link/5 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
								aria-hidden
							/>
							<div className="relative flex gap-4">
								<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-5" aria-hidden />
								</span>
								<div>
									<h3 className="text-body-md-strong mb-2 text-ink">
										{item.title}
									</h3>
									<p className="text-body-sm leading-relaxed text-body">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="text-center">
				<Button asChild variant="outline" size="lg">
					<a
						href={siteConfig.trustCenterUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						View our Trust Center
					</a>
				</Button>
			</div>
		</SectionBand>
	);
}
