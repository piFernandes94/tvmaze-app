import { Link } from "react-router-dom";
import { useAppSelector } from "../state/hooks";

const HomePage = () => {
    const showInfo = useAppSelector((state) => state.showInfo.value);
    
    return (
        <article>
            <span>
                {showInfo.name}
            </span>
            <div dangerouslySetInnerHTML={{__html: showInfo.summary}}></div>
            <img src={showInfo.image.medium} />
            <Link to="/episodes">View full episode list</Link>
        </article>
    )
}

export default HomePage