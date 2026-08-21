import { ExplorePlansSection } from "#/components/marketing/explore-plans-section.tsx";
import { FaqAccordion, type FaqItem } from "#/components/marketing/faq-accordion.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { PrivacySecuritySection } from "#/components/marketing/privacy-security-section.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { SocialProofSection } from "#/components/marketing/social-proof-section.tsx";
import { StackIntegrationStrip } from "#/components/marketing/stack-integration-strip.tsx";
import {
	explorePlans,
	faqItems as defaultFaqItems,
	socialProof,
	stackIntegration,
} from "#/content/home-team.ts";
import type { StackIntegrationContent } from "#/content/home-team.ts";

type MarketingCloserProps = {
	stack?: boolean;
	proven?: boolean;
	pricing?: boolean;
	privacy?: boolean;
	faq?: boolean;
	faqItems?: readonly FaqItem[];
	faqTitle?: string;
	stackContent?: StackIntegrationContent;
};

export function MarketingCloser({
	stack = true,
	proven = true,
	pricing = true,
	privacy = true,
	faq = true,
	faqItems = defaultFaqItems,
	faqTitle = "Answers to common questions.",
	stackContent = stackIntegration,
}: MarketingCloserProps) {
	return (
		<>
			{stack ? <StackIntegrationStrip content={stackContent} /> : null}
			{proven ? <SocialProofSection content={socialProof} /> : null}
			{pricing ? (
				<ExplorePlansSection content={explorePlans} className="mt-0" />
			) : null}
			{privacy ? <PrivacySecuritySection /> : null}
			{faq ? (
				<SectionBand>
					<div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
						<p className="section-eyebrow mb-4">FAQ</p>
						<h2 className="text-display-lg">{faqTitle}</h2>
					</div>
					<MarketingCard
						variant="large"
						className="mx-auto max-w-3xl p-4 sm:p-6 md:p-8"
					>
						<FaqAccordion items={[...faqItems]} />
					</MarketingCard>
				</SectionBand>
			) : null}
		</>
	);
}
