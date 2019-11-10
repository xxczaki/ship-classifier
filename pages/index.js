import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';
import Classifier from '../components/classifier';
import Information from '../components/information';

const Index = () => {
	return (
		<Container>
			<Header>Ship Classifier</Header>
			<Description>Classify ship types using machine learning (beta)</Description>
			<br/>
			<Classifier/>
			<br/>
			<Information/>
		</Container>
	);
};

export default Index;
