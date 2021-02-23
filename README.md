# Github-id-search
A Github ID Search Webapp built using React, showing user stats.

Visit here:- https://9o033.csb.app/

(Approx. 7 hrs. solo project)

It uses, in addition to React, the Axios library. It’s a library to handle network requests.


Explanation:-

A form that accepts a GitHub username and once it receives a submit event, it asks the GitHub API for the user information and prints them.
This code creates a reusable Card component. 
When you enter a name in the input field managed by the Form component, this name is bound to its state.
After typing out a GitHub username when Search is pressed, the input form is cleared by clearing the userName state of the Form component, 
and user details is displayed in card format. 
Since there is a reusable card component we can create as many cards in one go.

We start by creating the Card component, the one that will display our image and details as gathered from GitHub. It gets its data via props, using:

- props.avatar_url the user avatar (Shows the regular github avatar, if no picture of user)
- props.public_repos the number of public repositories
- props.followers the number of followers
- props.following the number of followings
- props.name the user name
- props.blog the user website URL (Shows N/A if user hasn't given their website on Github)
- props.html_url the user GitHub ID URL
- props.location the user location (Shows nothing if empty)

The parent component is App, which stores the cards array in its own state, managed using the useState() Hook.
Inside App component, We create a list of those components, which will be passed by a parent component in the cards prop to CardList, 
which iterates on it using map() and outputs a list of cards.

Now to ask GitHub for the details of a single username, we’ll use a Form component, where we manage our own state (username), 
and we ask GitHub for information about a user using their public APIs ("https://api.github.com/users/${userName}"), via Axios.

When the form is submitted we call the handleSubmit event, and after the network call we call props.onSubmit passing the parent (App) the data we got from GitHub.

We add it to App, passing a method to add a new card to the list of cards, addNewCard, as its onSubmit prop.

Finally we render our app, back to Index JS file.
