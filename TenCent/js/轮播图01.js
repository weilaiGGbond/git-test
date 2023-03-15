const slider = [{
		url: 'img/01.webp',title1 : '2023微信公开课Pro',title2:'点击回看腾讯年度旗舰活动"2023微信公开课PRO-在场'
	},
	{
		url: 'img/02.webp',title1 :'腾讯99公益日不断完善全民公益的互联网解决方案',title2:'99公益日一直秉持全民公益的理念，鼓励网友通过网络将公益做成人人皆可参与的全民活动，为全民公益提供了互联网解决方案'
	},
	{
		url: 'img/03.webp',title1 : '腾讯携手行业伙伴开放专利，以数字化助力碳减排',title2:'中国产业互联网发展联盟碳中和专业委员会及开放技术联盟成立。'
	},
	{
		url: 'img/04.webp',title1 :'腾讯公布二零二二年第三季业绩',title2:''
	} ,{
		url: 'img/05.webp',title1 : '游戏技术助益现实世界创新发展',title2:'游戏发展至今，其价值和意义远不止娱乐。增强现实和虚拟现实等游戏技术已成为解决现实世界问题的新方法。'
	},
]
const p =document.querySelector('.top_img p') 
const h1 = document.querySelector('.top_img h1')
const img2 = document.querySelector('#imgList img');
const next2 = document.querySelector('.next2');
let n = 0
next2.addEventListener('click', function() {
	n++;
	if (n >= slider.length) {
		n = 0;
	}
	img2.src = slider[n].url;
	h1.innerHTML = slider[n].title1;
	p.innerHTML = slider[n].title2;
});
setInterval(function() {
	n++;
	if (n >= slider.length) {
		n = 0;
	}
	img2.src = slider[n].url;
		h1.innerHTML = slider[n].title1;
		p.innerHTML = slider[n].title2;
}, 3000);
const prev2 = document.querySelector('.prev2');
let q = slider.length - 1;
prev2.addEventListener('click', function() {
	q--;
	if (q < 0) {
		 q = slider.length - 1;
	}
	img2.src = slider[q].url;
		h1.innerHTML = slider[q].title1;
		p.innerHTML = slider[q].title2;
});