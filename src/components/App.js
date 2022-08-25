import { useState } from 'react';
import SearchForm from "./SearchForm";
import Header from "./Header";
import Results from "./Results";
import api from "./../consts/api";

const App = () => {
  const [results, setResults] = useState([]);
  const [resultMsg, setResultMsg] = useState('');
  const [favoriteId, setFavoriteId] = useState("");
  const [wallId, setWallId] = useState(0);

  const onClickChange = () => {
    setWallId(wallId + 1);
    if (wallId > 9) {
      setWallId(0);
    }
  }

  const giveWallClassName = (wallId) => {
    switch (wallId) {
      case 0:
        return "default";
        break;
      case 1:
        return "a";
        break;
      case 2:
        return "b";
        break;
      case 3:
        return "c";
        break;
      case 4:
        return "d";
        break;
      case 5:
        return "e";
        break;
      case 6:
        return "f";
        break;
      case 7:
        return "g";
        break;
      case 8:
        return "h";
        break;
      case 9:
        return "i";
        break;
      case 10:
        return "j";
        break;
      default:
        return "default";
    }
  }

  const onClickSearch = async (term) => {
    // console.log(term);

    if (term) {

      await api.get('/search', {
        params: {
          q: term,
        },
      }).then(res => {
        // console.log(res.data.items);
        let result = [];
        result = res.data.items.map(item => {
          let obj = {};
          return obj = {
            videoId: item.id.videoId,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            publishedAt: item.snippet.publishedAt
          }
        });
        // console.log(result);
        setResults(result);
      }).catch(() => {
        setResultMsg('Error occured.Reload the page and try again.');
      });
    }
  }

  return (
    <div className={`app ${giveWallClassName(wallId)}`}>
      <Header onClickChange={onClickChange} />
      <div className="app__bg-container">
        <div className="app__container">
          <div className="app__title"></div>
          <SearchForm onClickSearch={onClickSearch} />
          <Results resultMsg={resultMsg} results={results} />
        </div>
      </div>
    </div >
  );
}

export default App;
