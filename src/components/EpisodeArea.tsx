import { useEffect, useRef, useState } from "react";
import GetDataFunctions from "../scripts/GetDataFunctions";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { updateEpisodeList } from "../state/reducers/episodesReducer";
import styled from "styled-components";
import Episode from "./Episode";
import logo from '../logo.png';
import { Link } from "react-router-dom";

const EpisodeArea = () => {
    const dispatch = useAppDispatch();
    const episodes = useAppSelector((state) => state.episodes.value);
    const [currentSeason, setCurrentSeason] = useState(0);
    let finalSeason = useRef(0);

    const renderBySeason = () => {
        const result = episodes.reduce((acc, item) => { //filter episodes based on currentSeason State
            if (item.season === currentSeason) {
                acc.push(<Episode key={item.id} data={item} />);
            }

            return acc
        }, [] as any);
        return result;
    }

    const renderSelectOptions = () => { //render options for season select
        const result = [];
        for (let i = 1; i <= finalSeason.current; i++) {
            result.push(
                <option key={i} value={i} selected={i === currentSeason} >{i}</option>
            )
        }

        return result;
    }

    useEffect(() => {
        if(episodes.length === 0){ //if episode length is 0 then fetch episode list and store it in global store
            GetDataFunctions.fetchEpList.then(response => dispatch(updateEpisodeList(response)));
        }

        if (episodes.length > 0) {
            finalSeason.current = episodes[episodes.length - 1].season;// API is sorted by season so last item in array is garanteed to be from the final season
            setCurrentSeason(finalSeason.current);
        }
    }, [episodes])

    const Article = styled.article`
        min-height:100vh;
        display:block;
        justify-content: center;
        margin-top:100px;
    `

    const Container = styled.div`
        max-width:780px;
        margin:0 auto;
        text-align: center;
    `

    const EpisodeList = styled.ul`
        display:flex;
        flex-wrap:wrap;
    `

    const SelectLabel = styled.label`
        margin-right:15px;
    `

    const HomeLogoImage = styled(Link)`
        width:100%;
        display:flex;
        justify-content:center;
        margin-bottom:50px;
    `

    const HomeLogo = styled.img`
        height:150px;
        margin: 0 auto;
    `

    const Loading = styled.div`
        font-size:24px;
        text-align:center;
        margin-top:250px;
    `

    if (episodes.length > 0 && currentSeason != 0) {
        return (
            <Article>
                <HomeLogoImage to="/" title="Home">
                    <HomeLogo src={logo} alt="PowerPuff Girls" />
                </HomeLogoImage>

                <Container>
                    <SelectLabel>Season</SelectLabel>
                    <select onChange={(element) => setCurrentSeason(Number(element.currentTarget.value))}>
                        {renderSelectOptions()}
                    </select>
                    <section>
                        <EpisodeList>
                            {renderBySeason()}
                        </EpisodeList>
                    </section>
                </Container>
            </Article>
        )
    } else {
        return (<Loading>Loading...</Loading>)
    }
}

export default EpisodeArea