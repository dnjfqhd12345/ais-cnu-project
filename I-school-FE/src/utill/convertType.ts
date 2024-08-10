export const snakeToCamel = (snakeCaseObj: any): any => {
    if (Array.isArray(snakeCaseObj)) {
      return snakeCaseObj.map(item => snakeToCamel(item))
    } else if (snakeCaseObj !== null && snakeCaseObj.constructor === Object) {
      const camelCaseObj: any = {}
      Object.keys(snakeCaseObj).forEach(key => {
        const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
        camelCaseObj[camelKey] = snakeToCamel(snakeCaseObj[key])
      })
      return camelCaseObj
    }
    return snakeCaseObj
  }
  