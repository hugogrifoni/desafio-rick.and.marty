import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import homeStyles from './Home.module.css';
import jerry from './Images/jerry.jpeg';
import beth from './Images/beth.jpeg';
import axios from 'axios';
import API_URL from './constants';

function Home() {
	const navigate = useNavigate();
	const personas = [
		{ name: 'Jerry Smith', image: jerry, id: 1 },
		{ name: 'Beth Smith', image: beth, id: 2 },
	];

	const [people, setPeople] = useState();
	useEffect(() => {
		axios.get(`${API_URL}/character`).then((response) => {
			const { results } = response.data;
			console.log(results);
			setPeople(results);
		});
	}, []);

	function getStatusClassName(status) {
		if (status.toLowerCase() === 'alive') {
			return homeStyles.statusAlive;
		}

		if (status === 'Dead') {
			return homeStyles.statusDead;
		}

		return homeStyles.statusUnknown;
	}

	return (
		<section>
			<div className={homeStyles.personasListContainer}>
				{people?.length &&
					people.map((person) => {
						return (
							<div
								onClick={() =>
									navigate(`details/${person.id}`, {
										state: {
											name: person.name,
											image: person.image,
											status: person.status,
											location: person.location,
											episode: person.episode
										},
									})
								}
								className={homeStyles.personaCard}
							>
								<div className={homeStyles.imageContainer}>
									<img
										src={person.image}
										className={homeStyles.imagePersona}
									/>
									<span
										className={getStatusClassName(
											person.status
										)}
									>
										{person.status}
									</span>
								</div>

								<div className={homeStyles.dataPersona}>
									<p>
										<strong>{person.name}</strong>
									</p>
									<br />
									<p>resumo</p>
								</div>
							</div>
						);
					})}
				{/* card 1 */}

				{/* fazer o personal card unificado 
                criar um array com as info dos personas
                usar o metodo map do array pra gerar a div */}
				{/* <div
					onClick={() =>
						navigate('details/1', { state: { name: 'Jerry', image: jerry } })
					}
					className={homeStyles.personaCard}
				>
					<div className={homeStyles.imageContainer}>
						<img src={jerry} className={homeStyles.imagePersona} />
						<span className={homeStyles.statusPersona}>TEST</span>
					</div>

					<div className={homeStyles.dataPersona}>
						<p>
							<strong>Jerry Smith</strong>
						</p>
						<br />
						<p>resumo</p>
					</div>
				</div> */}

				{/* card 2 */}
				{/* <div
                    onClick={() =>
						navigate('details/2', { state: { name: 'Beth', image: beth } })
					}
					className={homeStyles.personaCard}
				>
					<div className={homeStyles.imageContainer}>
						<img src={beth} className={homeStyles.imagePersona} />
						<span className={homeStyles.statusPersona}>TEST</span>
					</div>

					<div className={homeStyles.dataPersona}>
						<p>
							<strong>Beth Smith</strong>
						</p>
						<br />
						<p>resumo</p>
					</div>
				</div> */}
			</div>
		</section>
	);
}

export default Home;
