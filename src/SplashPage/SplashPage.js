import React, {Component} from 'react';
import './SplashPage.css';
import App from '../App/App';

class SplashPage extends Component {
	constructor() {
		super();
		this.state = {
			isAppOn : false
		}
	}

	showApp = () => {
		this.setState( 
			{isAppOn : true} 
		);
		document.getElementById('splashPage').style.display="none";
	}

	render() {
		return (
			<div>
			
				<div id="splashPage" className = "tc outer splashPage">
					<div className="middle">
						<div className="inner">
							<h1>Grocery List Manager</h1>
							<p className="line1">-- An advanced notepad --</p>
							<p className="line2 pa2 mt4 mb4">Plan you meal. Get an organized grocery list. Make sure it's under budget.</p>
							<button className="pa2" onClick={this.showApp}>Let's get started</button>
						</div>
					</div>
				</div>
				
				{ this.state.isAppOn ? <App/> : null }

			</div>
		);
	}
}

export default SplashPage;