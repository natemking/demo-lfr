export type UserAccountType = {
	accountBriefs: {
		externalReferenceCode: string;
		id: number;
		name: string;
		roleBriefs: {
			externalReferenceCode: string;
			id: number;
			name: string;
			name_i18n: Record<string, string>;
			'x-class-name': string;
		}[];
		'x-class-name': string;
	}[];

	actions: Record<string, Record<string, string>>;

	additionalName: string;
	alternateName: string;
	birthDate: string; // ISO date string

	customFields: {
		customValue: {
			data: Record<string, unknown>;
			data_i18n: Record<string, string>;
			geo: {
				latitude: number;
				longitude: number;
				'x-class-name': string;
			};
			'x-class-name': string;
		};
		dataType: string;
		name: string;
		'x-class-name': string;
	}[];

	dashboardURL: string;
	dateCreated: string;
	dateModified: string;
	emailAddress: string;
	externalReferenceCode: string;
	familyName: string;
	givenName: string;
	hasLoginDate: boolean;
	honorificPrefix: string;
	honorificSuffix: string;
	id: number;
	image: string;
	imageExternalReferenceCode: string;
	imageId: number;
	jobTitle: string;
	keywords: string[];
	languageDisplayName: string;
	languageId: string;
	lastLoginDate: string;
	name: string;

	organizationBriefs: {
		externalReferenceCode: string;
		id: number;
		name: string;
		roleBriefs: {
			externalReferenceCode: string;
			id: number;
			name: string;
			name_i18n: Record<string, string>;
			'x-class-name': string;
		}[];
		'x-class-name': string;
	}[];

	profileURL: string;

	roleBriefs: {
		externalReferenceCode: string;
		id: number;
		name: string;
		name_i18n: Record<string, string>;
		'x-class-name': string;
	}[];

	siteBriefs: {
		descriptiveName: string;
		descriptiveName_i18n: Record<string, string>;
		externalReferenceCode: string;
		id: number;
		name: string;
		name_i18n: Record<string, string>;
		roleBriefs: {
			externalReferenceCode: string;
			id: number;
			name: string;
			name_i18n: Record<string, string>;
			'x-class-name': string;
		}[];
		'x-class-name': string;
	}[];

	userAccountContactInformation: {
		emailAddresses: {
			emailAddress: string;
			externalReferenceCode: string;
			id: number;
			primary: boolean;
			type: string;
			'x-class-name': string;
		}[];
		facebook: string;
		id: number;
		jabber: string;
		postalAddresses: {
			addressCountry: string;
			addressCountry_i18n: Record<string, string>;
			addressLocality: string;
			addressRegion: string;
			addressType: string;
			externalReferenceCode: string;
			id: number;
			name: string;
			phoneNumber: string;
			postalCode: string;
			primary: boolean;
			streetAddressLine1: string;
			streetAddressLine2: string;
			streetAddressLine3: string;
			'x-class-name': string;
		}[];
		skype: string;
		sms: string;
		telephones: {
			extension: string;
			externalReferenceCode: string;
			id: number;
			phoneNumber: string;
			phoneType: string;
			primary: boolean;
			'x-class-name': string;
		}[];
		twitter: string;
		webUrls: {
			externalReferenceCode: string;
			id: number;
			primary: boolean;
			url: string;
			urlType: string;
			'x-class-name': string;
		}[];
		'x-class-name': string;
	};

	userGroupBriefs: {
		description: string;
		externalReferenceCode: string;
		id: number;
		name: string;
		'x-class-name': string;
	}[];

	'x-class-name': string;
	gender: 'Male' | 'Female' | 'Other' | string;
	status: 'Active' | 'Inactive' | string;
};
