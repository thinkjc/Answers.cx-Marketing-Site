export type PageSeoContent = {
	title: string;
	description: string;
	path: string;
	noIndex?: boolean;
};

export type LegalDocumentContent = {
	seo: PageSeoContent;
	title: string;
	version?: string;
	lastUpdated: string;
	sections: { heading: string; body: string }[];
};
