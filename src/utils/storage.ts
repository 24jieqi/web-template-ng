interface Options {
  namespace: string
  version: string
}

/**
 * 简版localStorage 支持命名空间
 */
export class NSLocalStorage {
  private namespace: string
  private version: string

  public constructor(options: Options) {
    this.namespace = options.namespace
    this.version = options.version
  }

  public getItem(key: string): string | null {
    let storageDataObj = this.getDataInNS()
    if (storageDataObj[key] !== undefined) {
      return storageDataObj[key]
    }
    return null
  }
  public setItem(key: string, value: string) {
    let storageDataObj = this.getDataInNS()
    storageDataObj[key] = value
    this.updateDataInNS(storageDataObj)
  }
  public removeItem(key: string) {
    let storageDataObj = this.getDataInNS()
    if (storageDataObj[key] === undefined) return
    delete storageDataObj[key]
    this.updateDataInNS(storageDataObj)
  }
  public clear() {
    localStorage.removeItem(this.getPrefix())
  }

  private getPrefix(): string {
    return `${this.namespace}:v${this.version}`
  }
  private getDataInNS(): object {
    const prefix = this.getPrefix()
    const storageDataStr = localStorage.getItem(prefix)
    let storageDataObj = {}
    if (storageDataStr !== null) {
      storageDataObj = JSON.parse(storageDataStr)
    }
    return storageDataObj
  }
  private updateDataInNS(data: object) {
    const prefix = this.getPrefix()
    localStorage.setItem(prefix, JSON.stringify(data))
  }
}

export default new NSLocalStorage({ namespace: 'pitaya-admin', version: '1.0.0' })
