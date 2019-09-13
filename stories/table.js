import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import {
  Table,
  TR as Row,
  TH as Head,
  TD as Cell,
} from '../src';

const ROOMS = [
  { type: 'Single', amount: 3, price: 17 },
  { type: 'Twin', amount: 7, price: 21 },
  { type: 'Double', amount: 5, price: 25 },
  { type: 'Triple', amount: 2, price: 32 },
  { type: 'Quadruple', amount: 1, price: 39 },
];

storiesOf('Table', module)
  .add('common', () => (
    <Container>
      {() => (
        <div style={{ width: '600px' }}>
          <Table cellsWidth={[13, 49, 11, 13, 14]}>
            <Row>
              <Head>ROOM</Head>
              <Head>Interval</Head>
              <Head>Count</Head>
              <Head>Price, €</Head>
              <Head>Total, €</Head>
            </Row>
            {
              ROOMS.map(({ type, amount, price }, i) => (
                <Row key={i}>
                  <Cell>{type}</Cell>
                  <Cell>
                    <span>12/12/20</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>13/12/20</span>
                  </Cell>
                  <Cell>{amount}</Cell>
                  <Cell align="right">{price.toFixed(2)}</Cell>
                  <Cell align="right">{(amount * price).toFixed(2)}</Cell>
                </Row>
              ))
            }
            <Row>
              <Cell width="100">
                <div style={{ width: '100%', textAlign: 'right', fontWeight: 'bold' }}>
                  <span>Total: </span>
                  <span> €</span>
                  <span>{ROOMS.reduce((sum, { amount, price }) => sum + amount * price, 0)}</span>
                </div>
              </Cell>
            </Row>
          </Table>
        </div>
      )}
    </Container>
  ))
