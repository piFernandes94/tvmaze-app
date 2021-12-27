import { useEffect, useRef, useState } from "react";
import GetDataFunctions from "../scripts/GetDataFunctions";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { updateEpisodeList } from "../state/reducers/episodesReducer";

const EpisodeArea = () => {
    const dispatch = useAppDispatch();
    GetDataFunctions.fetchEpList.then(response => dispatch(updateEpisodeList(response)));
    const episodes = useAppSelector((state) => state.episodes.value);
    const [currentSeason, setCurrentSeason] = useState(0);
    let finalSeason = useRef(0);
    
    const renderBySeason = () => {
        const result = episodes.reduce((acc, item) => {
            if (item.season === currentSeason) {
                acc.push(<div key={item.id}>{item.name}</div>);
            }

            return acc
        }, [] as any);
        return result;
    }

    const renderSelectOptions = () => {
        const result = [];
        for (let i = 1; i <= finalSeason.current; i++) {
            result.push(
                <option key={i} value={i}  >{i}</option>
            )
        }
        result.reverse(); // Reverse so last season comes first

        return result;
    }

    useEffect(() => {
        if(episodes.length > 0){
            finalSeason.current = episodes[episodes.length - 1].season;// API is sorted by season so last item in array is garanteed to be from the final season
            setCurrentSeason(finalSeason.current);
        }
    }, [episodes])

    if(episodes.length > 0 && currentSeason != 0){
        return (
            <article>
                <select onChange={(element) => setCurrentSeason(Number(element.currentTarget.value))}>
                    {renderSelectOptions()}
                </select>
                <section>
                    {renderBySeason()}
                </section>
            </article>
        )
    }else{
        return (<div>loading...</div>)
    }
}

export default EpisodeArea