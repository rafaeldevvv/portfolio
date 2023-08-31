export function getIdFrom(string) {
   if (typeof string !== 'string') throw new Error("getIdFrom() function expects a string");
   return string
      .toLowerCase()
      .replace(/\W/g, "_")
      .replace(/_{2,}/g, "_");
}