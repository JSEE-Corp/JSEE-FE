/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		additionalData: `@use '/src/scss/abstracts/index' as *;`,
	},
}

module.exports = nextConfig
