const pdfParse = require("pdf-parse")
const fs = require("fs")
const inputDir = __dirname + "/input/"
const outputDir = __dirname + "/output/"


const extractText = (filename) => {
  let dataBuffer = fs.readFileSync(inputDir + filename)

  pdfParse(dataBuffer).then(response => {
    fs.writeFileSync(outputDir + filename + '.txt', response.text)
  })
}

fs.readdir(inputDir, (error, files) => {
  files.forEach(file => {
    extractText(file)
  })
})