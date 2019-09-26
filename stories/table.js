import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import {
  Table,
  TR,
  TH,
  TD,
} from '../components';

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
            <TR>
              <TH>ROOM</TH>
              <TH>Interval</TH>
              <TH>Count</TH>
              <TH>Price, €</TH>
              <TH>Total, €</TH>
            </TR>
            {
              ROOMS.map(({ type, amount, price }, i) => (
                <TR key={i}>
                  <TD>{type}</TD>
                  <TD>
                    <span>12/12/20</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>13/12/20</span>
                  </TD>
                  <TD>{amount}</TD>
                  <TD align="right">{price.toFixed(2)}</TD>
                  <TD align="right">{(amount * price).toFixed(2)}</TD>
                </TR>
              ))
            }
            <TR>
              <TD width="86" align="right"><b>Total</b></TD>
              <TD width="14" align="right">
                <b>€{ROOMS.reduce((sum, { amount, price }) => sum + amount * price, 0)}</b>
              </TD>
            </TR>
          </Table>
        </div>
      )}
    </Container>
  ))
