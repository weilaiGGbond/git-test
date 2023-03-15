const sliderDate = [{
		url: 'img/index_develop_bg1.jpg'
	},
	{
		url: 'img/index_develop_bg2.jpg'
	},
	{
		url: 'img/index_develop_bg3.jpg'
	},
]
const img = document.querySelector('.imgList04 img');
const next = document.querySelector('.next');
let i = 0
next.addEventListener('click', function() {
	i++;
	if (i >= sliderDate.length) {
		i = 0;
	}
	img.src = sliderDate[i].url;
});
setInterval(function() {
	i++;
	if (i >= sliderDate.length) {
		i = 0;
	}
	img.src = sliderDate[i].url;
}, 3000);
const prev = document.querySelector('.prev');
let j = sliderDate.length - 1;
prev.addEventListener('click', function() {
	j--;
	if (j < 0) {
		j = sliderDate.length - 1;
	}
	img.src = sliderDate[j].url;
});
