export type ValueOf<T> = T[keyof T]

// export const ArtifactPackageStatus = {
//   ACTIVE: 'active',
//   CANCELED: 'canceled',
//   FINISHED: 'finished'
// } as const

// export type IArtifactPackageStatus = ValueOf<typeof ArtifactPackageStatus>

export type INav = {title:string, data: {title:string, link:string, tags?: string[]}[]}
