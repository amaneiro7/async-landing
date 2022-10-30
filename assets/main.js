const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC-R5ArC64tUZbcRTvI8cPhw&part=snippet%2Cid&order=date&maxResults=9'
const APIFAZT = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCX9NJ471o7Wie1DQe94RVIg&part=snippet%2Cid&order=date&maxResults=9'
const APIDAI = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCK_dc2R_JcwP9lY419BNMOA&part=snippet%2Cid&order=date&maxResults=9'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed41bd4e65msha325344539cd83dp1edcbejsn62a49f4a6fdf',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;
}

(async () => {
	try {
		const videos = await fetchData(APIFAZT);
		let view = `
		${videos.items.map(video => `
		  <div class="group relative">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
				</div>
			<div class="mt-4 flex justify-between">
				  <h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					${video.snippet.title}
				  </h3>
			</div>
		  </div>		
		`).slice(0,4).join('')}
		`;
		content.innerHTML = view;
	} catch (error) {
		console.log(error);
	}
})();