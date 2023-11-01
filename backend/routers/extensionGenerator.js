const path = require("path");
const fs = require("fs");
const archiver = require("archiver");

const BASE_PATH = path.join(__dirname, '../extensions');
console.log(BASE_PATH);

const { scripts, manifest, html } = require("../extConfig");
// console.log(scripts);
// console.log(manifest);

const createZip = (sourceFolder, zipName) => {
  // Create a new ZIP archive
  const archive = archiver("zip", { zlib: { level: 9 } });

  // Define the source folder to be zipped
  // const sourceFolder = './my-folder';
  // const sourceFolder = path;

  // Define the output file name and path
  // const outputFilePath = './my-folder.zip';

  const outputFilePath = path.join(__dirname, `../archives/${zipName}`);

  // Create a write stream to the output file
  const output = fs.createWriteStream(outputFilePath);

  // Pipe the archive data to the output file
  archive.pipe(output);

  // Add the contents of the source folder to the archive
  archive.directory(sourceFolder, false);

  // Finalize the archive
  archive.finalize();

  // Log a message when the archive is finished
  output.on("close", function () {
    console.log(`Successfully created ZIP archive at ${outputFilePath}`);
  });
};

const createFile = ({ filename, content }) => {
  fs.writeFile(filename, content, (err) => {
    if (err) throw err;
    console.log(`File '${filename}' has been saved.`);
  });
};

const createFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
};

const createCode = (filename, imagesData, manifestData, scriptData, htmlData, cb) => {
  console.log(scriptData);
  let extPath = path.join(BASE_PATH, "generated_extensions");
  createFolder(extPath);
  createFolder(path.join(extPath, "assets"));
  // let images = ["default_icon48.png", "default_icon128.png"];
  imagesData.forEach((image) => {
    const data = fs.readFileSync(
      path.join(__dirname, `../assets/${image}`)
    );
    fs.writeFileSync(path.join(extPath, "assets", image), data);
  });

  createFolder(extPath);
  createFolder(path.join(extPath, "scripts"));
  createFile({
    filename: path.join(extPath, "manifest.json"),
    content: JSON.stringify(manifest("AIModerator", "AI Moderator", imagesData[0], imagesData[1], ["alarms", "storage"])),
  });

  // html.forEach((html) => {
  //   createFile({
  //     filename: path.join(extPath, html.filename),
  //     content: html.content(htmlData),
  //   });
  // });


  scripts.forEach((script) => {
    createFile({
      filename: path.join(extPath, "scripts", script.filename),
      content: script.content(scriptData),
    });
  });
  
  createZip(extPath, `${filename}.zip`);
  cb(`${filename}.zip`);
};

// createCode("My_Extension", (filename) => {});

module.exports = createCode;
