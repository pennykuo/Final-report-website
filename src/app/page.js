// 'use cilent'
import Carousel from './Carousel/Carousel';
import Work from './work/work'
import Work2 from './work2/work2'
import Work3 from './work3/work3'
import Work4 from './work4/work4'
import Work5 from './work5/work5'
import Work6 from './work6/work6'
import Work7 from './work7/work7'

import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';

function Home() {
  return (
      <layout>
        <main>
          <Carousel />
          <Work />
          <Work2 />
          <Work3 />
          <Work4 />
          <Work5 />
          <Work6 />
          <Work7 />

          <ScrollToTopButton />

        </main>
      </layout>
  );
}

export default Home
