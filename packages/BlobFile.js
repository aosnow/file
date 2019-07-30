import Mime from './mime';
import Endings from './endings';
import download from './download';

/**
 * BlobFile 文件辅助类
 */
class BlobFile {
  _blob = null;
  _data = null;
  _filename = null;
  _mime = null;
  _endings = null;
  _extension = null;

  /**
   * 创建文件对象
   * @param {Array<*>|Blob} data 数据内容源
   * @param {String} filename 文件名（不包含扩展名）
   * @param {String} [extension] 文件后缀名，默认 'txt'
   * @param {String} [endings] 决定 append() 的数据格式（数据中的 \n 如何被转换）取值为 Endings.transparent 或 Endings.native
   */
  constructor(data, filename, extension = 'txt', endings = Endings.native) {
    this._data = data;
    this._filename = filename;
    this._mime = Mime.getType(extension || 'txt');
    this._endings = endings || Endings.native;
    this._extension = extension;

    this.create();
  }

  create() {
    // this._blob = new Blob([this._data], { type: this._mime, endings: this._endings });

    const type = BlobFile.typeOf(this.data);

    switch (type) {
      case 'blob': {
        this._blob = this._data;
        break;
      }
      case 'arraybuffer': {
        this._blob = new Blob(this._data, { type: this._mime, endings: this._endings });
        break;
      }
      default: {
        this._blob = new Blob([this._data], { type: this._mime, endings: this._endings });
      }
    }
  }

  static typeOf(data) {
    let type = null;

    if (data instanceof Blob) {
      type = 'blob';
    }
    else if (data instanceof ArrayBuffer) {
      type = 'arraybuffer';
    }
    else {
      type = 'text';
    }

    return type;
  }

  get data() {
    return this._data;
  }

  get filename() {
    return this._filename;
  }

  get extension() {
    return this._extension;
  }

  get fullname() {
    return `${this.filename}.${this.extension}`;
  }

  /**
   * 立即下载该文件到本地
   */
  download() {
    download(this._blob, this.fullname);
  }

  /**
   * 注销释放内存
   */
  destory() {
    this._blob['msClose'] && this._blob['msClose']();
    this._blob = null;
    this._data = null;
    this._filename = null;
  }
}

export default BlobFile;
