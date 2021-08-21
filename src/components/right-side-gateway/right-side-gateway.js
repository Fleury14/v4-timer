import React, { useState } from 'react';
import { NoteTaker, FlagInfo } from '..';

import './right-side-gateway.scss';

const RightSideGateway = (props) => {
	const [page, setPage] = useState('info');

	function handleSet(setting) {
		setPage(setting);
	}

	function renderBody() {
		switch(page) {
			case 'notes':
				return <NoteTaker />
			default:
				return <FlagInfo />
		}
	}

	return (
		<>
			<div className="right-gate-top">
				<button className={page === 'info' ? 'active-gate' : ''} onClick={() => handleSet('info')}>
					Flag Info
				</button>
				<button className={page === 'notes' ? 'active-gate' : ''} onClick={() => handleSet('notes')}>
					Notes
				</button>
			</div>
			<div className="right-gate-main">
				{renderBody()}
			</div>
		</>
	);
}

export default RightSideGateway;