declare global {
	interface Window {
		Liferay?: LiferayJSGlobalType;
	}
}

type LiferayJSGlobalType = {
	Language: {
		get: (key: string) => string;
	};
	OAuth2: {
		getAuthorizeURL: () => string;
		getBuiltInRedirectURL: () => string;
		getIntrospectURL: () => string;
		getTokenURL: () => string;
		getUserAgentApplication: (serviceName: string) => unknown;
	};
	OAuth2Client: {
		FromParameters: (options: Record<string, unknown>) => unknown;
		FromUserAgentApplication: (userAgentApplicationId: string) => unknown;
		fetch: (url: string, options?: Record<string, unknown>) => unknown;
	};
	ThemeDisplay: {
		getCompanyGroupId: () => number;
		getPathThemeImages: () => string;
		getPortalURL: () => string;
		getScopeGroupId: () => number;
		getSiteGroupId: () => number;
		isSignedIn: () => boolean;
	};
	authToken: string;
	on: (event: string, callback: (...args: unknown[]) => void) => void;
	fire: (event: string, data?: unknown) => void;
};

export const Liferay: LiferayJSGlobalType = window.Liferay || {
	Language: {
		get: (key: string) => key,
	},
	OAuth2: {
		getAuthorizeURL: () => '',
		getBuiltInRedirectURL: () => '',
		getIntrospectURL: () => '',
		getTokenURL: () => '',
		getUserAgentApplication: (_serviceName: string) => {},
	},
	OAuth2Client: {
		FromParameters: (_options: Record<string, unknown>) => ({}),
		FromUserAgentApplication: (_id: string) => ({}),
		fetch: (_url: string, _options?: Record<string, unknown>) => {},
	},
	ThemeDisplay: {
		getCompanyGroupId: () => 20119,
		getPathThemeImages: () => '',
		getPortalURL: () => 'http://localhost:8080',
		getScopeGroupId: () => 20117,
		getSiteGroupId: () => 20117,
		isSignedIn: () => false,
	},
	authToken: '',
	on: (_event: string, _callback: (...args: unknown[]) => void) => {},
	fire: (_event: string, _data?: unknown) => {},
};
