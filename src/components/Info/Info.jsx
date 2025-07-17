import play from "../../../public/assets/play.svg";
import link from "../../../public/assets/link.svg";
import smile from "../../../public/assets/smile.png";
import "./Info.scss";

export default function Info({ error, wordData }) {
  if (error !== "") {
    return (
      <div className="error">
        <img src={smile} alt="" />
        <h2>No Definitions Found</h2>
        <p>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    );
  }
  if (!wordData) return null;

  const phonetic =
    wordData.phonetic || wordData.phonetics.find((p) => p.text)?.text || "";
  const audio = wordData.phonetics.find((p) => p.audio)?.audio || "";

  return (
    <div className="information">
      <div className="text">
        <div className="item">
          <h1>{wordData.word}</h1>
          <h4>{phonetic}</h4>
        </div>
        <div className="audio">
          {audio && (
            <button
              onClick={() =>
                new Audio(
                  audio.startsWith("https:") ? audio : "https:" + audio
                ).play()
              }
            >
              <img src={play} alt="Play audio" />
            </button>
          )}
        </div>
      </div>

      {wordData.meanings.map((meaning, mi) => (
        <div key={mi} className="meaning-section">
          <div className="line">
            <h4>{meaning.partOfSpeech}</h4>
            <div className="hr"></div>
          </div>
          <div className="meaning">
            <h4>Meaning</h4>
            <ul>
              {meaning.definitions.map((def, di) => (
                <li key={di}>{def.definition}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {wordData.sourceUrls?.length > 0 && (
        <div className="footer">
          <div className="hr"></div>
          <div className="line">
            <h4>Source</h4>
            <div className="link">
              <a href={wordData.sourceUrls[0]} target="_blank">
                {wordData.sourceUrls[0]}
              </a>
              <img src={link} alt="source link" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
