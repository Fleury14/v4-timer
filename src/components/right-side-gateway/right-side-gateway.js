import React, { useState } from 'react';
import { NoteTaker, FlagInfo, TrappedState } from '..';

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
			case 'trapped':
				return <TrappedState />
			default:
				return <FlagInfo />
		}
	}

	return (
		<div className="right-gate">
			<div className="right-gate-top">
				<button className={page === 'info' ? 'active-gate' : ''} onClick={() => handleSet('info')}>
					Flag Info
				</button>
				<button className={page === 'notes' ? 'active-gate' : ''} onClick={() => handleSet('notes')}>
					Notes
				</button>
				<button className={page === 'trapped' ? 'active-gate' : ''} onClick={() => handleSet('trapped')}>
					Trapped Chests
				</button>
			</div>
			<div className="right-gate-main">
				{renderBody()}
			</div>
		</div>
	);
}

export default RightSideGateway;