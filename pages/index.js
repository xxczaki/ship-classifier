import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';
import Classifier from '../components/classifier';

const Index = () => {
	return (
		<Container>
			<Header>Ship Classifier</Header>
			<Description>Classify ship types using machine learning (beta)</Description>
			<br/>
			<Classifier/>
			<br/>
			<h3>How it works?</h3>
			<p>This app uses a machine learning model trained with pictures of 8 different ship types:</p>
			<ul>
				<li>Passenger Vessel</li>
				<li>Container Vessel</li>
				<li>Bulk Vessel</li>
				<li>Roll-on/Roll-off Vessel</li>
				<li>Naval Vessel</li>
				<li>Chemical Tanker</li>
				<li>Sailing Ship</li>
				<li>Submarine</li>
			</ul>
			<p>Each learning set contained between 50 and 78 images. The model itself was trained for about 1 minute.</p>
			<p>To train the model I used <a href="https://teachablemachine.withgoogle.com/">Teachable Machine</a>, an AI Experiment by Google.</p>
			<p>Ship Classifier uses <a href="https://ml5js.org/">ml5</a>, a high-level wrapper around <a href="https://www.tensorflow.org/js">Tensorflow.js</a></p>
			<b>Depending on the photo provided, the accuracy of the model may vary!</b>
			<br/>
			<p>Source code of this site, as well as the model, sample photos and training configuration are available on <a href="">Github</a>. <br/>If you have any questions/suggestion, please open an issue.</p>
		</Container>
	);
};

export default Index;
