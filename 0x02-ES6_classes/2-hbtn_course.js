export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('Name must be a string');
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') throw new TypeError('Length must be a number');
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!(val instanceof Array)) throw new TypeError('Students must be an array of strings');
    if (!val.every((student) => typeof student === 'string')) throw new TypeError('Students must be an array of strings');
    this._students = val;
  }
}
