import React, {ReactNode} from 'react';

const Triangle = (props: { children?: ReactNode }) =>
{
	return (
		<div
			className={'icon triangleIcon'}
		>
			{props.children}
			<svg
				version='1.1'
				id='Layer_1'
				x='0px'
				y='0px'
				viewBox='0 0 512 512'
			>
				<g>
					<g>
						<path
							d='M507.521,427.394L282.655,52.617c-12.074-20.122-41.237-20.122-53.311,0L4.479,427.394 c-12.433,20.72,2.493,47.08,26.655,47.08h449.732C505.029,474.474,519.955,448.114,507.521,427.394z'
						/>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default Triangle;