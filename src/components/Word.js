import { useParams } from "react-router-dom";

const Word = () => {
    const { word, color, bgcolor } = useParams();
    return (
        <div>
            {console.log("Word is: " + word, "Color is: " + color, "BGColor is: " + bgcolor)}
            {isNaN(word) ?
                <h1 style={
                    { color: color, backgroundColor: bgcolor }
                }>The word is: {word}</h1>
                :
                <h1 style={{ color: color, backgroundColor: bgcolor }
                }>The number is: {word}</h1>

            }
        </div>
    );
}
export default Word;