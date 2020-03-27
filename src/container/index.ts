export default class Container {

  private static readonly globalInstance = {};

  static get(id: string): any {
    return this.globalInstance[id]
  }

  static set(id: string, value: any) {
    return this.globalInstance[id] = value
  }

  static getAll(): any {
    return this.globalInstance
  }

}