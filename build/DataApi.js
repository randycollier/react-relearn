"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

exports.default = DataApi;