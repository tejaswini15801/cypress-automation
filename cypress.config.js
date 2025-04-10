const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const ExcelJs = require("exceljs"); // Add this if it's missing

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", createBundler({
    plugins: [createEsbuildPlugin(config)]
  }));

  on('task', {
    async writeExcelTest({ searchText, replaceText, change, filePath }) {
      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet('Sheet1');
      const output = await readExcel(worksheet, searchText);

      const cell = worksheet.getCell(output.row, output.column + change.colChange);
      cell.value = replaceText;

      return workbook.xlsx.writeFile(filePath)
        .then(() => true)
        .catch(() => false);
    }
  });

  async function readExcel(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        if (cell.value === searchText) {
          output.row = rowNumber;
          output.column = colNumber;
        }
      });
    });
    return output;
  }

  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  reporter: "cypress-mochawesome-reporter",
  retries: {
    runMode: 1,
  },
  projectId: "nodpcq",

  
  e2e: {
    setupNodeEvents,
    experimentalStudio: true,
    specPattern: "cypress/integration/examples/*.js",
    supportFile: "cypress/support/e2e.js",
    downloadsFolder: "cypress/downloads"
  },

  compilerOptions: {
    types: ["cypress"],
  },
});
