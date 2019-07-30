declare interface TypeMap
{
  [ key:string ]:Array<string>;
}

/**
 * 常用 mimetype:
 */
declare interface Mime
{
  /**
   * Define mimetype -> extension mappings.  Each key is a mime-type that maps
   * to an array of extensions associated with the type.  The first extension is
   * used as the default extension for the type.
   *
   * e.g. mime.define({'audio/ogg': ['oga', 'ogg', 'spx']});
   *
   * If a type declares an extension that has already been defined, an error will
   * be thrown.  To suppress this error and force the extension to be associated
   * with the new type, pass `force`=true.  Alternatively, you may prefix the
   * extension with "*" to map the type to extension, without mapping the
   * extension to the type.
   *
   * e.g. mime.define({'audio/wav': ['wav']}, {'audio/x-wav': ['*wav']});
   *
   *
   * @param typeMap (Object) type definitions
   * @param force (Boolean) if true, force overriding of existing definitions
   */
  define( typeMap:TypeMap, force:boolean ):string;

  /**
   * Lookup a mime type based on extension
   */
  getType( extension:string ):string;

  /**
   * Return file extension associated with a mime type
   */
  getExtension( mimeType:string ):string;
}

export default Mime;
