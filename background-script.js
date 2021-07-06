function onHeadersReceived(details) {
	const name = "content-disposition"
	const headers = details.responseHeaders
	const index = headers.findIndex(e => e.name.toLowerCase() === name)
	if (index < 0) return
	headers.splice(index, 1)
	return { responseHeaders: headers }
}

var browser = browser || chrome;

browser.webRequest.onHeadersReceived.addListener(
	onHeadersReceived,
	{ urls: ["https://ct.ritsumei.ac.jp/ct/*"] },
	["blocking", "responseHeaders"]
)