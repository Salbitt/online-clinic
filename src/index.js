import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {connect,mongoose} from 'mongoose'


const root = ReactDOM.createRoot(document.getElementById('root'));
// mongoose.connect('mongodb+srv://writetosalonistephen:admin@cluster0.httfceh.mongodb.net/?retryWrites=true&w=majority')


// const connection =

//   "mongodb+srv://<myusernamehere>:<mypasswordhere>@cluster0.gcyyo.mongodb.net/<mydatabasehere>?retryWrites=true&w=majority";

// mongoose

//   .connect(connection, {

//     useNewUrlParser: true,

//     useUnifiedTopology: true,

//     useFindAndModify: false,

//   })

//   .then(() => console.log("Database Connected Successfully"))

//   .catch((err) => console.log(err));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
