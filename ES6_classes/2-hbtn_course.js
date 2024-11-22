export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }

        if (typeof length !== 'number' || isNaN(length)) {
            throw new TypeError('Length must be a number');
        }

        if (!Array.isArray(students)) {
            throw new TypeError('Students must be an array');
        }

        if (!students.every(student => typeof student === 'string')) {
            throw new TypeError('All students must be strings');
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

        get name() {
            return this._name;
        }
        set name(newName) {
            if (typeof newName !== 'string') {
                throw new TypeError('Name must be a string');
            }
            this._name = newName;
        }

        get length() {
            return this._length;
        }
        set length(newlength) {
            if (typeof newlength !== 'number' || isNaN(newlength)) {
                throw new TypeError('Length must be a number');
            }
            this._length = newlength
        }

        get students() {
            return this._students;
        }
        set students(newStudents) {
            if (!Array.isArray(newStudents)) {
                throw new TypeError('Students must be an array');
            }
            if (!newStudents.every(newStudents => typeof newStudents === 'string')) {
                throw new TypeError('All students must be strings')
            }
            this._students = newStudents;
        }
}