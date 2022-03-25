import { Button, Grid } from "@mui/material";

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
                {buttons.map((element, index) => (
                    <Grid item key={index}>
                        <a href={"/#/" + redirection[index]} className="menu-button">{element}</a>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}