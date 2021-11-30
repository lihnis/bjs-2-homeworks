function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
  }
 
  Student.prototype.addMarks = function (...marks) {

    if(this.marks === undefined){ 
      this.marks = marks;
      } else {
        for (let mark of marks) { 
    this.marks.push(mark);
        }
      }
    }

    Student.prototype.getAverage = function () {
      this.sum = 0;
      this.marks.forEach((item) => {
        this.sum += item;
        })
        return average = this.sum / this.marks.length;
      }

      Student.prototype.exclude = function (reason) {
        
        delete this.subject;
        delete this.marks;
        this.excluded = reason;

      }

    