// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "body/body_size.proto" (package "tv.yunxi.protobuf.body", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message tv.yunxi.protobuf.body.Size
 */
export interface Size {
    /**
     * @generated from protobuf field: uint32 width = 1;
     */
    width: number;
    /**
     * @generated from protobuf field: uint32 height = 2;
     */
    height: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class Size$Type extends MessageType<Size> {
    constructor() {
        super("tv.yunxi.protobuf.body.Size", [
            { no: 1, name: "width", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "height", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<Size>): Size {
        const message = { width: 0, height: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Size>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Size): Size {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 width */ 1:
                    message.width = reader.uint32();
                    break;
                case /* uint32 height */ 2:
                    message.height = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Size, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 width = 1; */
        if (message.width !== 0)
            writer.tag(1, WireType.Varint).uint32(message.width);
        /* uint32 height = 2; */
        if (message.height !== 0)
            writer.tag(2, WireType.Varint).uint32(message.height);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tv.yunxi.protobuf.body.Size
 */
export const Size = new Size$Type();