export enum LOBBYSTATUS {
    UNKNOWN,
    AVAILABLE,
    UNAVAILABLE
}

export enum MODSTATUS {
    UNKNOWN,
	UNDETECT,
	DETECT,
	RISKY,
	UPDATING
}

export enum MODSTATE {
	UNKNOWN,
	AVAILABLE,
	UNAVAILABLE
}

export interface modProps {
    rowid: number,
	name: string,
	description: string,
	downloadUrl: string,
	videoUrl: string,
	imageUrl: string,
	detectionStatus: MODSTATUS,
	status: MODSTATE
}

export interface lobbyProps {
    rowid: number,
	name: string,
	description: string,
	price: number,
	status: LOBBYSTATUS
}