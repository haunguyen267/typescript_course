class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MyCustomError";
  }
}

try {
  throw new CustomError("This is my custom error");
} catch (error) {
  
}
