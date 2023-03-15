const date = [{
		url: 'img/index_resp_bg0.jpg',title3:'全国战役 一起行动',title4:'在新冠肺炎疫情之战中，腾讯秉承科技向善，以互联网科技的力量，通过我们的技术和产品为全球战役提供支持。'
	},
	{
		url: 'img/index_resp_bg1.jpg',title3:'99公益日',title4:'每年一度于九月举行的全名公益活动，透过网上平台将大众在活动期间网上作出的捐款进行匹配。'
	},
	{
		url: 'img/index_resp_bg2.jpg',title3:'腾讯长城保护项目',title4:'腾讯公益慈善基金会与中国文物保护基金会共同合作，吸引公众关注和参与长城保护的文化遗产类公益项目。'
	},
	{
		url: 'img/index_resp_bg3.jpg',title3:'腾讯为村',title4:'据乡村使用场景定制微信公众号，形成由村，乡镇，区县，州市组成的公众号集群服务村民，打造手机上的“为村服务中心”。'
	},
]
const p1 = document.querySelector('.img01 p');
const h3 = document.querySelector('.img01 h3');
const img1 = document.querySelector('.img01 img');
const next1 = document.querySelector('.next1');
let k = 0;
next1.addEventListener('click', function() {
	k++;
	if (k >= date.length) {
		k = 0;
	}
	img1.src = date[k].url;
	h3.innerHTML = date[k].title3;
	p1.innerHTML = date[k].title4;
});
const prev1 = document.querySelector('.prev1');
let m = date.length - 1;
prev1.addEventListener('click', function() {
	m--;
	if (m < 0) {
		m = date.length - 1;
	}
	img1.src = date[m].url;
	h3.innerHTML = date[m].title3;
	p1.innerHTML = date[k].title4;
});
