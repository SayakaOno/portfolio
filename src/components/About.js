import React from 'react';
import Fade from 'react-reveal/Fade';

import Frontend from './Frontend';
import { about } from '../data';

const SHOULD_ANIMATE = false;

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = { iconChange: false };

		this.aboutRef = React.createRef();
		about.new[this.lang].bullet.forEach((e, index) => {
			this['checkboxRef' + (index + 1)] = React.createRef();
		});
	}
	lang = this.props.language;

	check = () => {
		if (this.state.iconChange) {
			return;
		}
		for (let i = 0; i < 6; i++) {
			let ref = 'checkboxRef' + (i + 1);
			if (this[ref].current.getBoundingClientRect().top < window.innerHeight * 0.35) {
				if (i === 5) {
					this[ref].current.className = 'fas fa-utensils';
					this.setState({ iconChange: true });
					window.removeEventListener('scroll', this.check);
				} else {
					this[ref].current.className = 'fas fa-check-square';
				}
			}
		}
	};

	componentDidMount() {
		window.addEventListener('scroll', this.check);
	}

	render() {
		return (
			<React.Fragment>
				<div name="about" id="about" className="about wrapper page" ref={this.aboutRef}>
					<Fade>
						<h2>About me</h2>
					</Fade>
					<div className="about-container">
						<div className="main-content">
							<Fade>
								<p className="description">{about.new[this.lang].title}</p>
								<div className="bullet">
									<ul>
										{about.new[this.lang].bullet.map((point, index) => {
											let ref = 'checkboxRef' + (index + 1);
											return (
												<li key={index}>
													<i className="far fa-square" ref={this[ref]} />
													<div className="text">
														<span>
															<b>{point.header}</b>
														</span>
														{point.detail}
													</div>
												</li>
											);
										})}
									</ul>
								</div>
							</Fade>
							<Fade>
								<div className="skills">
									<h3>{about.skills[this.lang]}</h3>
									<div className="skills-container">
										<h4>Frontend</h4>
										{SHOULD_ANIMATE ? (
											<Frontend />
										) : (
											<p>{about.sortedSkills['Frontend'].join(', ')}</p>
										)}
										<h4>Backend</h4>
										<p>{about.sortedSkills['Backend'].join(', ')}</p>
										<h4>What else I can do</h4>
										<p>{about.sortedSkills['others'].join(', ')}</p>
									</div>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default About;
