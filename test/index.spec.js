const assert = require('assert')
const path = require('path');
const XLSX = require('xlsx');

describe('src/index', () => {
  it('rounds decimal places to the same formatted display value as Excel', async () => {
    const workbook = XLSX.readFile(path.resolve(__dirname, 'fixtures', 'test.xlsx'));

    assert.deepEqual(workbook.Sheets.Sheet1.A1.v, 1.225, 'A1 value should be 1.225')
    assert.deepEqual(workbook.Sheets.Sheet1.A1.w, '1.23', 'A1 formatted text should be 1.23')
    
    assert.deepEqual(workbook.Sheets.Sheet1.B1.v, 100.665, 'B1 value should be 100.665')
    assert.deepEqual(workbook.Sheets.Sheet1.B1.w, '100.67', 'A1 formatted text should be 100.67')
    
    assert.deepEqual(workbook.Sheets.Sheet1.C1.v, 652.685, 'C1 value should be 652.685')
    assert.deepEqual(workbook.Sheets.Sheet1.C1.w, '652.69', 'C1 formatted text should be 652.69')  
  });
});
