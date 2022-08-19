import React, { useState } from "react";
import { lobbyProps, LOBBYSTATUS } from "../utils/interfaces";
import { LobbyPopup } from "./Popup";
const colorCode = ["", "#0F0", "#F00"];

const LobbyCard: React.FC<lobbyProps> = (card: lobbyProps) => {
	require("./Lobby.css");
	const [isOpen, setIsOpen] = useState(false);
 
  	const togglePopup = () => {
    	setIsOpen(!isOpen);
  	}
	return (
		<>
			<div className="card" style={{boxShadow: `1px 1px 2px 1px ${colorCode.at(card.status)}`}}
				onClick={togglePopup}>
				<div className="card-body">
					<div className="card-body-image">
						<img className="card-img" src="https://editors.dexerto.fr/wp-content/uploads/sites/2/2022/03/07/les-meilleures-facons-de-gagner-rapidement-de-largent-sur-gta-v-online.jpg" alt={card.name} />
					</div>
				</div>
				<div className="card-header">
					<div className="card-name">
						{card.name}
					</div>
					<div className="card-price">
						{card.price}€
					</div>
				</div>
				<div className="card-footer">
					{card.status === LOBBYSTATUS.AVAILABLE ? "Disponible" : "Hors Stock"}
				</div>
			</div>
			{isOpen && <LobbyPopup
			lobby={card}
			handleClose={togglePopup}
			/>}
		</>
	);
}

export default LobbyCard;