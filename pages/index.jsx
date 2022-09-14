import About from '../components/About'
import Header from '../components/Header'
import ReactPageScroller from 'react-page-scroller'
import Projects from '../components/Projects'

export default function Home() {

  return (
    <ReactPageScroller>
      <Header />
      <About />
      <Projects />
    </ReactPageScroller>
  )
}
