# String Incrementer

[English](#english) | [Deutsch](#deutsch)

---

## English

### Description

A simple JavaScript function that increments a string by 1. If the string ends with a number, it increments that number. If it doesn't end with a number, it appends "1" to the string.

### Features

- ✅ Increments numbers at the end of strings
- ✅ Preserves leading zeros
- ✅ Handles strings without numbers
- ✅ Handles digit overflow (e.g., 099 → 100)

### Usage

```javascript
incrementString("foo");       // Returns: "foo1"
incrementString("foobar23");  // Returns: "foobar24"
incrementString("foo0042");   // Returns: "foo0043"
incrementString("foo099");    // Returns: "foo100"
```

### How to Run

```bash
node string_incrementer.js
```

### Code Structure

The code is written in a beginner-friendly style with:
- Every line commented in English and German
- Clear variable names
- Step-by-step logic explanation
- Test cases included

### Algorithm

1. Loop backwards through the string to find where digits begin
2. Split the string into text part and number part
3. If no number exists, append "1"
4. If a number exists, increment it by 1
5. Preserve the original number of digits (leading zeros)
6. Combine text and number parts and return

---

## Deutsch

### Beschreibung

Eine einfache JavaScript-Funktion, die einen String um 1 inkrementiert. Wenn der String mit einer Zahl endet, wird diese Zahl inkrementiert. Wenn er nicht mit einer Zahl endet, wird "1" an den String angehängt.

### Funktionen

- ✅ Inkrementiert Zahlen am Ende von Strings
- ✅ Erhält führende Nullen
- ✅ Verarbeitet Strings ohne Zahlen
- ✅ Verarbeitet Ziffernüberlauf (z.B. 099 → 100)

### Verwendung

```javascript
incrementString("foo");       // Gibt zurück: "foo1"
incrementString("foobar23");  // Gibt zurück: "foobar24"
incrementString("foo0042");   // Gibt zurück: "foo0043"
incrementString("foo099");    // Gibt zurück: "foo100"
```

### Ausführen

```bash
node string_incrementer.js
```

### Code-Struktur

Der Code ist in einem anfängerfreundlichen Stil geschrieben mit:
- Jede Zeile auf Englisch und Deutsch kommentiert
- Klare Variablennamen
- Schritt-für-Schritt-Logikerklärung
- Testfälle enthalten

### Algorithmus

1. Rückwärts durch den String schleifen, um zu finden, wo Ziffern beginnen
2. String in Textteil und Zahlenteil aufteilen
3. Wenn keine Zahl vorhanden ist, "1" anhängen
4. Wenn eine Zahl vorhanden ist, um 1 inkrementieren
5. Ursprüngliche Anzahl der Ziffern beibehalten (führende Nullen)
6. Text- und Zahlenteile kombinieren und zurückgeben

---

## License / Lizenz

This project is open source and available for educational purposes.

Dieses Projekt ist Open Source und für Bildungszwecke verfügbar.
