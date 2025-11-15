// String Incrementer Challenge
// String Inkrementierer Herausforderung

// Function to increment a string by 1
// Funktion zum Inkrementieren eines Strings um 1
function incrementString(inputString) {
  // First, we need to find where the number part starts (if there is one)
  // Zuerst müssen wir herausfinden, wo der Zahlenteil beginnt (falls vorhanden)

  // Initialize a variable to track where the number starts
  // Initialisiere eine Variable, um zu verfolgen, wo die Zahl beginnt
  let numberStartIndex = inputString.length;

  // Loop backwards through the string to find where digits start
  // Schleife rückwärts durch den String, um zu finden, wo die Ziffern beginnen
  for (let i = inputString.length - 1; i >= 0; i--) {
    // Get the character at position i
    // Hole das Zeichen an Position i
    let character = inputString[i];

    // Check if the current character is a digit (0-9)
    // Prüfe, ob das aktuelle Zeichen eine Ziffer ist (0-9)
    if (character >= "0" && character <= "9") {
      // If it's a digit, update where the number starts
      // Wenn es eine Ziffer ist, aktualisiere, wo die Zahl beginnt
      numberStartIndex = i;
    } else {
      // If we find a non-digit, stop looking
      // Wenn wir eine Nicht-Ziffer finden, höre auf zu suchen
      break;
    }
  }

  // Split the string into text part and number part
  // Teile den String in Textteil und Zahlenteil auf

  // The text part is everything before the number starts
  // Der Textteil ist alles vor dem Beginn der Zahl
  let textPart = inputString.slice(0, numberStartIndex);

  // The number part is everything from where the number starts to the end
  // Der Zahlenteil ist alles vom Beginn der Zahl bis zum Ende
  let numberPart = inputString.slice(numberStartIndex);

  // Check if there is a number part
  // Prüfe, ob es einen Zahlenteil gibt
  if (numberPart === "") {
    // If there's no number, just append "1" to the string
    // Wenn es keine Zahl gibt, füge einfach "1" zum String hinzu
    return inputString + "1";
  } else {
    // If there is a number, we need to increment it
    // Wenn es eine Zahl gibt, müssen wir sie inkrementieren

    // Remember how many digits the original number had (for leading zeros)
    // Merke dir, wie viele Ziffern die ursprüngliche Zahl hatte (für führende Nullen)
    let originalLength = numberPart.length;

    // Convert the number part from string to integer
    // Konvertiere den Zahlenteil von String zu Integer
    let numberAsInt = parseInt(numberPart);

    // Add 1 to the number
    // Addiere 1 zur Zahl
    let incrementedNumber = numberAsInt + 1;

    // Convert the incremented number back to string
    // Konvertiere die inkrementierte Zahl zurück zu String
    let newNumberString = incrementedNumber.toString();

    // Check if we need to add leading zeros
    // Prüfe, ob wir führende Nullen hinzufügen müssen
    if (newNumberString.length < originalLength) {
      // Calculate how many zeros we need to add
      // Berechne, wie viele Nullen wir hinzufügen müssen
      let zerosNeeded = originalLength - newNumberString.length;

      // Add the leading zeros to the front
      // Füge die führenden Nullen vorne hinzu
      newNumberString = "0".repeat(zerosNeeded) + newNumberString;
    }

    // Combine the text part with the new number part
    // Kombiniere den Textteil mit dem neuen Zahlenteil
    let result = textPart + newNumberString;

    // Return the final result
    // Gib das Endergebnis zurück
    return result;
  }
}

// Test cases to verify the function works correctly
// Testfälle, um zu überprüfen, ob die Funktion korrekt funktioniert

// Test 1: String without a number
// Test 1: String ohne Zahl
console.log(incrementString("foo"));
// Expected output: "foo1"
// Erwartete Ausgabe: "foo1"

// Test 2: String with a number at the end
// Test 2: String mit einer Zahl am Ende
console.log(incrementString("foobar23"));
// Expected output: "foobar24"
// Erwartete Ausgabe: "foobar24"

// Test 3: String with leading zeros
// Test 3: String mit führenden Nullen
console.log(incrementString("foo0042"));
// Expected output: "foo0043"
// Erwartete Ausgabe: "foo0043"

// Test 4: String where increment causes digit overflow
// Test 4: String, bei dem das Inkrementieren einen Ziffernüberlauf verursacht
console.log(incrementString("foo099"));
// Expected output: "foo100"
// Erwartete Ausgabe: "foo100"
