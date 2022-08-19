import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LobbyCard from "../../components/Lobby";
import API from "../../utils";
import { lobbyProps } from "../../utils/interfaces";

export function Lobby() {
    require("../index.css");
	require("./index.css");
    const [lobbys, setLobbys] = useState<Array<lobbyProps>>([]);
	const [loading, setLoading] = useState(true);
    React.useEffect(() => {
        API.getLobbys().then(({data}) => {
            setLobbys(data.lobbys);
            setLoading(true);
        }).catch(err => console.log(err));
    }, []);
    if (!loading && !lobbys) {
        return (
            <>
                <div className="header">
                    <Header selectedMenu={0}></Header>
                </div>
                <div className="content">
                    <div className="center">
                        Loading Lobbys...
                    </div>
                </div>
                <div className="footer"></div>
            </>
        );
    }
    return (
        <div className="page">
            <div className="header">
                <Header selectedMenu={0}></Header>
            </div>
            <div className="content">
                <div className="center">
                    <div className="container">
                        {lobbys.map((lobby) => (
                            <LobbyCard key={lobby.rowid}
                            rowid={lobby.rowid}
                            name={lobby.name}
                            description={lobby.description}
                            price={lobby.price}
                            status={lobby.status}></LobbyCard>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer">
				<Footer></Footer>
			</div>
        </div>
    );
}