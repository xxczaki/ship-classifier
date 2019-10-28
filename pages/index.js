import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';
import Navigation from '../components/navigation';
import Search from '../components/search';

const Index = () => {
	return (
		<Container>
			<Header>Prasówka Generator</Header>
			<Description>Wyszukaj wiadomości do prasówki!</Description>
			<Navigation/>
			<Search/>
		</Container>
	);
};

export default Index;
