const sharp = require('sharp');
const uuidv4 = require('uuid/v4');//use for randdom name
const path = require('path');

class Resize {
  constructor(folder, imageName) {
    this.folder = folder;
    this.imageName = imageName;
  }
  async save(buffer) {
    const filename = Resize.filename(this.imageName);
   
    const filepath = this.filepath(filename);
   

    await sharp(buffer)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(filepath);
    
    return filename;
  }
  static filename(imageName) {
    return `${imageName}`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = Resize;