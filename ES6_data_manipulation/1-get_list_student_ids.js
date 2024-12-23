function getListStudentIds() {
  const students = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];

  if (students.length === 0) {
    return [];
  }
  return students.map((student) => student.id);
}
export default getListStudentIds;
