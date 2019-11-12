// @flow

export type TObjective = {
    id: number,
    label: string,
    time?: number
};

export type FlagObject = {
    objectives: TObjective[]
}

export type Quest = {
    slug: string,
    title: string,
};