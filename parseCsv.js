const cvsPath = "./file/csv/data.csv";
import { filterObjectKey, sortByName } from "./utils/helper.js";
import fs from "node:fs";
import { parse } from "csv-parse";
// Define the column names according to the structure of your CSV file
const columnsOption = [
  "col1",
  "col2",
  "col3",
  "col4",
  "col5",
  "date",
  "no",
  "name",
  "col9",
  "col10",
  "title",
  "value",
  "col13",
  "col14",
  "col15",
  "col16",
  "col17",
];
// var parser = parse(
//   {
//     columns: columnsOption,
//     skip_empty_lines: true,
//     trim: true,
//     relax_quotes: true,
//   },
//   function (err, records) {
//     const dataFromSixthColumnOnward = records.map((record) =>
//       filterObjectKey(5, columnsOption, record)
//     );

//     // sort data indicate by person
//     const res = sortByName(dataFromSixthColumnOnward);
//     resolve(res);
//   }
// );

// fs.createReadStream(cvsPath).pipe(parser);
// export default module.exports = parseCsv;

export function parseCsv() {
  return new Promise((resolve, reject) => {
    const parser = parse(
      {
        columns: columnsOption,
        skip_empty_lines: true,
        trim: true,
        relax_quotes: true,
      },
      (err, records) => {
        if (err) {
          reject(err);
        } else {
          const dataFromSixthColumnOnward = records.map((record) =>
            filterObjectKey(5, columnsOption, record)
          );
          // sort data indicate by person
          const res = sortByName(dataFromSixthColumnOnward);
          resolve(res);
        }
      }
    );

    fs.createReadStream(cvsPath).pipe(parser);
  });
}
