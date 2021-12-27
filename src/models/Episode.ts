class Episodes {
    id: number;
    image: {
        medium: string,
    };
    name: string;
    summary: string;
    url: string;
    season: number;
    number: number;

    constructor(id: number,image: {medium: string,},name: string,summary: string,url: string,season: number,number: number){
        this.id = id,
        this.image = image,
        this.name = name,
        this.summary = summary,
        this.url = url,
        this.season = season,
        this.number = number
    }
}

export default Episodes