import type { LegalDocumentContent } from "#/content/types.ts";

type LegalDocumentPageProps = {
	content: LegalDocumentContent;
};

export function LegalDocumentPage({ content }: LegalDocumentPageProps) {
	return (
		<article className="mx-auto max-w-3xl">
			<h1 className="text-display-lg text-ink">{content.title}</h1>
			<p className="mt-3 text-caption text-mute">
				{content.version ? `${content.version} · ` : ""}
				Last updated: {content.lastUpdated}
			</p>
			{content.sections.map((section) => (
				<section key={section.heading} className="mt-10">
					<h2 className="text-display-sm font-medium text-ink">
						{section.heading}
					</h2>
					<p className="mt-3 text-body-md text-body">{section.body}</p>
				</section>
			))}
		</article>
	);
}
