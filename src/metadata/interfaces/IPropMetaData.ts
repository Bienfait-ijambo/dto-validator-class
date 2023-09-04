
export interface IPropMetaData{
  createMetaData(rule: Record<string, any>, target: any):void
    getMetaData(object:any):any
  }