const fetchShowInfo = async () => {
    try {
        const response = await fetch('https://api.tvmaze.com/shows/6771');
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

const fetchEpList = async () => {
    try {
        const response = await fetch('https://api.tvmaze.com/shows/6771/episodes');
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export default{
    fetchShowInfo: fetchShowInfo(),
    fetchEpList: fetchEpList()
}