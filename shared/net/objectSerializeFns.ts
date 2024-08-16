import { GameConfig, HasteType } from "../gameConfig";
import { math } from "../utils/math";
import type { Vec2 } from "../utils/v2";
import { type BitStream, Constants } from "./net";

export enum ObjectType {
    Invalid,
    Player,
    Obstacle,
    Loot,
    LootSpawner, // NOTE: unused
    DeadBody,
    Building,
    Structure,
    Decal,
    Projectile,
    Smoke,
    Airdrop,
}

export type ObjectData<T extends ObjectType> = ObjectsFullData[T] & ObjectsPartialData[T];
export interface ObjectsPartialData {
    [ObjectType.Invalid]: unknown;
    [ObjectType.Player]: {
        pos: Vec2;
        dir: Vec2;
    };
    [ObjectType.Obstacle]: {
        pos: Vec2;
        ori: number;
        scale: number;
    };
    [ObjectType.Loot]: {
        pos: Vec2;
    };
    [ObjectType.LootSpawner]: {
        pos: Vec2;
        layer: number;
        type: string;
    };
    [ObjectType.DeadBody]: {
        pos: Vec2;
    };
    [ObjectType.Building]: {
        ceilingDead: boolean;
        occupied: boolean;
        ceilingDamaged: boolean;
        hasPuzzle: boolean;
        puzzleSolved: boolean;
        puzzleErrSeq: number;
    };
    [ObjectType.Structure]: unknown;
    [ObjectType.Decal]: unknown;
    [ObjectType.Projectile]: {
        pos: Vec2;
        posZ: number;
        dir: Vec2;
    };
    [ObjectType.Smoke]: {
        pos: Vec2;
        rad: number;
    };
    [ObjectType.Airdrop]: {
        fallT: number;
        landed: boolean;
    };
}

export interface ObjectsFullData {
    [ObjectType.Invalid]: unknown;
    [ObjectType.Player]: {
        outfit: string;
        backpack: string;
        helmet: string;
        chest: string;
        activeWeapon: string;
        layer: number;
        dead: boolean;
        downed: boolean;

        animType: number;
        animSeq: number;

        actionType: number;
        actionSeq: number;

        wearingPan: boolean;
        healEffect: boolean;

        frozen: boolean;
        frozenOri: number;

        hasHaste: boolean;
        hasteType: number;
        hasteSeq: number;

        actionItem: string;

        hasScale: boolean;
        scale: number;

        hasRole: boolean;
        role: string;

        hasPerks: boolean;
        perks: Array<{
            type: string;
            droppable: boolean;
        }>;
    };
    [ObjectType.Obstacle]: {
        healthT: number;
        type: string;
        layer: number;
        dead: boolean;
        isDoor: boolean;
        door?: {
            open: boolean;
            canUse: boolean;
            locked: boolean;
            seq: number;
        };
        isButton: boolean;
        button?: {
            onOff: boolean;
            canUse: boolean;
            seq: number;
        };
        isPuzzlePiece: boolean;
        parentBuildingId?: number;
        isSkin: boolean;
        skinPlayerId?: number;
    };
    [ObjectType.Loot]: {
        type: string;
        layer: number;
        isOld: boolean;
        isPreloadedGun: boolean;
        count: number;
        hasOwner: boolean;
        ownerId: number;
    };
    [ObjectType.LootSpawner]: unknown;
    [ObjectType.DeadBody]: {
        layer: number;
        playerId: number;
    };
    [ObjectType.Building]: {
        pos: Vec2;
        type: string;
        ori: number;
        layer: number;
    };
    [ObjectType.Structure]: {
        pos: Vec2;
        type: string;
        ori: number;
        interiorSoundEnabled: boolean;
        interiorSoundAlt: boolean;
        layerObjIds: number[];
    };
    [ObjectType.Decal]: {
        pos: Vec2;
        scale: number;
        type: string;
        ori: number;
        layer: number;
        goreKills: number;
    };
    [ObjectType.Projectile]: {
        type: string;
        layer: number;
    };
    [ObjectType.Smoke]: {
        layer: number;
        interior: number;
    };
    [ObjectType.Airdrop]: {
        pos: Vec2;
    };
}

export const ObjectSerializeFns: {
    [K in ObjectType]: {
        serializedFullSize: number;
        serializePart: (s: BitStream, data: ObjectsPartialData[K]) => void;
        serializeFull: (s: BitStream, data: ObjectsFullData[K]) => void;
        deserializePart: (s: BitStream, data: ObjectsPartialData[K]) => void;
        deserializeFull: (s: BitStream, data: ObjectsFullData[K]) => void;
    };
} = {
    [ObjectType.Player]: {
        serializedFullSize: 32,
        serializePart: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
            s.writeUnitVec(data.dir, 8);
        },
        serializeFull: (s, data) => {
            s.writeGameType(data.outfit);
            s.writeGameType(data.backpack);
            s.writeGameType(data.helmet);
            s.writeGameType(data.chest);
            s.writeGameType(data.activeWeapon);

            s.writeBits(data.layer, 2);
            s.writeBoolean(data.dead);
            s.writeBoolean(data.downed);

            s.writeBits(data.animType, 3);
            s.writeBits(data.animSeq, 3);
            s.writeBits(data.actionType, 3);
            s.writeBits(data.actionSeq, 3);

            s.writeBoolean(data.wearingPan);
            s.writeBoolean(data.healEffect);

            s.writeBoolean(data.frozen);
            s.writeBits(data.frozenOri, 2);

            s.writeBoolean(data.hasteType !== HasteType.None);
            if (data.hasteType !== HasteType.None) {
                s.writeBits(data.hasteType, 3);
                s.writeBits(data.hasteSeq, 3);
            }

            s.writeBoolean(data.actionItem !== "");
            if (data.actionItem !== "") {
                s.writeGameType(data.actionItem);
            }

            s.writeBoolean(data.hasScale);
            if (data.hasScale) {
                s.writeFloat(
                    data.scale,
                    Constants.PlayerMinScale,
                    Constants.PlayerMaxScale,
                    8,
                );
            }

            s.writeBoolean(data.role !== "");
            if (data.role !== "") {
                s.writeGameType(data.role);
            }

            s.writeBoolean(data.hasPerks);
            if (data.hasPerks) {
                const perkAmount = math.min(data.perks.length, Constants.MaxPerks - 1);
                s.writeBits(perkAmount, 3);
                for (let i = 0; i < perkAmount; i++) {
                    const perk = data.perks[i];
                    s.writeGameType(perk.type);
                    s.writeBoolean(perk.droppable);
                }
            }

            s.writeAlignToNextByte();
        },
        deserializePart: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16); // position
            data.dir = s.readUnitVec(8); // rotation
        },
        deserializeFull(s, data) {
            data.outfit = s.readGameType(); // outfit
            data.backpack = s.readGameType(); // pack
            data.helmet = s.readGameType(); // helmet
            data.chest = s.readGameType(); // chest
            data.activeWeapon = s.readGameType(); // active weapon

            data.layer = s.readBits(2); // layer
            data.dead = s.readBoolean(); // dead
            data.downed = s.readBoolean(); // downed

            data.animType = s.readBits(3); // anim type
            data.animSeq = s.readBits(3); // anim seq
            data.actionType = s.readBits(3); // action type
            data.actionSeq = s.readBits(3); // action seq

            data.wearingPan = s.readBoolean(); // wearing pan
            data.healEffect = s.readBoolean(); // heal effect
            data.frozen = s.readBoolean(); // frozen
            data.frozenOri = s.readBits(2); // frozen ori
            data.hasteType = 0;
            data.hasteSeq = -1;
            if (s.readBoolean()) {
                // has haste
                data.hasteType = s.readBits(3); // haste type
                data.hasteSeq = s.readBits(3); // haste seq
            }
            const hasActionItem = s.readBoolean(); // has action item
            data.actionItem = hasActionItem ? s.readGameType() : ""; // action item

            const hasScale = s.readBoolean(); // scale dirty
            data.scale = hasScale
                ? s.readFloat(Constants.PlayerMinScale, Constants.PlayerMaxScale, 8)
                : 1;
            const hasRole = s.readBoolean();
            data.role = hasRole ? s.readGameType() : "";
            data.perks = [];
            const hasPerks = s.readBoolean();
            if (hasPerks) {
                const perkCount = s.readBits(3);
                for (let i = 0; i < perkCount; i++) {
                    const type = s.readGameType();
                    const droppable = s.readBoolean();
                    data.perks.push({
                        type,
                        droppable,
                    });
                }
            }
            s.readAlignToNextByte();
        },
    },
    [ObjectType.Obstacle]: {
        serializedFullSize: 0,
        serializePart: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
            s.writeBits(data.ori, 2);
            s.writeFloat(
                data.scale,
                Constants.MapObjectMinScale,
                Constants.MapObjectMaxScale,
                8,
            );
            s.writeBits(0, 6);
        },
        serializeFull: (s, data) => {
            s.writeFloat(data.healthT, 0, 1, 8);
            s.writeMapType(data.type);
            s.writeBits(data.layer, 2);
            s.writeBoolean(data.dead);
            s.writeBoolean(data.isDoor);
            if (data.isDoor) {
                s.writeBoolean(data.door!.open);
                s.writeBoolean(data.door!.canUse);
                s.writeBoolean(data.door!.locked);
                s.writeBits(data.door!.seq, 5);
            }

            s.writeBoolean(data.isButton);
            if (data.isButton) {
                s.writeBoolean(data.button!.onOff);
                s.writeBoolean(data.button!.canUse);
                s.writeBits(data.button!.seq, 6);
            }

            s.writeBoolean(data.isPuzzlePiece);
            if (data.isPuzzlePiece) s.writeUint16(data.parentBuildingId!);

            s.writeBoolean(data.isSkin);
            if (data.isSkin) s.writeUint16(data.skinPlayerId!);

            s.writeBits(0, 5); // padding
        },
        deserializePart: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
            data.ori = s.readBits(2);
            data.scale = s.readFloat(
                Constants.MapObjectMinScale,
                Constants.MapObjectMaxScale,
                8,
            );
            s.readBits(6);
        },
        deserializeFull: (s, data) => {
            data.healthT = s.readFloat(0, 1, 8);
            data.type = s.readMapType();
            data.layer = s.readBits(2);
            data.dead = s.readBoolean();
            data.isDoor = s.readBoolean();
            if (data.isDoor) {
                data.door = {} as ObjectsFullData[ObjectType.Obstacle]["door"];
                data.door!.open = s.readBoolean();
                data.door!.canUse = s.readBoolean();
                data.door!.locked = s.readBoolean();
                data.door!.seq = s.readBits(5);
            }
            data.isButton = s.readBoolean();
            if (data.isButton) {
                data.button = {} as ObjectsFullData[ObjectType.Obstacle]["button"];
                data.button!.onOff = s.readBoolean();
                data.button!.canUse = s.readBoolean();
                data.button!.seq = s.readBits(6);
            }
            data.isPuzzlePiece = s.readBoolean();
            if (data.isPuzzlePiece) {
                data.parentBuildingId = s.readUint16();
            }
            data.isSkin = s.readBoolean();
            if (data.isSkin) {
                data.skinPlayerId = s.readUint16();
            }
            s.readBits(5);
        },
    },
    [ObjectType.Building]: {
        serializedFullSize: 0,
        serializePart: (s, data) => {
            s.writeBoolean(data.ceilingDead);
            s.writeBoolean(data.occupied);
            s.writeBoolean(data.ceilingDamaged);
            s.writeBoolean(data.hasPuzzle);
            if (data.hasPuzzle) {
                s.writeBoolean(data.puzzleSolved);
                s.writeBits(data.puzzleErrSeq, 7);
            }
            s.writeBits(0, 4); // padding
        },
        serializeFull: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
            s.writeMapType(data.type);
            s.writeBits(data.ori, 2);
            s.writeBits(data.layer, 2);
        },
        deserializePart: (s, data) => {
            data.ceilingDead = s.readBoolean();
            data.occupied = s.readBoolean();
            data.ceilingDamaged = s.readBoolean();
            data.hasPuzzle = s.readBoolean();
            if (data.hasPuzzle) {
                data.puzzleSolved = s.readBoolean();
                data.puzzleErrSeq = s.readBits(7);
            }
            s.readBits(4);
        },
        deserializeFull: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
            data.type = s.readMapType();
            data.ori = s.readBits(2);
            data.layer = s.readBits(2);
        },
    },
    [ObjectType.Structure]: {
        serializedFullSize: 0,
        serializePart: () => {},
        serializeFull: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
            s.writeMapType(data.type);
            s.writeBits(data.ori, 2);
            s.writeBoolean(data.interiorSoundEnabled);
            s.writeBoolean(data.interiorSoundAlt);
            for (let r = 0; r < GameConfig.structureLayerCount; r++) {
                s.writeUint16(data.layerObjIds[r]);
            }
        },
        deserializePart: () => {},
        deserializeFull: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
            data.type = s.readMapType();
            data.ori = s.readBits(2);
            data.interiorSoundEnabled = s.readBoolean();
            data.interiorSoundAlt = s.readBoolean();
            data.layerObjIds = [];
            for (let r = 0; r < GameConfig.structureLayerCount; r++) {
                const a = s.readUint16();
                data.layerObjIds.push(a);
            }
        },
    },
    [ObjectType.LootSpawner]: {
        serializedFullSize: 0,
        serializePart: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
            s.writeMapType(data.type);
            s.writeBits(data.layer, 2);
            s.writeBits(0, 2);
        },
        serializeFull: () => {},
        deserializePart: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
            data.type = s.readMapType();
            data.layer = s.readBits(2);
            s.readBits(2);
        },
        deserializeFull: () => {},
    },
    [ObjectType.Loot]: {
        serializedFullSize: 5,
        serializePart: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
        },
        serializeFull: (s, data) => {
            s.writeGameType(data.type);
            s.writeUint8(data.count);
            s.writeBits(data.layer, 2);
            s.writeBoolean(data.isOld);
            s.writeBoolean(data.isPreloadedGun);
            s.writeBoolean(data.ownerId != 0);
            if (data.ownerId != 0) {
                s.writeUint16(data.ownerId);
            }
            s.writeBits(0, 1);
        },
        deserializePart: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
        },
        deserializeFull: (s, data) => {
            data.type = s.readGameType();
            data.count = s.readUint8();
            data.layer = s.readBits(2);
            data.isOld = s.readBoolean();
            data.isPreloadedGun = s.readBoolean();
            data.hasOwner = s.readBoolean();
            if (data.hasOwner) {
                data.ownerId = s.readUint16();
            }
            s.readBits(1);
        },
    },
    [ObjectType.DeadBody]: {
        serializedFullSize: 0,
        serializePart: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
        },
        serializeFull: (s, data) => {
            s.writeUint8(data.layer);
            s.writeUint16(data.playerId);
        },
        deserializePart: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
        },
        deserializeFull: (s, data) => {
            data.layer = s.readUint8();
            data.playerId = s.readUint16();
        },
    },
    [ObjectType.Decal]: {
        serializedFullSize: 0,
        serializePart: () => {},
        serializeFull: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
            s.writeFloat(
                data.scale,
                Constants.MapObjectMinScale,
                Constants.MapObjectMaxScale,
                8,
            );
            s.writeMapType(data.type);
            s.writeBits(data.ori, 2);
            s.writeBits(data.layer, 2);
            s.writeUint8(data.goreKills);
        },
        deserializePart: () => {},
        deserializeFull: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
            data.scale = s.readFloat(
                Constants.MapObjectMinScale,
                Constants.MapObjectMaxScale,
                8,
            );
            data.type = s.readMapType();
            data.ori = s.readBits(2);
            data.layer = s.readBits(2);
            data.goreKills = s.readUint8();
        },
    },
    [ObjectType.Projectile]: {
        serializedFullSize: 0,
        serializePart: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
            s.writeFloat(data.posZ, 0, GameConfig.projectile.maxHeight, 10);
            s.writeUnitVec(data.dir, 7);
        },
        serializeFull: (s, data) => {
            s.writeGameType(data.type);
            s.writeBits(data.layer, 2);
            s.writeBits(0, 4);
        },
        deserializePart: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
            data.posZ = s.readFloat(0, GameConfig.projectile.maxHeight, 10);
            data.dir = s.readUnitVec(7);
        },
        deserializeFull: (s, data) => {
            data.type = s.readGameType();
            data.layer = s.readBits(2);
            s.readBits(4);
        },
    },
    [ObjectType.Smoke]: {
        serializedFullSize: 0,
        serializePart: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
            s.writeFloat(data.rad, 0, Constants.SmokeMaxRad, 8);
        },
        serializeFull: (s, data) => {
            s.writeBits(data.layer, 2);
            s.writeBits(data.interior, 6);
        },
        deserializePart: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
            data.rad = s.readFloat(0, Constants.SmokeMaxRad, 8);
        },
        deserializeFull: (s, data) => {
            data.layer = s.readBits(2);
            data.interior = s.readBits(6);
        },
    },
    [ObjectType.Airdrop]: {
        serializedFullSize: 0,
        serializePart: (s, data) => {
            s.writeFloat(data.fallT, 0, 1, 7);
            s.writeBoolean(data.landed);
        },
        serializeFull: (s, data) => {
            s.writeVec(data.pos, 0, 0, 1024, 1024, 16);
        },
        deserializePart: (s, data) => {
            data.fallT = s.readFloat(0, 1, 7);
            data.landed = s.readBoolean();
        },
        deserializeFull: (s, data) => {
            data.pos = s.readVec(0, 0, 1024, 1024, 16);
        },
    },
    // * to please ts
    [ObjectType.Invalid]: {
        serializedFullSize: 0,
        deserializeFull: () => {},
        deserializePart: () => {},
        serializeFull: () => {},
        serializePart: () => {},
    },
};
