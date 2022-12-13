import { FILTERS_LABELS, BUTTONS_LABELS, FILTERS_NAMES } from "./messages.js";

export const TRANSFERS = [
  {
    selected: true,
    label: FILTERS_LABELS.ALL,
    number: 100,
    id: 0,
  },
  {
    selected: false,
    label: FILTERS_LABELS.NO_TRANSFERS,
    number: 0,
    id: 1,
  },
  {
    selected: false,
    label: FILTERS_LABELS.ONE_TRANSFER,
    number: 1,
    id: 2,
  },
  {
    selected: false,
    label: FILTERS_LABELS.TWO_TRANSFERS,
    number: 2,
    id: 3,
  },
  {
    selected: false,
    label: FILTERS_LABELS.THREE_TRANSFERS,
    number: 3,
    id: 4,
  },
];

export const BUTTONS = [
  {
    label: BUTTONS_LABELS.CHEAPEST,
    selector: FILTERS_NAMES.CHEAP,
    extraClass: "left-button",
  },
  {
    label: BUTTONS_LABELS.FASTEST,
    selector: FILTERS_NAMES.FAST,
  },
  {
    label: BUTTONS_LABELS.OPTIMAL,
    selector: FILTERS_NAMES.OPTIMAL,
    extraClass: "right-button",
  },
];
