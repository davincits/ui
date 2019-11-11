import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { List } from '../components';

const LIST = [
  {
    id: '9d90e910-0451-48d0-bb0e-fbf3266b1141',
    label: 'Kurt Stevens',
  },
  {
    id: '355a15c4-dc58-44c5-80d8-3f0fb50e0bbb',
    label: 'Vera Duncan',
  },
  {
    id: '23eaacce-229b-44e5-880e-dd498a7e2722',
    label: 'Pola Brevik',
  },
  {
    id: 'cd228287-d9cc-4277-8fff-b4ca473810ab',
    label: 'Jake Williams',
  },
  {
    id: '8fe02312-4668-4255-ac91-9033b8cbff5e',
    label: 'Amy Phillips',
  },
  {
    id: '90171f4b-2239-4ccc-839e-9eb6fcf34e6d',
    label: 'ثنا حیدری',
  },
  {
    id: '0b400c49-9480-4f33-a40f-91a9e2f0c7a7',
    label: 'Clément Petit',
  },
  {
    id: 'd25c32be-f8b9-4cfc-9e25-df31b163d083',
    label: 'Stefano Sternberg',
  },
  {
    id: '5c4d52a5-3528-4ef9-81c9-cdfad68ec0a9',
    label: 'Marly Clerx',
  },
  {
    id: 'e5c0777b-4a0d-4c46-af90-12443754fee5',
    label: 'Austin Griffin',
  },
];

const LIST_24 = [
  {
    id: 'd5813a7a-a6fb-46fa-8e6a-6caf22db908c',
    label: 'Nina Gauthier',
    img: 'https://randomuser.me/api/portraits/thumb/women/17.jpg',
  },
  {
    id: '7c9476be-c77b-4d4f-88e0-67ac977677f1',
    label: 'Jesse Patterson',
    img: 'https://randomuser.me/api/portraits/thumb/men/21.jpg',
  },
  {
    id: 'fa4c06f9-037c-4a25-a5d4-e34b1b99cd3a',
    label: 'آرسین گلشن',
    img: 'https://randomuser.me/api/portraits/thumb/men/32.jpg',
  },
  {
    id: 'af8cb21e-3312-49eb-9a44-2f31ba41b56c',
    label: 'Adam Christiansen',
    img: 'https://randomuser.me/api/portraits/thumb/men/84.jpg',
  },
  {
    id: '5d739ba6-329a-4ca0-8101-17a228e81740',
    label: 'Hans-Bernd Holm',
    img: 'https://randomuser.me/api/portraits/thumb/men/98.jpg',
  },
  {
    id: '5356ddd5-7bc1-4745-86f8-fded21283655',
    label: 'Clinton Carroll',
    img: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
  },
  {
    id: 'db1aa9e1-09e4-49d5-907f-8fe5cccd055d',
    label: 'Zackary Mackay',
    img: 'https://randomuser.me/api/portraits/thumb/men/31.jpg',
  },
  {
    id: '83278022-69da-4fb0-abe4-2bda58edd8a7',
    label: 'Meral Özberk',
    img: 'https://randomuser.me/api/portraits/thumb/women/9.jpg',
  },
  {
    id: '788fb26a-4260-4f4c-80da-3efb43c1c01b',
    label: 'Abbey Gilbert',
    img: 'https://randomuser.me/api/portraits/thumb/women/42.jpg',
  },
  {
    id: 'd1907eba-c7be-4307-a35b-2f8446b83542',
    label: 'Coşkun Bademci',
    img: 'https://randomuser.me/api/portraits/thumb/men/39.jpg',
  },
];

const LIST_40 = [
  {
    id: '2b97558c-58b7-4437-9631-4b3ddcc686d0',
    label: 'Bertram Pedersen',
    img: 'https://randomuser.me/api/portraits/thumb/men/87.jpg',
  },
  {
    id: 'f5e2f412-c24e-44f3-917d-55f399ba7655',
    label: 'Elly Widmann',
    img: 'https://randomuser.me/api/portraits/thumb/women/65.jpg',
  },
  {
    id: '67abd417-106e-4160-a121-93c4ff34641a',
    label: 'Vetle Østvik',
    img: 'https://randomuser.me/api/portraits/thumb/men/82.jpg',
  },
  {
    id: 'c2b65d74-cfb0-4d22-a550-46665feac4d8',
    label: 'Mason Martin',
    img: 'https://randomuser.me/api/portraits/thumb/men/8.jpg',
  },
  {
    id: '8d3b8c73-1854-4be6-a8a9-5b23141a07ed',
    label: 'Vildan Saygıner',
    img: 'https://randomuser.me/api/portraits/thumb/women/27.jpg',
  },
  {
    id: '2f64f032-6c4d-4aee-bb8e-0ad3b3fe5a61',
    label: 'Reinaldo de Souza',
    img: 'https://randomuser.me/api/portraits/thumb/men/11.jpg',
  },
  {
    id: '19c164bb-42ec-4272-a1ab-be78d8013c51',
    label: 'Lea Larsen',
    img: 'https://randomuser.me/api/portraits/thumb/women/64.jpg',
  },
  {
    id: '6ac88e0c-3bc4-475f-831e-f1f9ecc4bb45',
    label: 'Allie Moreno',
    img: 'https://randomuser.me/api/portraits/thumb/women/83.jpg',
  },
  {
    id: '2dbe05f8-614e-462d-9776-34f1210ac9ca',
    label: 'Sara Heinonen',
    img: 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
  },
  {
    id: '99484c81-aae2-4b06-8019-8095160c269a',
    label: 'Brittany Jackson',
    img: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
  },
];

storiesOf('List', module)
  .add('common', () => (
    <Container width="240px">
      {() => (
        <List items={LIST} onClick={action('selected')} />
      )}
    </Container>
  ))
  .add('with image', () => (
    <Container width="240px">
      {() => (
        <List items={LIST_24} onClick={action('selected')} />
      )}
    </Container>
  ))
  .add('with large image', () => (
    <Container width="240px">
      {() => (
        <List items={LIST_40} onClick={action('selected')} imageSize="large" />
      )}
    </Container>
  ));
