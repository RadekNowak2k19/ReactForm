export const cutUrl = (start: number, end: number, url: string) => {
	const shortUrl = url.slice(start, end);
	return shortUrl;
};
