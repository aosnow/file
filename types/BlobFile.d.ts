declare type DataType = Array<any> | Blob;

/**
 * BlobFile 文件辅助类
 */
declare interface BlobFile
{

  new( data:DataType, filename:string, extension?:string, endings?:string );

  readonly data:DataType;
  readonly filename:string;
  readonly extension:string;
  readonly fullname:string;

  /**
   * 创建 Blob 对象
   */
  create():void;

  /**
   * 立即下载该文件到本地
   */
  download():void;

  /**
   * 注销释放内存
   */
  destory():void;

  /**
   * 检测指定文件数据的类型
   * @param data
   * @return
   */
  typeOf( data:any ):string;
}

declare const BlobFile:{
  /**
   * 检测指定文件数据的类型
   * @param data
   * @return
   */
  typeOf( data:any ):string;
};

export default BlobFile;
