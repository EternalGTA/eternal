import Button from "../../components/Button";

const buttons: Array<string> =[
    "Home",
    "Lobby",
    "Mod Menus",
    "Youtube",
    "Discord"
]

export function Home() {
    return (
        <>
            <div className="home">
                {buttons.map(element => {
                    return <Button name={element}></Button>
                })}
            </div>
        </>
    );
}