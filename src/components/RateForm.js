import React from 'react';

const RateForm = ({ submitRating }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			{[1, 2, 3, 4, 5].map((rating) => {
				return (
					<i
						style={{ paddingLeft: '4%', paddingRight: '4%' }}
						className='fa fa-star fa_custom fa-2x'
						onClick={() => submitRating(rating)}></i>
				);
			})}
		</div>
	);
};

export default RateForm;
