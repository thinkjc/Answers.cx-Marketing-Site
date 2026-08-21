import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

import { ChatWithAgentsSection } from "#/components/marketing/chat-with-agents-section.tsx";
import { CustomAgentsSection } from "#/components/marketing/custom-agents-section.tsx";
import { HireYourTeamHeroGraphic } from "#/components/marketing/hire-your-team-hero-graphic.tsx";
import { MarketingCloser } from "#/components/marketing/marketing-closer.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SpecialistsExplorer } from "#/components/marketing/specialists-explorer.tsx";
import { TrustedByCarousel } from "#/components/marketing/trusted-by-carousel.tsx";
import { Button } from "#/components/ui/button.tsx";
import {
	assistants,
	chatWithAgents,
	customAgents,
	specialistsSection,
} from "#/content/ai-assistants-team.ts";

export function AiAssistantsTeamPage() {
	return (
		<>
			<section className="marketing-hero !pb-6 md:!pb-8">
				<MeshGradient />
				<div
					className="signal-grid marketing-hero-atmosphere opacity-70"
					aria-hidden
				/>
				<div className="marketing-container relative z-10">
					<div className="rise-in">
						<div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
							<div>
								<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/80 px-3 py-1 text-body-sm text-body shadow-[var(--shadow-inset)] backdrop-blur-sm">
									<Sparkles className="size-3.5 text-link" aria-hidden />
									Your AI agent team
								</div>
								<h1 className="max-w-4xl text-[2.375rem] font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-[2.5rem] sm:leading-[0.92] sm:tracking-[-0.08em] md:text-[56px] md:tracking-[-3.4px] lg:text-[72px] lg:tracking-[-4px]">
									Hire your team of AI Agents.
								</h1>
								<div className="mt-8 flex max-w-xl flex-col gap-5">
									<p className="text-body-lg text-body">
										Our AI Agents don&apos;t wait for you to ask. They monitor
										your data 24/7 and bring their Findings to you. Enable the
										ones you need, switch them off when you don&apos;t, and
										build your own for anything unique to your business.
									</p>
									<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
										<Button asChild size="lg" className="w-full sm:w-auto">
											<Link to="/contact">Book a demo</Link>
										</Button>
										<Button
											asChild
											variant="outline"
											size="lg"
											className="w-full sm:w-auto"
										>
											<Link to="/daily-signal">See how it works</Link>
										</Button>
									</div>
								</div>
							</div>
							<HireYourTeamHeroGraphic className="mx-auto w-full max-w-[560px] lg:max-w-none lg:translate-y-4" />
						</div>
						<TrustedByCarousel className="mt-10 lg:mt-12" />
					</div>
				</div>
			</section>

			<SpecialistsExplorer
				specialists={assistants}
				content={specialistsSection}
			/>

			<ChatWithAgentsSection content={chatWithAgents} />

			<CustomAgentsSection content={customAgents} />

			<MarketingCloser />

			<section className="relative overflow-hidden bg-[var(--surface-inverse)] py-[var(--spacing-4xl)] text-[var(--on-inverse)] md:py-[var(--spacing-5xl)]">
				<span
					className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/50 to-transparent"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_15%_8%,rgba(147,51,234,0.18),transparent_36%),radial-gradient(circle_at_85%_92%,rgba(94,234,212,0.1),transparent_32%)]"
					aria-hidden
				/>
				<div
					className="signal-grid pointer-events-none absolute inset-0 opacity-[0.08]"
					aria-hidden
				/>
				<div className="marketing-container relative">
					<div className="mx-auto max-w-2xl text-center">
						<p className="section-eyebrow mb-4">Get started</p>
						<h2 className="text-display-lg text-white">
							Ready to know what matters before you ask?
						</h2>
						<p className="mx-auto mt-5 max-w-xl text-body-lg text-white/65">
							Book a 30-minute demo and see the Daily Brief built on your own
							customer data—turning the signals you already own into executive
							intelligence your team can act on.
						</p>
						<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<Button asChild size="lg" className="w-full sm:w-auto">
								<Link to="/contact">Book a Demo</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="w-full border-white/25 bg-transparent text-white shadow-none hover:border-white/40 hover:bg-white/10 hover:text-white sm:w-auto"
							>
								<Link to="/daily-signal">See how it works</Link>
							</Button>
						</div>
						<p className="mt-5 text-caption text-white/45">
							30-minute walkthrough · No commitment
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
