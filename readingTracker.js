// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/* 
The addReadBook() function's purpose is to add a new reading entry to the reading log. 
Using the inputs of the day, the name of the book, and the amount of mintues spent reading, this function adds a new object to the readingLog array and has no return. 
*/
function addReadBook(day, book, minutes) { 
  const newEntry = { day, book, minutes }; //Adds a new object element to an array with three properties, day, book, and minutes. 
  readingLog.push(newEntry);
}

/* 
The totalReadingMinutes() function's purpose is to calculate the total amount of minutes spent reading.
It uses the input of the log that will be used to calculate the total reading time, and it returns the total time spent reading in the chosen log.
*/
function totalReadingMinutes(log) {
  let total = 0; 
  for (let entry of log) { //This loop cycles through every entry of log and adds the minutes recorded from that entry to the total.
    total += entry.minutes;
  }
  return total;
}

/* 
The mostReadBook() function's purpose is to find the book that has been read the most frequently in the reading log. 
It requires the input of which log it is finding the most read book for, and returns the title of the book that was read the most.
*/
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) { // This loop is going through every entry in log and first deciding whether the book from that entry has been logged before in the object bookCounts. 
    if (!bookCounts[entry.book]) { // If the book hasn't been logged before it creates a new property in the bookCounts object and sets its value to 1.
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++; // If the book has been logged before, it adds 1 to the existing property. 
    }
  }
// After the loop is complete, the bookCounts object contains the number of times each book has been read. 

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) { // This loop is going through every book in the bookCounts object
    if (bookCounts[book] > maxCount) { // First it checks whether the amount of times the book has been read is more than the largest marked count.
      maxBook = book; // If the book has a higher count, it is named as the book with the highest count.
      maxCount = bookCounts[book]; // The highest count becomes the number of times the book has been read. 
    }
  }
// After this loop is complete, we have the book that has been read the most times in the maxBook variable and the amount of times it has been read in the maxCount variable. 
  return maxBook;
}

/* 
The printDailySummary() function's purpose is to print a summary of each day from the log. 
It requires the input of which log it will summarize, and prints to the console the entry day, the name of the book that was read that day, and number of minutes read.
This function has no return.
*/
function printDailySummary(log) {
  for (let entry of log) { // For every element in log, this loop cycles through and prints to the console the day, amount of minutes, and the name of the book.
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

/* 
My suggestion: 
I noticed that in the addReadBook, when adding an entry is automatically adds a new entry to the readingLog array; however, looking at the other functions, they require you to specify which log to apply their function.
My suggestion would be to add another perameter to specify which reading log array a new entry will be added to. 
This would be helpful because it would create more opportunities for the function to apply in different situations, and also make the other functions more useful, because there would be more situations for them to apply to.
Additionally, it would make it possible for more readingLogs, for different weeks or different people.
*/