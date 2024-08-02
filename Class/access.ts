class Student {
  private _name: string;

  display():void {
    console.log(this._name);
  }

  get name():string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

var student = new Student();
student.name = "abc";
console.log(student.name);
