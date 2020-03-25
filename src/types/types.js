// @flow

export type TObjective = {
    id: number,
    label: string,
    time?: number,
    random?: boolean
};

export type FlagObject = {
    objectives: TObjective[]
}

export type Quest = {
    slug: string,
    title: string,
    buttonText: string,
};

export type Boss = {
    slug: string,
    title: string,
    id: number,
    iconFile: string,
};

export type BossTime = {
    id: number,
    title: string,
    time: number
}

export type KeyItem = {
    slug: string,
    id: number,
    title: string,
    iconFile: string,
}

export type ObjByKeyItem = {
    keyItemId: number,
    objectiveSlug: string[],
}