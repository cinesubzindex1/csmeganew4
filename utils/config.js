function toBool(item, val = 'true') {
    return !(!item || item.toLowerCase() != val)
}

function generateKey(key) {
    return !key ? "google-drive-dls" : key.length < 16 ? key.padEnd(16, "0") : key.length > 16 ? key.slice(0, 16) : key;
}

//cs.download.csdl info
const dlInfo = {
    main: 'download karaddi help',
    help: 'https://cinesubz.co',
    support: 'https://cinesubz.co'
}

module.exports = {
    version: "v1.0",
    PORT: process.env.PORT || 8000,
    ENCRYPTION_KEY: generateKey(process.env.ENCRYPTION_KEY),
    USE_SERVICE_ACCOUNT: toBool(process.env.USE_SERVICE_ACCOUNT),
    ALLOW_DOWNLOADING_PAGE: toBool(process.env.ALLOW_DOWNLOADING_PAGE),
    ALLOW_DOWNLOADING_FILES: toBool(process.env.ALLOW_DOWNLOADING_FILES),
    ALLOW_DIRECT_ID_DOWNLOADS: toBool(process.env.ALLOW_DIRECT_ID_DOWNLOADS),
    ALLOW_FETCHING_FILE_INFO: toBool(process.env.ALLOW_FETCHING_FILE_INFO),
    ALLOW_GENERATING_LINKS: toBool(process.env.ALLOW_GENERATING_LINKS),
    ALLOW_GENERATING_TOKENS: toBool(process.env.ALLOW_GENERATING_TOKENS),
    GOOGLE_CLIENT_ID: process.env.CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    file_link_expiry: 7, // 7 days
    dlInfo,
    enable_cors_file_down : false
}