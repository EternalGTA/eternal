import { Grid } from "@mui/material";

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
            <Grid className="home" container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {buttons.map((element, index) => (
                    <Grid item key={index}>
                        <button className="menu-button">{element}</button>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}