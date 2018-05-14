# Overview
For certain cell values the `xlsx` package yields
different formatted display text than Excel.

## Automated Tests
Running `npm test` will execute an automated test, contained in
`test/index.spec.js`, which demonstrates this issue.

## Example
The file in `test/fixtures/test.xlsx` contains three values:

- `1.225`
- `100.665`
- `656.685`

These are formatted to display at two decimal places, and 
consequently are displayed as follows in Excel:

- `1.23`
- `100.67`
- `652.69`

When parsed by the `xlsx` package the `w` property for each cell,
which represents the formatted value, is as follows:

- `1.23`
- `100.67`
- `652.68`

The last value (C1 in the sheet) is `0.01` less than is displayed 
in Excel.
