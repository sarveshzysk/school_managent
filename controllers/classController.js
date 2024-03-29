
let classes = [];

exports.createClass = (req, res) => {
  try {
    const { schoolId } = req.params; //  extracting schoolId from req.params
    const { class_name } = req.body;
    const newClass = { class_id: classes.length + 1, class_name, school_id: schoolId }; // Using schoolId instead of school_id
    classes.push(newClass);
    res.json(newClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//fetching only with cls id
// exports.getClassById = (req, res) => {
//   try {
//     const { classId } = req.params;
//     const foundClass = classes.find(cls => cls.class_id === parseInt(classId));
//     if (!foundClass) {
//       return res.status(404).json({ message: 'Class not found' });
//     }
//     res.json(foundClass);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

//fetching with both cls id and schl id
exports.getClassById = (req, res) => {
  try {
    const { schoolId, classId } = req.params;
    const foundClass = classes.find(cls => cls.class_id === parseInt(classId) && cls.school_id === parseInt(schoolId));
    if (!foundClass) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.json(foundClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



//update the cls only with only cls id
// exports.updateClass = (req, res) => {
//   try {
//     const { classId } = req.params;
//     const { class_name } = req.body;
//     const index = classes.findIndex(cls => cls.class_id === parseInt(classId));
//     if (index === -1) {
//       return res.status(404).json({ message: 'Class not found' });
//     }
//     classes[index] = { ...classes[index], class_name };
//     res.json(classes[index]);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


//update the cls only with both cls and schlid
exports.updateClass = (req, res) => {
  try {
    const { schoolId, classId } = req.params;
    const { class_name } = req.body;

    // Find the class based on both schoolId and classId
    const index = classes.findIndex(cls => cls.class_id === parseInt(classId) && cls.school_id === parseInt(schoolId));
    if (index === -1) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Update the class name
    classes[index].class_name = class_name;
    
    // Save changes to the storage (e.g., JSON file)
    saveClasses();

    res.json(classes[index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// based on cls id only (delete)
// exports.deleteClass = (req, res) => {
//   try {
//     const { classId } = req.params;
//     const index = classes.findIndex(cls => cls.class_id === parseInt(classId));
//     if (index === -1) {
//       return res.status(404).json({ message: 'Class not found' });
//     }
//     classes.splice(index, 1);
//     res.json({ message: 'Class deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// based on cls id and schl id (delete)
exports.deleteClass = (req, res) => {
  try {
    const { schoolId, classId } = req.params;

    // Find the index of the class based on both schoolId and classId
    const index = classes.findIndex(cls => cls.class_id === parseInt(classId) && cls.school_id === parseInt(schoolId));
    if (index === -1) {
      return res.status(404).json({ message: 'Class not found' });
    }
    // Remove the class from the classes array
    classes.splice(index, 1);

    // Save changes to storage 
    saveClasses();

    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
