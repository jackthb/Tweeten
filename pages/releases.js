import Link from 'next/link';
import Footer from '../components/footer';
import ReleaseHighlight from '../components/releaseHighlight';

export async function getStaticProps(context) {
  let url = 'https://api.github.com/repos/MehediH/Tweeten/releases';
  const res = await fetch(url);
  const releases = await res.json();

  if (!releases) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      releases,
    },
  };
}

export default function Releases({ releases }) {
  return (
    <div>
      <header className='pretty'>
        <div className='inner container'>
          <a
            href='http://tweetenapp.com'
            title='Tweeten, an intuitive and powerful Twitter experience built for those who get real work done'
          >
            <img src='./images/logo.png' />
          </a>
          <div className='main'>
            <h1 className='donthide'>Tweeten Updates</h1>
            <p>
              All the latest Tweeten updates, changelogs, and download links.
            </p>
          </div>
          <Link href='/#download'>
            <a className='download'>Download Latest</a>
          </Link>
        </div>
      </header>
      <div className='timeline releases container'>
        <ul className='tweeten-release'>
          {releases.map((release) => (
            <ReleaseHighlight key={release.id} release={release} />
          ))}
        </ul>
      </div>
      <div className='container'>
        <Footer />
      </div>
    </div>
  );
}
