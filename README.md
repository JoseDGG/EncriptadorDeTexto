# 🔐 Text Encryptor

This is a text encryptor developed in HTML, CSS, and JavaScript. It allows encrypting and decrypting text based on a character substitution pattern.

## ✨ Features
- 🔏 **Encrypt text:** Converts vowels into specific letter combinations.
- 🔓 **Decrypt text:** Restores the original text from the encrypted version.
- 📋 **Copy text:** Allows copying the encrypted or decrypted text to the clipboard.
- **Language selector:** Interface available in English and Spanish.
- **Input validation:** Only allows lowercase letters without accents.

## 🛠 Requirements
- 🖥 A modern web browser (Google Chrome, Firefox, Edge, etc.)
- 📦 No additional dependencies required.

## 🚀 Usage
1. Enter text in the input area.
2. Click "Encrypt" to encrypt the text or "Decrypt" to restore it.
3. Copy the result using the "Copy" button.
4. You can change the language from the selector at the top.

## 📂 Project Structure
```
📂 Text-Encryptor
│── 📂 assets               # Images and resources
│── 📂 styles               # CSS files
│── 📄 index.html           # Main file
│── 📄 script.js            # Encryption and decryption logic
│── 📄 translations.json    # Translations for multiple languages
```

## 🔑 Encryption Algorithm
The entered text is encrypted according to the following rules:
- `e` → `enter`
- `i` → `imes`
- `a` → `ai`
- `o` → `ober`
- `u` → `ufat`

The reverse process is applied to decrypt the text.

## 🪟 View of the program

General view

![General view of the program](assets\general_view.jpg)

For Tablets

![General view of the program](assets\general_tablet_view.jpg)

For Mobiles

![General view of the program](assets\general_mobile_view.jpg)

You can run the program by opening `index.html` file in your browser.


## 📜 License
This project is distributed under the MIT license. You are free to modify and share it.