// const ExcelJs = require('exceljs'); // importing class "ExcelJs" from their package

// async function writeExcelTest(searchText,replaceText,filePath)
// {
// // we can keep the code as hardcoded, it should be flexible, for that
// // let output = {row:-1,column:-1}; // global object 

// const workbook = new ExcelJs.Workbook(); // inside this object i can create object with new workbook
// // this is libraray, so their is a main class which they exported from library, we have access those class, methods, interfaces. 
// //Once object is created we can access all the methods present inside that oneof which is workbook

// await workbook.xlsx.readFile(filePath); // to access this file

//     //it is asynchronous test as js does not wait to read the file so we need to resolve this promise

// const workSheet = workbook.getWorksheet('Sheet1'); // in this all the data will be pulled and stored in this worksheet variable
//     // workbook in line 3 will hold all sheet data from excel sheet but the worksheet in line 7 will hold only 'sheet1' data
// const output= await readExcel(workSheet,searchText);
//     // // to iterate over each row
//     // workSheet.eachRow((row, rowNumber) => {
//     //     row.eachCell((cell, colNumber) => {
//     //         if(cell.value==="Banana")
//     //         {
//     //             //console.log(rowNumber)
//     //             //console.log(colNumber)
//     //             output.row=rowNumber;
//     //             output.column=colNumber; // row no. and column no. are sitting at the output objects, as the row no. and column no. are local to this for loop and we cannot access it outside. for that we created one global object, this global object has two properties row, column, so now instead of hardcoding we can call this object as output.row, output.column
//     //         }

//     //     })                               // inner for loop
    
// const cell = worksheet.getCell(output.row, output.column);
// cell.value = replaceText;
// await workbook.xlsx.writeFile(filePath)
// }

// async function readExcel(worksheet,searchText) 
// {
//         let output = {row:-1,column:-1}; // global object 
//         // to iterate over each row
//         worksheet.eachRow((row, rowNumber) => 
//         {
//             row.eachCell((cell, colNumber) => 
//             {
//                 if(cell.value===searchText)
//                 {
//                     //console.log(rowNumber)
//                     //console.log(colNumber)
//                     output.row=rowNumber;
//                     output.column=colNumber; // row no. and column no. are sitting at the output objects, as the row no. and column no. are local to this for loop and we cannot access it outside. for that we created one global object, this global object has two properties row, column, so now instead of hardcoding we can call this object as output.row, output.column
//                 }
//             })
//         }) 
//     return output;
// }
// writeExcelTest("Banana","Republic","/Users/hb/Cypress/excelTest.xlsx");


// // so like this we can avoid hardcoding by creating one global object with the default values and in run time that object will be feeded by real values, and we can use that object wherever we want.

const ExcelJs =require('exceljs');
 
async function writeExcelTest(searchText,replaceText,change,filePath)
{
    
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output= await readExcel(worksheet,searchText);
 
  const cell = worksheet.getCell(output.row,output.column+change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
 
}
 
 
async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber) =>
    {
          row.eachCell((cell,colNumber) =>
          {
              if(cell.value === searchText)
              {
                  output.row=rowNumber;
                  output.column=colNumber;
              }
  
  
          }  )
    
    })
    return output;
}
//update Mango Price to 350. 
writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/hb/Cypress/excelTest.xlsx");
 

















