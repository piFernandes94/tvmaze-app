import { Link } from "react-router-dom";
import { useAppSelector } from "../state/hooks";
import styled from "styled-components";

const HomePage = () => {
    const showInfo = useAppSelector((state) => state.showInfo.value);

    const Article = styled.article`
        min-height:100vh;
        display:flex;
        justify-content: center;
        align-items: center;
    `

    const Container = styled.div`
        max-width: 50%;
        text-align: center;
    `

    const Title = styled.h1`
        font-size: 40px;
        font-weight:500;
        text-align:center;
    `

    const Image = styled.img`
        max-height: 50vh;
        margin: 0 auto;
    `

    const StyledLink = styled(Link)`
        border: 1px solid #333;
        padding: 15px;
        display: block;
        width: 350px;
        margin: 25px auto 0px auto;
        transition: all 0.3s ease;
        text-decoration: none;
        text-transform: capitalize;
        &:hover{
            transform: translateY(-5px)
        }
    `

    const ShowDescription = styled.div`
        text-align:center;
        margin-top:14px;
    `

    return (
        <Article>
            <Container>
                <Title>
                    {showInfo.name}
                </Title>
                <a href={showInfo.url} target="_blank" title={showInfo.name}>
                    <picture>
                        <source media="(min-width:992px)" srcSet={showInfo.image.original} />
                        <Image src={showInfo.image.medium} alt={showInfo.name} />
                    </picture>
                </a>
                <ShowDescription dangerouslySetInnerHTML={{ __html: showInfo.summary }}></ShowDescription>

                <StyledLink to="/episodes">View full episode list</StyledLink>
            </Container>
        </Article>
    )
}

export default HomePage