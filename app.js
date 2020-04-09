class Media {
    constructor(title) {
      this._title=title;
      this._ratings=[];
      this._isCheckedOut=false;
    }
    get title() {
      return this._title;
    }
    get ratings() {
      return this._ratings;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(value) {
      this._isCheckedOut=value;
    }
    toggleCheckOutStatus() {
   this.isCheckedOut= !this.isCheckedOut;
    }
    getAverageRating() {
      let ratingsSum=this.ratings.reduce((currentSum,rating) =>
       currentSum + rating);
      return ratingsSum / this.ratings.length;
    }
    addRating(value) {
     this.ratings.push(value);
    }
  }
  class Book extends Media {
    constructor(title,author,pages) {
      super(title);
      this._author=author;
      this._pages=pages;
      this._isCheckedOut=false;
      this._ratings=[];
    }
    get title() {
      return this._title;
    }
    get author() {
      return this._author;
    }
  }
  class Movie extends Media {
    constructor(director,title,runTime) {
      super(title);
      this._director=director;
      this._runTime=runTime;
    }
    get director() {
      return this._director;
    } 
    get runTime() {
      return this._runTime;
    }
  }
  const historyOfEverything= new Book('A Short History of Nearly Everything','Bill Bryson',544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed= new Movie('Jan de Bont','Speed',116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());