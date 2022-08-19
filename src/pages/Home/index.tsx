import { Grid } from "@mui/material";

const buttons: Array<string> = [
    "Home",
    "Lobby",
    "Mod Menus",
    "Youtube",
    "Discord"
]

const redirection: Array<string> = [
    "",
    "lobby",
    "mod-menu",
    "ytb",
    "discord"
];

export function Home() {
    return (
        <>
            <div className="home-title"><h1>ETERNAL GTA</h1></div>
            <Grid className="home" container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item key={0}>
                    <a href={""} className="menu-button">Home</a>
                </Grid>
                <Grid item key={1}>
                    <a href="#/lobby" className="menu-button">Lobby</a>
                </Grid>
                <Grid item key={2}>
                    <a href="#/mod-menu" className="menu-button">Mod Menu</a>
                </Grid>
                <Grid item key={3}>
                    <a href="https://youtube.com/eternalgta" className="menu-button">YouTube</a>
                </Grid>
                <Grid item key={4}>
                    <a href={"https://discord.gg/eternal-gta"} className="menu-button">Discord</a>
                </Grid>
                {/* {buttons.map((element, index) => {
                    if (index === 3) {
                        return <Grid item key={index}>
                            <a href={"https://youtube.com/eternalgta"} className="menu-button">{element}</a>
                        </Grid>
                    } else if (index === 4) {
                        return <Grid item key={index}>
                            <a href={"https://discord.gg/eternal-gta"} className="menu-button">{element}</a>
                        </Grid>;
                    }
                    const href = `#/${redirection[index]}`;
                    return <Grid item key={index}>
                        <a href=href className="menu-button">{element}</a>
                    </Grid>
                })} */}
            </Grid>
        </>
    );
}