import React, { useState } from "react";
import ModCard from "../../components/Card"
import Header from "../../components/Header";
import { getMods } from "../../utils";
import "../index.css";
import "./index.css";

export enum STATUS {
    UNDETECT,
    DETECT,
    RISKY,
    UPDATING
}

interface cardProps {
	name: string,
	description: string,
	url: string,
	imageUrl: string,
	activate: boolean,
    status: STATUS
};

export function Mod(): JSX.Element {
    const [mods, setMods] = useState<Array<cardProps>>([]);
	const [loading, setLoading] = useState(true);
    React.useEffect(() => {
        getMods().then(({data}) => {
            setMods(data);
            setLoading(false);
        }).catch(err => console.log(err));
    }, []);
    if (!loading && !mods) {
        return (
            <>
                <div className="header">
                    <Header></Header>
                </div>
                <div className="content">
                    <div className="center">
                        Loading Menus...
                    </div>
                </div>
                <div className="footer"></div>
            </>
        );
    }
    return (
        <div className="page">
            <div className="header">
                <Header></Header>
            </div>
            <div className="content">
                <div className="center">
                    <div className="legend" /* style={{"lineHeight": `${window.innerHeight}px`}} */>
                        <div>Undetect</div>
                        <div>Detect</div>
                        <div>Risky</div>
                        <div>Updating</div>
                    </div>
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
                                key={mod.name}
                                name={mod.name} 
                                description={mod.description}
                                url={mod.url}
                                imageUrl={mod.imageUrl}
                                activate={mod.activate}
                                status={mod.status}
                            ></ModCard>
                        ))}
                        {mods.map((mod) => (
                            <ModCard 
                                key={mod.name}
                                name={mod.name} 
                                description={mod.description}
                                url={mod.url}
                                imageUrl={mod.imageUrl}
                                activate={mod.activate}
                                status={mod.status}
                            ></ModCard>
                        ))}
                        {mods.map((mod) => (
                            <ModCard 
                                key={mod.name}
                                name={mod.name} 
                                description={mod.description}
                                url={mod.url}
                                imageUrl={mod.imageUrl}
                                activate={mod.activate}
                                status={mod.status}
                            ></ModCard>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer">Copyright - Eternal</div>
        </div>
    );
}