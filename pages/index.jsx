import About from '../components/About'
import Header from '../components/Header'
import ReactPageScroller from 'react-page-scroller'
import Projects from '../components/Projects'
import client from '../contentful'
import Contacts from '../components/Contacts'

export async function getServerSideProps() {
  const home = await client.getEntries({content_type: 'home', limit: 1})
  const about = await client.getEntries({content_type: 'about', limit: 1})
  const projects = await client.getEntries({content_type: 'projects', order: 'sys.createdAt'})
  const contacts = await client.getEntries({content_type: 'contacts', limit: 1})

  const [homeSection] = home.items
  const [aboutSection] = about.items
  const [contactsSection] = contacts.items

  return {
    props: {
      home: homeSection?.fields,
      about: aboutSection?.fields,
      projects: projects?.items,
      contacts: contactsSection?.fields
    }
  }
}

export default function Home({home, about, projects, contacts}) {

  return (
    <ReactPageScroller>
      <Header data={home} />
      <About data={about} />
      <Projects data={projects} />
      <Contacts data={contacts} />
    </ReactPageScroller>
  )
}
