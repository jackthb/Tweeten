import Link from 'next/link';
import Footer from '../components/footer';

export default function Donate() {
  
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
            <h1>Tweeten Updates</h1>
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
        <h2 className='indicator'>Loading...</h2>
        <ul className='tweeten-release'></ul>
      </div>
      <div className='container'>
        <Footer />
      </div>
    </div>
  );
}
