import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {useDropzone} from 'react-dropzone';

const getColor = props => {
	if (props.isDragAccept) {
		return '#00e676';
	}

	if (props.isDragActive) {
		return '#2196f3';
	}

	return '#212121';
};

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-width: 2px;
	border-radius: 2px;
	border-color: ${props => getColor(props)};
	border-style: dashed;
	background-color: #fafafa;
	color: #bdbdbd;
	outline: none;
	transition: border .24s ease-in-out;
	width: 20em;
	cursor: pointer;
`;

function Classifier() {
	const [image, setImage] = useState(null);
	const [classification, setClassification] = useState(null);
	const onDrop = useCallback(async acceptedFiles => {
		setImage(URL.createObjectURL(acceptedFiles[0]));
		setClassification('Loading model...');

		const modelLoaded = () => {
			setClassification('Classifying...');
		};

		const {default: ml5} = await import('ml5');

		const classifier = await ml5.imageClassifier('/model/model.json', modelLoaded);
		const results = await classifier.predict(document.querySelector('#image'));

		setClassification(`I'm ${(results[0].confidence * 100).toFixed(2)}% sure, that this is ${results[0].label}.`);
	}, []);
	const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({onDrop, accept: 'image/*'});

	useEffect(() => () => {
		// Make sure to revoke the data uris to avoid memory leaks
		URL.revokeObjectURL(image);
	}, [image]);

	return (
		<>
			<div className="container">
				<Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
					<input {...getInputProps()}/>
					<p>Drop or select files</p>
				</Container>
			</div>
			<br/>
			<br/>
			{image ?
				<img width={200} id="image" src={image}/> : ''}
			<br/>
			{classification}
		</>
	);
}

export default Classifier;
