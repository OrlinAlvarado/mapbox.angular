const { writeFileSync, mkdirSync } =  require('fs');
require('dotenv').config();

const targetDir = './src/environments'
const targetPath = `${ targetDir }/environment.ts`;

const envFileContent = `
export const environment = {
  mapbox_key: "${ process.env['MAPBOX_KEY']}",
  otra: "PROPIEDAD"
};
`

mkdirSync(targetDir, { recursive: true });
writeFileSync(targetPath, envFileContent);
