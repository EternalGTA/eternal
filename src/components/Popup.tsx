
const Popup = ({ mod, handleClose }: any) => {
    require("./Popup.css");
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <div className="popup-name">{mod.name}</div>
                <div className="popup-content">
                    <div className="popup-video">
                        <iframe
                            src={`https://www.youtube.com/embed/${mod.videoUrl}`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            title={mod.name}
                            allowFullScreen
                            width={"100%"}
                            height={420}
                        />
                    </div>
                    <div className="popup-description">{mod.description}</div>
                </div>
            </div>
        </div>
    );
};

export function LobbyPopup({ lobby, handleClose }: any) {
    require("./Popup.css");
    const content: Array<String> = lobby.description.split('\n');
    const lobbyContent: Array<JSX.Element> = content.map((element: any) => {
        return <p>{element}</p>;
    });
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <div className="popup-name">{lobby.name}</div>
                <div className="popup-lobby-content">
                    <div className="popup-lobby-description">{lobbyContent}</div>
                </div>
            </div>
        </div>
    );
};

export default Popup;