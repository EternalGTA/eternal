import React from "react";

enum STATUS {
	AVAILABLE,
	UNAVAILABLE
}

interface cardProps {
	name: string,
	description: string,
	price: string,
	status: STATUS
};

const ModCard: React.FC<cardProps> = (card: cardProps) => {
	return (
		<>
			<div className="card">
				<div className="card-body">
				<div className="card-name">
						{card.name}
					</div>
				</div>
				<div className="card-footer">
					{card.status === STATUS.AVAILABLE ? "Disponible" : "Hors Stock"}
				</div>
			</div>
		</>
	);
}

export default ModCard;