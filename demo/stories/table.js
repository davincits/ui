import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { Table } from "../../components";

const ROOMS = [
  { type: "Single", amount: 3, price: 17 },
  { type: "Twin", amount: 7, price: 21 },
  { type: "Double", amount: 5, price: 25 },
  { type: "Triple", amount: 2, price: 32 },
  { type: "Quadruple", amount: 1, price: 39 },
];

storiesOf("Table", module)
  .add("common", () => (
    <Container>
      {() => (
        <div style={{ width: "600px" }}>
          <Table cellsWidth={[13, 49, 11, 13, 14]}>
            <Table.Row>
              <Table.Head>ROOM</Table.Head>
              <Table.Head>Interval</Table.Head>
              <Table.Head>Count</Table.Head>
              <Table.Head>Price, €</Table.Head>
              <Table.Head>Total, €</Table.Head>
            </Table.Row>
            {
              ROOMS.map(({ type, amount, price }, i) => (
                <Table.Row key={type}>
                  <Table.Cell>{type}</Table.Cell>
                  <Table.Cell>
                    <span>12/12/20</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>13/12/20</span>
                  </Table.Cell>
                  <Table.Cell>{amount}</Table.Cell>
                  <Table.Cell align="right">{price.toFixed(2)}</Table.Cell>
                  <Table.Cell align="right">{(amount * price).toFixed(2)}</Table.Cell>
                </Table.Row>
              ))
            }
            <Table.Row>
              <Table.Cell width="86" align="right"><b>Total</b></Table.Cell>
              <Table.Cell width="14" align="right">
                <b>€{ROOMS.reduce((sum, { amount, price }) => sum + amount * price, 0)}</b>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
      )}
    </Container>
  ));
