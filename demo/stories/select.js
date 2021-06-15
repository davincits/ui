import React from "react";

import { storiesOf } from "../utils";
import { Select } from "../../components";
import Container from "./Container";

const OPTIONS = [
  { value: 1, label: "Gulgowski LLC" },
  { value: 2, label: "Kertzmann-Borer" },
  { value: 3, label: "Dickinson-Legros" },
  { value: 4, label: "Willms, Gislason and Stokes" },
  { value: 5, label: "Wiegand and Sons" },
  { value: 6, label: "Metz, Bosco and Donnelly" },
  { value: 7, label: "O\"Kon Group" },
  { value: 8, label: "Daniel-Boyer" },
  { value: 9, label: "Rutherford-Buckridge" },
  { value: 10, label: "Abshire-Rempel" },
  { value: 11, label: "Hilll-Heller" },
  { value: 12, label: "Collins Group" },
  { value: 13, label: "Howell-Leannon" },
  { value: 14, label: "Krajcik Inc" },
  { value: 15, label: "Schuppe, Leannon and Friesen" },
  { value: 16, label: "Dooley-Eichmann" },
  { value: 17, label: "Daniel LLC" },
  { value: 18, label: "Brekke-Bartoletti" },
  { value: 19, label: "Dibbert, Boyle and Spencer" },
  { value: 20, label: "Stracke LLC" },
  { value: 21, label: "Paucek Group" },
  { value: 22, label: "Stoltenberg and Sons" },
  { value: 23, label: "Thompson, Hodkiewicz and Stanton" },
  { value: 24, label: "Berge-Legros" },
  { value: 25, label: "VonRueden, Sporer and Waelchi" },
  { value: 26, label: "Cruickshank-Keebler" },
  { value: 27, label: "Macejkovic LLC" },
  { value: 28, label: "Herzog-Huel" },
  { value: 29, label: "O\"Connell LLC" },
  { value: 30, label: "Toy-Farrell" },
  { value: 31, label: "Emmerich, Wisoky and Rohan" },
  { value: 32, label: "Kirlin LLC" },
  { value: 33, label: "Kling-Heathcote" },
  { value: 34, label: "Mertz LLC" },
  { value: 35, label: "Smith and Sons" },
  { value: 36, label: "Strosin, Roob and Parisian" },
  { value: 37, label: "Breitenberg Group" },
  { value: 38, label: "Boehm, Kirlin and Bartell" },
  { value: 39, label: "Borer and Sons" },
  { value: 40, label: "Reilly, Pfannerstill and Mueller" },
  { value: 41, label: "Harvey, Ratke and Olson" },
  { value: 42, label: "Emard Inc" },
  { value: 43, label: "Heidenreich LLC" },
  { value: 44, label: "Nitzsche, Bechtelar and Rempel" },
  { value: 45, label: "McDermott Inc" },
  { value: 46, label: "Senger, McGlynn and Jones" },
  { value: 47, label: "Stiedemann, Simonis and Mante" },
  { value: 48, label: "Parisian Group" },
  { value: 49, label: "Mitchell, Beer and Franecki" },
  { value: 50, label: "Jaskolski-Mann" },
];

storiesOf("Select")
  .add("common", () => (
    <Container>
      {({ value = OPTIONS[20].value, onChange }) => (
        <div style={{ width: "240px" }}>
          <div>
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange} />
          </div>
          <div className="u-padding-top">
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange} />
          </div>
          <div className="u-padding-top">
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange}
              search />
          </div>
          <div className="u-padding-top">
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange}
              disabled />
          </div>
          <div className="u-padding-top">
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange}
              error />
          </div>
          <div className="u-padding-top">
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange}
              error="Error text ..." />
          </div>
        </div>
      )}
    </Container>
  ));
