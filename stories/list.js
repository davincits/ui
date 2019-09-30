import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { List } from '../components';

const LIST = [{"id":1,"label":"Leexo"},
{"id":2,"label":"Dazzlesphere"},
{"id":3,"label":"Vipe"},
{"id":4,"label":"Topicblab"},
{"id":5,"label":"Buzzshare"},
{"id":6,"label":"Thoughtblab"},
{"id":7,"label":"Jetpulse"},
{"id":8,"label":"Youspan"},
{"id":9,"label":"Wordware"},
{"id":10,"label":"Jaxspan"}];

const LIST_24 = [{"id":1,"label":"Flemming","imgSrc":"https://robohash.org/etdictasit.jpg?size=24x24&set=set1"},
{"id":2,"label":"Boot","imgSrc":"https://robohash.org/dictaadipisciqui.jpg?size=24x24&set=set1"},
{"id":3,"label":"Vera","imgSrc":"https://robohash.org/iurepraesentiumautem.jpg?size=24x24&set=set1"},
{"id":4,"label":"Maurits","imgSrc":"https://robohash.org/providentmaioresnon.jpg?size=24x24&set=set1"},
{"id":5,"label":"Deidre","imgSrc":"https://robohash.org/temporibusconsequaturaut.jpg?size=24x24&set=set1"},
{"id":6,"label":"Mae","imgSrc":"https://robohash.org/providenthicarchitecto.jpg?size=24x24&set=set1"},
{"id":7,"label":"Beatriz","imgSrc":"https://robohash.org/velutfuga.jpg?size=24x24&set=set1"},
{"id":8,"label":"Rosy","imgSrc":"https://robohash.org/eoseaid.jpg?size=24x24&set=set1"},
{"id":9,"label":"Ginevra","imgSrc":"https://robohash.org/etfacereasperiores.jpg?size=24x24&set=set1"},
{"id":10,"label":"Svend","imgSrc":"https://robohash.org/voluptatumautemenim.jpg?size=24x24&set=set1"}];

const LIST_40 = [{"id":1,"label":"Cos","imgSrc":"https://robohash.org/totamdistinctioaliquam.jpg?size=40x40&set=set1"},
{"id":2,"label":"Victor","imgSrc":"https://robohash.org/dolorumsintnumquam.jpg?size=40x40&set=set1"},
{"id":3,"label":"Tab","imgSrc":"https://robohash.org/maioressuntaccusamus.jpg?size=40x40&set=set1"},
{"id":4,"label":"Sheffie","imgSrc":"https://robohash.org/earumintotam.jpg?size=40x40&set=set1"},
{"id":5,"label":"Muire","imgSrc":"https://robohash.org/delenitifugavelit.jpg?size=40x40&set=set1"},
{"id":6,"label":"Lanae","imgSrc":"https://robohash.org/nihilcupiditatearchitecto.jpg?size=40x40&set=set1"},
{"id":7,"label":"Vernen","imgSrc":"https://robohash.org/voluptatumiurelabore.jpg?size=40x40&set=set1"},
{"id":8,"label":"Shawn","imgSrc":"https://robohash.org/praesentiumincidunteos.jpg?size=40x40&set=set1"},
{"id":9,"label":"Ade","imgSrc":"https://robohash.org/aquiamagnam.jpg?size=40x40&set=set1"},
{"id":10,"label":"Jarrid","imgSrc":"https://robohash.org/expeditadolorumsed.jpg?size=40x40&set=set1"}];

storiesOf('List', module)
  .add('common', () => (
    <Container width="240px">
      {() => (
        <List items={LIST} />
      )}
    </Container>
  ))
  .add('with image', () => (
    <Container width="240px">
      {() => (
        <List items={LIST_24} />
      )}
    </Container>
  ))
  .add('with large image', () => (
    <Container width="240px">
      {() => (
        <List items={LIST_40} imageSize="large"/>
      )}
    </Container>
  ))