import React, { useState } from "react";
import ModCard from "../../components/Card"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import API from "../../utils";
import { modProps } from "../../utils/interfaces";

export function Mod(): JSX.Element {
	require("../index.css");
	require("./index.css");
	const [mods, setMods] = useState<Array<modProps>>([]);
	const [loading, setLoading] = useState(true);
	React.useEffect(() => {
		API.getMods().then(({data}) => {
			setMods(data.mods);
			setLoading(false);
		}).catch(err => console.log(err));
	}, []);
	if (!loading && !mods) {
		return (
			<>
				<div className="header">
					<Header selectedMenu={0}></Header>
				</div>
				<div className="content">
					<div className="center">
						Loading Menus...
					</div>
				</div>
				<div className="footer"><Footer></Footer></div>
			</>
		);
	}
	return (
		<>
		<div className="legend" /* style={{"lineHeight": `${window.innerHeight}px`}} */>
			<div>Undetect</div>
			<div>Detect</div>
			<div>Risky</div>
			<div>Updating</div>
		</div>
		<div className="page">
			<div className="header">
				<Header selectedMenu={1}></Header>
			</div>
			<div className="content">
				<div className="center">
					<div>
						<h1>LES MODS MENUS GRATUITS</h1>
						<p>
							Vous trouverez ici les différents mods menus que je présente sur ma chaîne.<br/>
							Pour savoir comment installer un menu, n'hésitez pas à cliquer sur Preview,<br/>
							vous aurez par la suite un tutoriel pour l'installer et une vidéo showcase.
						</p>
					</div>
					<div className="container">
						{mods.map((mod) => (
							<ModCard 
								key={mod.rowid}
								rowid={mod.rowid}
								name={mod.name} 
								description={mod.description}
								downloadUrl={mod.downloadUrl}
								videoUrl={mod.videoUrl}
								imageUrl={mod.imageUrl}
								detectionStatus={mod.detectionStatus}
								status={mod.status}
							></ModCard>
						))}
					</div>
				</div>
			</div>
			<div className="footer">
				<Footer></Footer>
			</div>
		</div>
		</>
	);
}