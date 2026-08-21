import type { LegalDocumentContent } from "#/content/types.ts";

export const termsOfService = {
	seo: {
		title: "Terms of Service",
		description:
			"Terms of Service for Answers.cx services provided by ChatLingual, Inc.",
		path: "/legal/terms-of-service",
	},
	title: "Terms of service",
	version: "v1.0.0",
	lastUpdated: "January 4, 2025",
	sections: [
		{
			heading: "1. Acceptance of Terms",
			body: 'By using Answers.cx ("the Service"), you agree to these Terms, our Privacy Policy, and any other rules or guidelines that we may communicate to you. These Terms apply to all visitors, users, and others who access the Service ("Users").',
		},
		{
			heading: "2. Eligibility",
			body: "You must be at least 18 years old or have parental/guardian consent to use our Service. By using the Service, you confirm that you have the legal capacity to agree to these Terms.",
		},
		{
			heading: "3. Account Registration",
			body: "You are responsible for providing accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use of your account.",
		},
		{
			heading: "4. Use of the Service",
			body: "You agree not to: use the Service for any unlawful purpose; interfere with or disrupt the integrity or performance of the Service; or attempt to gain unauthorized access to the Service or related systems. We reserve the right to suspend or terminate accounts violating these Terms.",
		},
		{
			heading: "5. Payment and Subscription",
			body: "Certain features of the Service may require payment. All fees are non-refundable unless otherwise stated. We may change pricing or subscription terms with prior notice.",
		},
		{
			heading: "6. Content and Intellectual Property",
			body: "All content on the Service, including text, images, and software, is owned by ChatLingual, Inc. dba Answers.cx or its licensors. You may not copy, modify, distribute, or create derivative works without explicit permission. By submitting content to the Service, you grant us a non-exclusive, royalty-free license to use, modify, and display your content.",
		},
		{
			heading: "7. Termination",
			body: "We may suspend or terminate your access to the Service at our sole discretion, with or without notice, for any violation of these Terms or other legitimate reasons.",
		},
		{
			heading: "8. Disclaimer of Warranties",
			body: 'The Service is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee the accuracy, completeness, or reliability of the Service.',
		},
		{
			heading: "9. Limitation of Liability",
			body: "To the fullest extent permitted by law, ChatLingual, Inc. dba Answers.cx shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.",
		},
		{
			heading: "10. Changes to Terms",
			body: 'We reserve the right to modify these Terms at any time. We will notify you of changes by updating the "Last Updated" date. Continued use of the Service constitutes acceptance of the revised Terms.',
		},
		{
			heading: "11. Governing Law",
			body: "These Terms are governed by the laws of the State of Colorado, without regard to its conflict of laws principles.",
		},
		{
			heading: "12. Contact Us",
			body: "For questions or concerns about these Terms, please contact us at https://answers.cx/contact. By using our Service, you agree to these Terms of Service.",
		},
	],
} satisfies LegalDocumentContent;

export const privacyPolicy = {
	seo: {
		title: "Privacy Policy",
		description:
			"How ChatLingual, Inc. dba Answers.cx collects, uses, and protects personal information.",
		path: "/legal/privacy-policy",
	},
	title: "Privacy policy",
	version: "v1.0.0",
	lastUpdated: "January 4, 2025",
	sections: [
		{
			heading: "1. Information We Collect",
			body: "We may collect personal information, such as your name, email address, phone number, or other identifiable information you provide when registering, subscribing to newsletters, or contacting us. Additionally, we may collect usage data, such as your IP address, browser type, pages visited, and other usage details when you interact with the Site. We also use cookies and similar technologies to enhance your experience.",
		},
		{
			heading: "2. How We Use Your Information",
			body: "We may use the information we collect to provide, maintain, and improve the Site. This includes personalizing your experience and responding to your inquiries, as well as sending newsletters, promotions, or other marketing communications with your consent. We also use the information to monitor usage and improve the functionality of the Site, and to comply with legal obligations.",
		},
		{
			heading: "3. Sharing Your Information",
			body: "We may share your information with trusted third-party service providers who assist us in operating the Site, conducting business, or servicing you. Additionally, we may disclose your information to comply with legal obligations or to protect our rights. We do not sell, rent, or trade your personal information.",
		},
		{
			heading: "4. Data Security",
			body: "We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, please note that no data transmission over the internet or method of electronic storage can be guaranteed to be 100% secure.",
		},
		{
			heading: "5. Your Rights and Choices",
			body: "You have the right to access, update, or correct your personal information. You can also opt out of receiving marketing communications. Additionally, you may request the deletion of your personal information, subject to certain exceptions.",
		},
		{
			heading: "6. Third-Party Links",
			body: "The Site may contain links to third-party websites that are not operated by us. We are not responsible for the content or privacy practices of these sites. We encourage you to review their privacy policies.",
		},
		{
			heading: "7. Children's Privacy",
			body: "The Site is not intended for individuals under the age of 13, and we do not knowingly collect personal information from children. If you believe we have collected such information, please contact us immediately.",
		},
		{
			heading: "8. Changes to This Privacy Policy",
			body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.",
		},
		{
			heading: "9. Contact Us",
			body: "If you have any questions about this Privacy Policy or our data practices, please contact us at https://answers.cx/contact.",
		},
	],
} satisfies LegalDocumentContent;

export const legalDocuments = [termsOfService, privacyPolicy] as const;
