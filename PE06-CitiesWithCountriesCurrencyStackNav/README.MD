# README.md

## Input
The primary input for the Country.js component comes from the user through two TextInput fields. Users input the name and information of a new currency. This data is collected as part of the component's state, specifically in the name and info fields. Additionally, the component receives navigation parameters, particularly the country object, which includes details about the selected country and its existing currencies.

## Process
Upon receiving user input, Country.js uses the onChangeText function to update its state with the new currency's name and info. The addCurrency function is the core processing method. It validates the input (to ensure neither field is empty) and then creates a new currency object. This object is added to the country's currency list using a function passed through navigation parameters. The state is then reset to clear the input fields.

## Output
The output of Country.js is twofold. Firstly, it visually displays the list of currencies related to the country, updated in real-time as the user adds new currencies. This is rendered within a ScrollView for better user experience. Secondly, the component updates the parent state (in this case, the list of countries and their currencies) with the new currency data. This ensures that the newly added currency persists beyond the scope of the current component, integrating into the overall application's data structure.