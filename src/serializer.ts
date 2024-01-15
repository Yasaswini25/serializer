export function serialize(data: any): string {
    return JSON.stringify(data);
  }
  
  export function deserialize(jsonString: string): any {
    return JSON.parse(jsonString);
  }