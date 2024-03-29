let students = [];

exports.createStudent = (req, res) => {
  try {
    const { classId } = req.params;
    const { student_name, overall_score } = req.body;
    const newStudent = { student_id: students.length + 1, student_name, class_id: parseInt(classId), overall_score };
    students.push(newStudent);
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//only get results with only stid
// exports.getStudentById = (req, res) => {
//   try {
//     const { studentId } = req.params;
//     const foundStudent = students.find(student => student.student_id === parseInt(studentId));
//     if (!foundStudent) {
//       return res.status(404).json({ message: 'Student not found' });
//     }
//     res.json(foundStudent);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// get results with both stid and clsid
exports.getStudentById = (req, res) => {
  try {
    const { classId, studentId } = req.params;
    const foundStudent = students.find(student => student.class_id === parseInt(classId) && student.student_id === parseInt(studentId));
    if (!foundStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(foundStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// onlu by stu id
// exports.updateStudent = (req, res) => {
//   try {
//     const { studentId } = req.params;
//     const { student_name, overall_score } = req.body;
//     const index = students.findIndex(student => student.student_id === parseInt(studentId));
//     if (index === -1) {
//       return res.status(404).json({ message: 'Student not found' });
//     }
//     //... it is spreadsheet in js   or else
//     /*students[index].student_name = student_name;
// students[index].overall_score = overall_score;
// res.json(students[index]);*/
//     students[index] = { ...students[index], student_name, overall_score };
//     res.json(students[index]);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

//by both stid and clsid
exports.updateStudent = (req, res) => {
  try {
    const { classId, studentId } = req.params;
    const { student_name, overall_score } = req.body;

    // Find the index of the student in the students array
    const index = students.findIndex(student => student.class_id === parseInt(classId) && student.student_id === parseInt(studentId));
    if (index === -1) {
      return res.status(404).json({ message: 'Student not found' });
    }
    //... it is spreadsheet in js   or else
//     /*students[index].student_name = student_name;
// students[index].overall_score = overall_score;
// res.json(students[index]);*/
    // Update the student's name and overall score
    students[index] = { ...students[index], student_name, overall_score };

    res.json(students[index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// delete only by using student id
// exports.deleteStudent = (req, res) => {
//   try {
//     const { studentId } = req.params;

//     // Find the index of the student in the students array
//     const index = students.findIndex(student => student.student_id === parseInt(studentId));
//     if (index === -1) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     // Remove the student from the students array
//     students.splice(index, 1);

//     res.json({ message: 'Student deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


//delete by using both cls id and stu id
exports.deleteStudent = (req, res) => {
  try {
    const { classId, studentId } = req.params;

    // Find the index of the student in the students array
    const index = students.findIndex(student => student.class_id === parseInt(classId) && student.student_id === parseInt(studentId));
    if (index === -1) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Remove the student from the students array
    students.splice(index, 1);

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
