import { TimeStamps } from "./TimeStamps";

export default interface Song extends TimeStamps {
    id: number;
    name: string;
    song_url: string;
    reproductions: number;
    image_url: string;
}