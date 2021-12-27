import styled from "styled-components";
import { useAppSelector } from "../state/hooks";

const Episode = (props: any) => {
    const showInfo = useAppSelector((state) => state.showInfo.value);
    const epImage = props.data.image ? props.data.image.medium : showInfo.image.medium; // incase episode has no image, use show image instead

    const EpisodeContainer = styled.li`
        display:block;
        width:33.33%;
        padding: 10px 5px;
    `

    const EpisodeImage = styled.div`
        background-image: url(${epImage});
        height:140px;
        width:100%;
        background-position-y:32%;
        background-repeat:no-repeat;
        background-size: cover;
    `

    const EpisodeInfo = styled.div`
        border:1px solid rgba(0,0,0,0.3);
        border-top: none;
        padding:14px;
    `

    const EpisodeTitle = styled.h1`
        font-size:14px;
        margin:0;
        padding-bottom:14px;
        height:42px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
    `

    const EpisodeDescription = styled.div`
        font-size:12px;
        height:42px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
    `

    const EpisodeAirDate = styled.div`
        font-size:10px;
        margin-top:14px;
    `

    return (
        <EpisodeContainer>
            <a href={props.data.url} target="_blank" title={props.data.name}>
                <EpisodeImage />
                <EpisodeInfo>
                    <EpisodeTitle>{props.data.name}</EpisodeTitle>
                    <EpisodeDescription dangerouslySetInnerHTML={{ __html: props.data.summary }}></EpisodeDescription>
                    <EpisodeAirDate>{props.data.airdate}</EpisodeAirDate>
                </EpisodeInfo>
            </a>
        </EpisodeContainer>
    )
}

export default Episode