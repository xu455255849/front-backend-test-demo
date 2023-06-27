import {CommandBody} from './command_body_struct'

export function initCameraPayload(data: CommandBody) {
  const binary = CommandBody.toBinary(data)
  const length = binary.length;


  const headerByte = initHeader(length)

  console.log(headerByte, 'binary')

  const messageByte = byteConcat(headerByte, binary)
  console.log(messageByte, 'messageByte')
  const messageCheckByte = new Uint8Array([xorChecksum(binary, 0, length)])

  console.log(messageCheckByte, 'messageCheckByte')
  const bodyByte = byteConcat(messageByte, messageCheckByte)

  const endByte = byteConcat(bodyByte, new Uint8Array([0x5A]))
  console.log(endByte, 'endByte')

  return endByte
}

function initHeader(length: number) {
  const startByte = new Uint8Array([0xA5])
  const lengthByte = new Uint8Array([length]);

  const len = startByte.length + lengthByte.length;
  const concatenated = byteConcat(startByte, lengthByte)
  const headerCheckByte = new Uint8Array([xorChecksum(concatenated, 0, len)])

  return byteConcat(concatenated, headerCheckByte)
}

function xorChecksum(data: Uint8Array, offset: number, length: number): number {
  let checksum: number = 0;
  for (let i = offset; i < length + offset; i++) {
    checksum ^= data[i];
  }
  return checksum;
}

function byteConcat(byte1: Uint8Array, byte2: Uint8Array) {
  const len = byte1.length + byte2.length;
  const concatenated = new Uint8Array(len);
  concatenated.set(byte1, 0);
  concatenated.set(byte2, byte1.length);
  return concatenated;
}