import React, {Component} from 'react';
import './SplashPage.css';

class SplashPage extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		return (
			<div className = "tc outer splashPage">
				<div className="middle">
					<div className="inner">
						<h1>Grocery List Manager</h1>
						<p className="line1">-- An advanced notepad --</p>
						<p className="line2 pa2 mt4 mb4">Plan you meal. Get an organized grocery list. Make sure it's under budget.</p>
						<button className="pa2">Let's get started</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SplashPage;