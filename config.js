const assertEnv = require("require-env")
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
const clientApiHostname = assertEnv.require("PUBLIC_PWA_GATEWAY_URI")
const serverApiHostname = assertEnv.require("PWA_GATEWAY_URI")
const clientAuthHostname = assertEnv.require("PUBLIC_KEYCLOAK_URI")

const serverAuthHostname = assertEnv.require("KEYCLOAK_URI")
const clientAuthId = assertEnv.require("KEYCLOAK_FRONTEND_CLIENT_ID")
const clientAuthRealm = assertEnv.require("KEYCLOAK_AUTH_REALM")

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
		port: assertEnv.require("SERVICE_PORT"),
		hostname: process.env.SERVER_HOSTNAME || "0.0.0.0"
	},

	runningEnv,
	clientApiHostname,
	serverApiHostname,
	clientAuthHostname,
	serverAuthHostname,
	clientAuthId,
	clientAuthRealm,

	useCerts,
	certsCa,
	certsCert,
	certsKey
}
