import React, { useState } from "react";
import Header from "../../components/Header";

export function Lobby() {
    const [mods, setMods] = useState<Array<number>>([]);
	const [loading, setLoading] = useState(true);
    React.useEffect(() => {
        
    }, []);
    if (!loading && !mods) {
        return (
            <>
                <div className="header">
                    <Header></Header>
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
                <Header></Header>
            </div>
            <div className="content">
                <div className="center">
                    <div className="container">
                        
                    </div>
                </div>
            </div>
            <div className="footer">Copyright - Eternal</div>
        </div>
    );
}