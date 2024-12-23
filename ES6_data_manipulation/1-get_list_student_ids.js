function getListStudentIds(students) {
  if (!students || !Array.isArray(students) || students.length === 0) {
    return [];
  }
  return students.map((student) => student.id);
}
export default getListStudentIds;
