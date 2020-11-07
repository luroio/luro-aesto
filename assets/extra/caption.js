// Theme code JavaScript
const feature = document.querySelector('.it-feature-image-wrapper');

const featureHTML = featureCaption => `
	<figcaption>
		<center><span id="main-figure-caption">${featureCaption}</span></center>
	</figcaption>
`;

if (featureCaption) {
	feature.innerHTML = feature.innerHTML + featureHTML(featureCaption);
};
