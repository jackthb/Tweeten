import ReactMarkdown from 'react-markdown';

const releaseHighlight = ({ release }) => {
  const dateOptions = {};
  return (
    <li>
      <time className='tweeten_tmtime'>
        <span>{new Date(release.published_at).toLocaleDateString()}</span>
        <span>{release.tag_name}</span>
      </time>
      <div className='tweeten_tmicon tweeten_tmicon-phone'></div>
      <div className='tweeten_tmlabel'>
        <h2>{release.name}</h2>
        <p>
          <ReactMarkdown>{release.body}</ReactMarkdown>
        </p>
      </div>
    </li>
  );
};

export default releaseHighlight;
/* <div className='timeline releases container'>
<h2 className='indicator'>Loading...</h2>
<ul className='tweeten-release'>hi</ul></div> */
