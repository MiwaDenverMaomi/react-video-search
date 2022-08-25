import dayjs from 'dayjs';

const ResultItem = ({ result }) => {
  const omit = (str) => {
    const regex = new RegExp('[^\x01-\x7E]');
    const validResult = str.match(regex);
    if (validResult!==null&&validResult.length>0 && str.length > 30) {
      return str.slice(0, 30) + "...";
    } else if (validResult!==null&&validResult.length>0 && str.length < 30) {
      return str.slice(0, 30);
    } else if (validResult===null && str.length > 55) {
      return str.slice(0, 55) + "...";
    } else {
      return str.slice(0, 55);
    }
  }

  return (
    <div className="results__item active">
      <div className="results__window">
        <iframe className="results__iframe" src={`//www.youtube.com/embed/${result.videoId}?loop=1&start=30&controls=0?modestbranding=1showinfo=0fs=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="results__info">
        <div className="results__video-title">{result.title? omit(result.title) : ""}</div>
        <div className="results__video-author">{result.channelTitle ? omit(result.channelTitle) : ""}</div>
        <div className="results__video-description">Published:{dayjs(result.publishedAt).format('MM/DD/YYYY')}</div>
      </div>
      <a className="results__link" href={`https://www.youtube.com/watch?v=${result.videoId}`} target="_blank"><i className="far fa-hand-point-right"></i>YouTube</a>
    </div>

  );
};

export default ResultItem;
