import React, {ReactNode} from 'react';

const Hexagon = (props: { children?: ReactNode }) =>
{
	return (
		<div
			className={'icon hexagonIcon'}
		>
			{props.children}
			<svg
				version='1.1'
				id='Capa_1'
				x='0px'
				y='0px'
				viewBox='0 0 483.013 483.013'
			>
				<path
					d='M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923,0-30.628,8.49-38.608,22.292 L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462,170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926 c15.925,0,30.634-8.491,38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z'
				/>
			</svg>
		</div>
	);
};

export default Hexagon;