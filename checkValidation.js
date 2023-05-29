function checkName(name) {
    if (/^[A-Za-z]+$/.test(name)) {
      return true;
    }
    return false;
}

function checkGrade(grade) {
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
      return true;
    }
    return false;
}

try {
    if (module) {
      module.exports = {
        checkName,
        checkGrade,
      };
    }
}
catch (e) {
    console.log(e);
}