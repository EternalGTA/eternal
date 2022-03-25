import React from "react";
import { STATUS } from "../pages/Mod";
import "./Card.css";

interface cardProps {
	name: string,
	description: string,
	url: string,
	imageUrl: string,
	activate: boolean,
	status: STATUS
};

const colorCode = ["#0F0", "#F00", "#fabe58", "#0080FF"];

const ModCard: React.FC<cardProps> = (card: cardProps) => {
	function downloadMod() {
		if (!card.activate) return;
		window.open(card.url);
	}
	return (
		<>
			<div className="card" style={{boxShadow: `1px 1px 2px 1px ${colorCode.at(card.status)}`}}>
				<div className="card-body">
					<div className="card-body-image">
						<img className="card-img" src={card.imageUrl} alt={card.name} />
					</div>
				</div>
				<div className="card-header">
					<div className="card-name">
						{card.name}
					</div>
				</div>
				<div className="card-footer">
					<div className="card-button">
						{card.activate ? <button className={`btn download-btn ` + (card.activate ? "" : "disabled")} disabled={!card.activate}
							onClick={downloadMod}>
							Download
						</button> : ""}
						<button className="btn preview-btn">Preview</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ModCard;