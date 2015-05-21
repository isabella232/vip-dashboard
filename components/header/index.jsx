/**
 * External dependencies
 */
var React = require( 'react' ),
	joinClasses = require( 'react/lib/joinClasses' );

/**
 * Internal dependencies
 */
var Config = require( '../config.js' ),
	Nav = require( '../nav' ),

/**
 * Header Component
 */
Header = React.createClass( {
	getInitialState: function() {
		{
		// to-do: 'User Management', 'SVN Access', 'Revisions', 'Support', 'Billing'
		}
		return {
			nav: [
				{
					title: 'Dashboard',
					url: '123'
				},
				{
					title: 'Plugins',
					url: '123'
				}
			]
		}
	},
	render: function() {

		var nav = ['Dashboard', 'Plugins']

		return (
			<div className={ joinClasses( this.props.className, 'top-header' ) }>
				<h1><img src={ Config.asseturl + "img/wpcom-vip-logo.svg"} alt="WordPress.com VIP" className="top-header__logo" /></h1>

				<Nav items={ this.state.nav } />,

				{ this.props.children }

			</div>
		);
	}
} );
module.exports = Header;