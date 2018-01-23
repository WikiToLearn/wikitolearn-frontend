/* Each language object has 3 attributes:
	+ filename, for specifying which file inside the `i18n` directory should be used
	+ fallback, another language key that will be used as a fallback, if null the raw translation key will be used
	+ isRTL, a boolean flag to tell if the language is right-to-left
*/
languages = {
	"it": {
		filename: "it",
		fallback: "en",
		isRTL: false
	},
	"en": {
		filename: "en",
		fallback: null,
		isRTL: true
	}
}

// the language that will be used in the building process of the skin
const currentLanguage = process.env.BUILD_LANGUAGE || "en"
if (!languages[currentLanguage]) {
	throw new Error("Undefined language: " + currentLanguage)
}
const language = languages[currentLanguage]
const fallbackLanguage = languages[language.fallback] || null

// the environment that will be considered when building the skin, either `production` or `development`
const nodeEnv = process.env.NODE_ENV || "development"
const runningEnv = process.env.RUNNING_ENV || "local"
// const clientApiHostname = process.env.CLIENT_API_HOSTNAME || process.env.API_HOSTNAME || "http://localhost:9000"
const clientApiHostname = process.env.CLIENT_API_HOSTNAME || process.env.API_HOSTNAME || "https://mig-output.wtl2.wikitolearn-test.org"
// const serverApiHostname = process.env.SERVER_API_HOSTNAME || process.env.API_HOSTNAME || "http://localhost:9000"
const serverApiHostname = process.env.SERVER_API_HOSTNAME || process.env.API_HOSTNAME || "https://mig-output.wtl2.wikitolearn-test.org"

// const clientAuthHostname = process.env.CLIENT_AUTH_HOSTNAME || process.env.AUTH_HOSTNAME || "http://localhost:5555"
const clientAuthHostname = process.env.CLIENT_AUTH_HOSTNAME || process.env.AUTH_HOSTNAME || "https://login.wtl2.wikitolearn-test.org"
// const serverAuthHostname = process.env.SERVER_AUTH_HOSTNAME || process.env.AUTH_HOSTNAME || "http://localhost:5555"
const serverAuthHostname = process.env.SERVER_AUTH_HOSTNAME || process.env.AUTH_HOSTNAME || "https://login.wtl2.wikitolearn-test.org"
const clientAuthId = process.env.CLIENT_AUTH_ID || "sgametrio-test"

const useCerts = process.env.USE_CERTS || "false"
const certsCa = process.env.CERTS_CA || ""
const certsCert = process.env.CERTS_CERT || ""
const certsKey = process.env.CERTS_KEY || ""


module.exports = {
	language,
	fallbackLanguage,

	nodeEnv,
	isProduction: nodeEnv === "production",
	isTesting: nodeEnv === "testing",

	server: {
		port: process.env.SERVER_PORT || 4138,
		hostname: process.env.SERVER_HOSTNAME || "0.0.0.0"
	},

	runningEnv,
	clientApiHostname,
	serverApiHostname,
	clientAuthHostname,
	serverAuthHostname,
	clientAuthId,

	useCerts,
	certsCa,
	certsCert,
	certsKey
}
