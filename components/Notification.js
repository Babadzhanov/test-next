// class Notification extends React.Component {
// 	render() {
//         let props = { success: 'success', message: 'info', caution: 'warning', error: 'danger', type: 'success', childen: 'wtf' };
//         // let props = this.props;
// 		let type = props.type || 'sample';
//         let className = ['alert', `alert-${type}`].join(' ');
// 		if(props.message) {
// 			return (
// 				<div className={className}>
// 					<p>{props.message}</p>
// 					{props.children}
// 				</div>
// 			)
// 		}
// 		return null;
// 	}
// }

let map = { success: 'success', message: 'info', caution: 'warning', error: 'danger' }

class Notification extends React.Component {
	render() {
		let props = this.props;
		let type = map[props.type] || 'info';
		let className = ['', `alert-${type}`].join(' ');
		if(props.message) {
			return (
				<div className={className}>
					<p>{props.message}</p>
					{props.children}
				</div>
			)
		}
		return null;
	}
}

export default Notification;