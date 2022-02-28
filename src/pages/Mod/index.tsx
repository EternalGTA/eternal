import { Grid } from "@mui/material";
import ModCard from "../../components/Card"

interface cardProps {
	name: string,
	description: string,
	url: string,
	imageUrl: string,
	activate: boolean
};

const mods: Array<cardProps> = [
    {name: "test", description: "", url: "", imageUrl: "", activate: true}
];

export function Mod() {
    return (
        <>
            <div className="header"></div>
            <div className="content">
                <Grid className="home" container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {mods.map((mod, index) => (
                        <Grid item key={index}>
                            <ModCard 
                                name={mod.name} 
                                description={mod.description}
                                url={mod.url}
                                imageUrl={mod.imageUrl}
                                activate={mod.activate}
                            ></ModCard>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className="footer"></div>
        </>
    );
}