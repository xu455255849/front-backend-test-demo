// source: body/body_transport_file.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.tv.yunxi.protobuf.body.TransportFile');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tv.yunxi.protobuf.body.TransportFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tv.yunxi.protobuf.body.TransportFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tv.yunxi.protobuf.body.TransportFile.displayName = 'proto.tv.yunxi.protobuf.body.TransportFile';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.toObject = function(opt_includeInstance) {
  return proto.tv.yunxi.protobuf.body.TransportFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tv.yunxi.protobuf.body.TransportFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.yunxi.protobuf.body.TransportFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    currentIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    md5Info: jspb.Message.getFieldWithDefault(msg, 3, ""),
    version: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bufSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    buffer: msg.getBuffer_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tv.yunxi.protobuf.body.TransportFile}
 */
proto.tv.yunxi.protobuf.body.TransportFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tv.yunxi.protobuf.body.TransportFile;
  return proto.tv.yunxi.protobuf.body.TransportFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tv.yunxi.protobuf.body.TransportFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tv.yunxi.protobuf.body.TransportFile}
 */
proto.tv.yunxi.protobuf.body.TransportFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5Info(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBufSize(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBuffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tv.yunxi.protobuf.body.TransportFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tv.yunxi.protobuf.body.TransportFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.yunxi.protobuf.body.TransportFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCurrentIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMd5Info();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBufSize();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getBuffer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional uint32 total_size = 1;
 * @return {number}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tv.yunxi.protobuf.body.TransportFile} returns this
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.setTotalSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 current_index = 2;
 * @return {number}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.getCurrentIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tv.yunxi.protobuf.body.TransportFile} returns this
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.setCurrentIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string md5_info = 3;
 * @return {string}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.getMd5Info = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tv.yunxi.protobuf.body.TransportFile} returns this
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.setMd5Info = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string version = 4;
 * @return {string}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tv.yunxi.protobuf.body.TransportFile} returns this
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 buf_size = 5;
 * @return {number}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.getBufSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tv.yunxi.protobuf.body.TransportFile} returns this
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.setBufSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes buffer = 6;
 * @return {string}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.getBuffer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes buffer = 6;
 * This is a type-conversion wrapper around `getBuffer()`
 * @return {string}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.getBuffer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBuffer()));
};


/**
 * optional bytes buffer = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBuffer()`
 * @return {!Uint8Array}
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.getBuffer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBuffer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tv.yunxi.protobuf.body.TransportFile} returns this
 */
proto.tv.yunxi.protobuf.body.TransportFile.prototype.setBuffer = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};

