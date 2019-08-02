// ------------------------------------------------------------------------------
//
// Downloader.d
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2018/7/5
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

/**
 * 立即下载 Blob 文件数据
 * @param {Blob} blob 文件数据
 * @param {String} [fullname] 文件名（若不设置后缀名，则自动根据 blob.type 进行检测并设置）
 */
declare function download( blob:Blob, fullname?:string ):void;

export default download;
