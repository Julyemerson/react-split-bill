# Eat-'N-Split

![Eat and split image](/public/eat-image.png "eat and split app")

Eat-'N-Split is a React application that allows users to manage and split bills among friends.

## Structure

The application is structured into several components, each responsible for a specific functionality:

- [`App`](src/App.jsx): This is the main component of the application. It manages the state of the application and handles the logic for adding friends and splitting bills.

- [`Button`](src/components/Button.jsx): A reusable button component.

- [`FormAddFriend`](src/components/FormAddFriend.jsx): A form that allows users to add a new friend. It takes a callback function `onAddFriend` as a prop, which is called with the new friend's information when the form is submitted.

- [`FormSplitBill`](src/components/FormSplitBill.jsx): A form that allows users to split a bill with a selected friend.

- [`Friend`](src/components/Friend.jsx): A component that represents a friend.

- [`FriendList`](src/components/FriendList.jsx): A component that displays a list of friends.

## Running the Application

To run the application, use the `npm start`. This will start the application in development mode and open it in your default web browser.

## Building the Application

To build the application for production, use the `npm run build` command. This will create a production-ready build in the `build` folder.
