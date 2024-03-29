let schools = [];

exports.createSchool = (req, res) => {
  try {
    const { school_id, school_name, school_addr } = req.body;
    const newSchool = { school_id, school_name, school_addr };
    schools.push(newSchool);
    res.json(newSchool);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllClasses = (req, res) => {
  try {
    const { schoolId } = req.params;
    const classes = [];
    for (const cls of classes) {
      if (cls.school_id === parseInt(schoolId)) {
        classes.push(cls);
      }
    }
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSchoolName = (req, res) => {
  try {
    const { schoolId } = req.params;
    const { school_name } = req.body;
    const index = schools.findIndex(school => school.school_id === parseInt(schoolId));
    if (index === -1) {
      return res.status(404).json({ message: 'School not found' });
    }
    schools[index].school_name = school_name;
    res.json(schools[index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllSchools = (req, res) => {
  try {
    // Logic to retrieve all schools
    res.json(schools); // Assuming `schools` is an array containing school data
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};