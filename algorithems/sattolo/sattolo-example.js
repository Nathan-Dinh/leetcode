const SattoloShuffle = (array) => {
    const length = array.length; //Gets the length of the array
    for (let i = length - 1; i > 0; i--) { // Iterates through the array back words 
      const j = Math.floor(Math.random() * i); //Gets a number between 0 to i 
      const temp = array[i]; //stores the number in a temp variable
      array[i] = array[j]; // switches the number i with number j
      array[j] = temp; // changes j to whatever the temp the number is 
    }
    return array;
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  const shuffledArray = SattoloShuffle(myArray);
  console.log(shuffledArray)