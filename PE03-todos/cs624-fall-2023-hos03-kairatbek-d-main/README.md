# CS624-Fall-2023-PE04

# Input
The app receives user input through the `Input` component where users can type in their todos, and through the `Button` component which adds the todos to the list. The `TabBar` allows users to filter todos based on their status.

# Process
When a todo is added, the app updates its state, adding the new todo to the array of todos. The `TodoList` component then maps over this array and renders each todo. When a todo is marked as done or deleted, the state is updated again, reflecting these changes instantly on the UI. The `TabBar` component filters the displayed todos based on their completion status.

# Output
The output is a visual representation of the user's todos. The `Heading` displays the app’s title. The `Input`, `Button`, and `TodoList` together showcase the todos, allowing interaction to mark them as done or delete them. The `TabBar` provides an additional layer of interaction for filtering the displayed todos.
