# README.md

## Input

The application allows users to input data through two primary interfaces: 'AddCity' and 'AddCountry'. In 'AddCity', users input a city name and its corresponding country. In the newly added 'AddCountry' tab, users enter a country's name and its currency. The interface uses `TextInput` fields to capture this information, providing a user-friendly way to enter and submit data.

## Process

Upon submission of data in either 'AddCity' or 'AddCountry', the application processes this information using state management. For cities, the application stores the city name and country in a list. For countries, it keeps track of the country name and its currency. This processing involves appending the new entry to the existing list in the application's state. The app ensures that all inputs are valid and alerts the user if any field is left empty before submission.

## Output

The output is displayed in two tabs: 'Cities' and 'Countries'. The 'Cities' tab displays a list of all added cities along with their corresponding countries. Similarly, the 'Countries' tab shows a list of countries with their currencies. Each entry is presented in a clear, readable format, allowing users to easily view the compiled data. The application dynamically updates these lists with every new entry, ensuring the output reflects the most current data provided by the user.
