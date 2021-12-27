class ShowInfo {
    id: number;
    image: {
        medium: string
    };
    name: string;
    officialSite: string;
    summary: string;
    type: string;
    url: string;

    constructor(id: number,image: {medium: string,},name: string,officialSite: string,summary: string,type: string,url: string){
        this.id = id,
        this.image = image,
        this.name = name,
        this.officialSite = officialSite,
        this.summary = summary,
        this.type = type
        this.url = url
    }
}

export default ShowInfo