const ExcelJs = require('exceljs'); // importing class "ExcelJs" from their package

async function excelTest()
{
const workbook = new ExcelJs.Workbook(); // inside this object i can create object with new workbook
// this is libraray, so their is a main class which they exported from library, we have access those class, methods, interfaces. 
//Once object is created we can access all the methods present inside that oneof which is workbook

await workbook.xlsx.readFile("/Users/hb/Cypress/sample excel file.xlsx") // to access this file

    //it is asynchronous test as js does not wait to read the file so we need to resolve this promise

    const workSheet = workbook.getWorksheet('Sheet1'); // in this all the data will be pulled and stored in this worksheet variable
    // workbook in line 3 will hold all sheet data from excel sheet but the worksheet in line 7 will hold only 'sheet1' data

    // to iterate over each row
    workSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            console.log(cell.value)
        })                               // inner for loop
    })

}

excelTest();