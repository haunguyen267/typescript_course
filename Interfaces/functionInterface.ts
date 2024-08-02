interface IAdd {
  (x: number, y: number): void
}

var add:IAdd = (x:number, y:number):void => {
  console.log(x+y);
}
