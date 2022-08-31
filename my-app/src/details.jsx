import { React, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import detailsStyles from './Details.module.css';
import axios from 'axios';
import API_URL from './constants';

function Details() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const { name, image, location, episode } = state;
	const [episodeList, setEpisodeList] = useState([]);

	useEffect(() => {
		const epList = [];

		episode.map((epUrl) => {
			const splitEpUrl = epUrl.split('/');
			epList.push(splitEpUrl[5]);
		});

		setEpisodeList(epList);
	}, [episode]);

	return (
		<section>
			<div className={detailsStyles.detailsPersonaContainer}>
				<div className={detailsStyles.detailsPersonaCard}>
					<img src={image} className={detailsStyles.imagePersona} />
					<p className={detailsStyles.paragPersona}>{name}</p>

					<div className={detailsStyles.locPersona}>
						{location.name}
					</div>
					{/* {console.log("aaa", episodeInfo)} */}
					{/* {episodeInfo?.length && episodeInfo.map(ep => <p>{ep.name}</p>)} */}
					<div className={detailsStyles.epsList}>
						{episodeList.map((ep) => (
							<span key={ep}>{ep}</span>
						))}
					</div>
					{console.log(episodeList)}
					<br />
					{/* {location?.map((loc) => console.log(loc.name))} */}
					<Link className={detailsStyles.goHome} to='/'>
						Home
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Details;
