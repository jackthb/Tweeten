import ReactMarkdown from 'react-markdown';

const releaseHighlight = ({ release }) => {
  return (
    <li>
      <time className='tweeten_tmtime'>
        <span>{new Date(release.published_at).toLocaleDateString()}</span>
        <span>{release.tag_name}</span>
      </time>
      <div className='tweeten_tmicon tweeten_tmicon-phone'></div>
      <div className='tweeten_tmlabel'>
        <h2>{release.name}</h2>
        <ReactMarkdown>{release.body}</ReactMarkdown>
        <div className='download-release'>
          <span>Download now:</span>
          <a
            href={`https://github.com/MehediH/Tweeten/releases/download/${release.tag_name}/TweetenSetup.exe`}
            className='dl-link'
            target='_blank'
            title='Download Tweeten for your Windows 7, 8, or 10 PC, today.'
          >
            Windows (64-bit)
          </a>
          <a
            href={`https://github.com/MehediH/Tweeten/releases/download/${release.tag_name}/tweeten-darwin-x64.zip`}
            className='dl-link'
            target='_blank'
            title='Download Tweeten for your Mac, today.'
          >
            macOS
          </a>
        </div>
      </div>
    </li>
  );
};

export default releaseHighlight;
