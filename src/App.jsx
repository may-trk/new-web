
import {
  Hero,
  PreWar,
  InitialLoses,
  EconmyFragmentation,
  MassiveInflation,
  ConflictOverResources,
  PublicSector,
  HouthisUpperHand,
  YemenisFaring
  
} from './sections/sections';

const App = () => {
  return (
    <main className='relative bg-red-50'>
    <section className='Section-W'>
    <Hero />
    </section>
    <section className='Section-W'>
    <PreWar />
    </section>
    <section className='Section-W'>
    <PublicSector />
    </section>
    <section className='Section-W'>
    < InitialLoses />
    </section>
    <section className='Section-W'>
    <EconmyFragmentation />
    </section>
    <section className='Section-W'>
    <MassiveInflation />
    </section>
    <section className='Section-W'>
    < ConflictOverResources />
    </section>
    <section className='Section-W'>
    <HouthisUpperHand />
    </section>
    <section className='Section-W'>
    <YemenisFaring />
    </section>

    </main>
   
  );
}

export default App;
