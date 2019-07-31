This was my first MERN app.

I used a MongoDB along with Mongoose to create the schema and model.

Express JS server, that I tested first through Postman.

React Client, with Node package manager.

The form has validation for each input field, that will appear in the form of small red print (example: user name must have more than 3 letters, e-mail must contain @, plus some of the fields were put in the schema as unique).

To validate the form I used a dynamic input (this.setState({ [name]: value]), that will keep track of ever change in the inputs, and simultaneously update the state in my form.It also allows to use the same function for almost every field.

There is also a terms and conditions field (checkbox), that will trigger a modal if we try to save the form without checking it.

For the design I used bootstrap.
