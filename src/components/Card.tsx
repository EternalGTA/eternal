import React, { useState } from "react";
import { modProps, MODSTATE, MODSTATUS } from "../utils/interfaces";
import Popup from "./Popup";

const colorCode = ["", "#0F0", "#F00", "#fabe58", "#0080FF"];

const ModCard: React.FC<modProps> = (card: modProps) => {
	require("./Card.css");
	const [isOpen, setIsOpen] = useState(false);
 
  	const togglePopup = () => {
    	setIsOpen(!isOpen);
  	}
	function downloadMod() {
		if (!card.detectionStatus) return;
		window.open(card.downloadUrl);
	}
	return (
		<>
			<div className="card" style={{boxShadow: `1px 1px 2px 1px ${colorCode.at(card.detectionStatus)}`}}>
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
						{card.status === MODSTATE.AVAILABLE && (card.detectionStatus === MODSTATUS.RISKY || card.detectionStatus === MODSTATUS.UNDETECT) ? <button className={`btn download-btn `}
							onClick={downloadMod}>
							Download
						</button> : ""}
						<button className="btn preview-btn" onClick={togglePopup}>Preview</button>
					</div>
				</div>
			</div>
			{isOpen && <Popup
			mod={card}
			handleClose={togglePopup}
			/>}
		</>
	);
}

export default ModCard;