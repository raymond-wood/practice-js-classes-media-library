class Media { //Start of Media Class Declaration
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }
  isCheckedOut(state) {
    this._isCheckedOut = state;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut === true) {
      this._isCheckedOut = false;
    } else {
      this.isCheckedOut = true;
    }
  }

  getAverageRating() {
    const count = this._ratings.length;
    let sum = 0;
    for(let i=count-1; i>=0; i--) {
      sum += this._ratings[i];
    }
    return sum/count;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
} //End of Media Class Declaration


// Start of Book Class Declarations
class Book extends Media{
  constructor(author, title, pages){
   super(title);
   this._author = author;
   this._pages = pages;
  }

  get author() {
    return this._author;
  }

 get pages() {
    return this._pages;
  }
} //End of Book Class Declarations

//Start of Movie Class Declarations
class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
} //End of Movie Class Declarations

//Start of CD Class Declarations
class CD extends Media{
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
} //End of CD Class Declarations

//New Book A Short History of Nearly Everything
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(`${historyOfEverything.constructor.name} by author ${historyOfEverything.author}`);
console.log(`Checked Out: ${historyOfEverything.isCheckedOut}`);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(`Average rating: ${historyOfEverything.getAverageRating()}`);

//New Movie Speed
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(`${speed.constructor.name} by director ${speed.director}`);
console.log(`Cheked Out: ${speed.isCheckedOut}`);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`Average Rating: ${speed.getAverageRating()}`);

//New CD Doves
const doves = new CD('Doves', 'Doves', ['Sea Song', 'The Man Who Told Everything', 'Black and White Town']);
doves.toggleCheckOutStatus();
console.log(`${doves.constructor.name} ${doves.title} by artist ${doves.artist}`);
console.log(`Checked Out: ${doves.isCheckedOut}`);
doves.addRating(4);
doves.addRating(3.5);
doves.addRating(5);
doves.addRating(5);
console.log(`Average Rating: ${doves.getAverageRating()}`);