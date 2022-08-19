import axios from "axios";
import appSettings from "../app_settings.json";
import { lobbyProps, modProps } from "./interfaces";

export namespace API {
	export function getMods() {
		return axios.get(`${appSettings.url}/api/menu`)
	}
	
	export function getLobbys() {
		return axios.get(`${appSettings.url}/api/lobby`)
	}
	
	export function login(key: string) {
		return axios.post(`${appSettings.url}/api/login?key=${key}`);
	}
	
	export function uploadLobby(lobby: lobbyProps) {
		var error = 0;
		var errorFields: Array<string> = [];
		if (lobby.name === '') {
			error++;
			errorFields.push('name');
		}
		if (lobby.description === '') {
			error++;
			errorFields.push('description');
		}
		if (lobby.price === 0.00) {
			error++;
			errorFields.push('price');
		}
		if (lobby.status === 0) {
			error++;
			errorFields.push('status');
		}
		if (error > 0)
			throw Object.assign(new Error('useless msg'),{
				errorFields: errorFields
			});
		return axios.post(`${appSettings.url}/api/lobby`, lobby);
	}
	
	export function patchLobby(lobby: lobbyProps) {
		var error = 0;
		var errorFields: Array<string> = [];
		if (lobby.name === '') {
			error++;
			errorFields.push('name');
		}
		if (lobby.description === '') {
			error++;
			errorFields.push('description');
		}
		if (lobby.price === 0.00) {
			error++;
			errorFields.push('price');
		}
		if (lobby.status === 0) {
			error++;
			errorFields.push('status');
		}
		if (error > 0)
			throw Object.assign(new Error('useless msg'),{
				errorFields: errorFields
			});
		return axios.patch(`${appSettings.url}/api/lobby`, lobby);
	}
	
	export function uploadMod(mod: modProps) {
		var error = 0;
		var errorFields: Array<string> = [];
		if (mod.name === '') {
			error++;
			errorFields.push('name');
		}
		if (mod.downloadUrl === '') {
			error++;
			errorFields.push('downloadUrl');
		}
		if (mod.status === 0) {
			error++;
			errorFields.push('status');
		}
		if (mod.detectionStatus === 0) {
			error++;
			errorFields.push('detectionStatus');
		}
		if (error > 0)
			throw Object.assign(new Error('useless msg'),{
				errorFields: errorFields
			});
		return axios.post(`${appSettings.url}/api/menu`, mod);
	}
	
	export function patchMod(mod: modProps) {
		var error = 0;
		var errorFields: Array<string> = [];
		if (mod.name === '') {
			error++;
			errorFields.push('name');
		}
		if (mod.downloadUrl === '') {
			error++;
			errorFields.push('downloadUrl');
		}
		if (mod.status === 0) {
			error++;
			errorFields.push('status');
		}
		if (mod.detectionStatus === 0) {
			error++;
			errorFields.push('detectionStatus');
		}
		if (error > 0)
			throw Object.assign(new Error('useless msg'),{
				errorFields: errorFields
			});
		return axios.patch(`${appSettings.url}/api/menu`, mod);
	}
}

export default API;