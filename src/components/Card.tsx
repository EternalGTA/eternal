import React from "react";

interface cardProps {
	name: string,
	description: string,
	url: string,
	imageUrl: string,
	activate: boolean
};

const ModCard: React.FC<cardProps> = (card: cardProps) => {
	console.log(card);
	return (
		<>
			<div className="card">
				<div className="card-header">
					<div className="card-name">
						{card.name}
					</div>
				</div>
				<div className="card-body">
					<div className="card-body-text">
						{card.description}
					</div>
					<div className="card-body-image">
						<img className="card-img" src={card.imageUrl} alt={card.name} />
					</div>
				</div>
				<div className="card-footer">
					<div className="card-button">
						<button className={`download-btn ` + (card.activate ? "" : "disabled")}>Download</button>
						<button className="preview-btn">Preview</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ModCard;