interface IProduct {
  id: number,
  name: string,
  description?: string,
  price: number,
  display(): void
}

var pro1:IProduct = {
  id: 1,
  name: "Book",
  price: 90,
  display() {
    console.log(this.id + " : " + this.name);
  },
}
