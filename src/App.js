import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react'
import Counter from './Counter'
import { Avatar, Button, FormControl } from '@mui/material';
import { TextField } from '@mui/material';
function App() {

  // let [temp, setTemp] = useState(true)

  // let Count = useRef(10);

  // let number = 40;


  console.log('super')

  useEffect(() => {
    console.log('effect1')
    // Every Render
  })


  useEffect(() => {
    console.log('Mount')

  }, [])


  const upload = (e) => {
    
    // return
    const form = new FormData()

    for (const key in form) {
      form['sampleFile'] = e.target.files
    }
    // const control = new FormControl(e.target)
    // form.append('sampleFile', control);
    console.log(form)
    // return
    fetch('http://localhost:3001/upload', { // Your POST endpoint
      credentials: "include",
      method: 'POST',
      body: form
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => console.log(success) // Handle the success response object
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  };

  // Event handler executed when a file is selected
  const onSelectFile = (e) => upload(e.target.files[0]);


  const Login = () => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'login@login.com'
      })
    }).then(x => {
      return x.json();
    }).then(x => {
      document.cookie = `token=${x.data.token}`
    }).catch(er => {

    })
  }

  let Increment = () => {
    // setTemp(value => !value)  

    fetch('http://localhost:3001/accessResource', {
      credentials: "include"
    }).then(x => {
      return x.json()
    }).then(x => {
      console.log(x)
    }).catch(err => {

    });

    console.log('Increament')

  }

  let submitForm = (e) => {
    // setTemp(value => !value) 
    e.preventDefault()
    const form = new FormData(e.target)

    fetch('http://localhost:3001/upload', {
      credentials: "include",
      method: 'POST',
      body: form
    }).then(x => {
      return x.json()
    }).then(x => {
      console.log(x)
    }).catch(err => {

    });

    console.log('Increament')

  }

  return (
    <>
    
    </>
    // <div className="App">


    //   <Avatar
    //     alt="Remy Sharp"
    //     src="http://localhost:3001/uploads/Query.png"
    //     sx={{ width: 24, height: 24 }}
    //   />

    //   {/* <form method='post' encType='multipart/form-data' action='http://localhost:3001/upload'> */}
    //   <form onSubmit={submitForm}>
    //     <TextField id="outlined-basic" label="sampleFile" name="sampleFile" type="file" onChange={upload} />
    //     {/* <input type="file" name='sampleFile'/> */}
    //     <Button type='submit'>Send</Button>
    //   </form>

    //   {/* <img src='http://localhost:3001/uploads/Query.png'/> */}

    //   <button onClick={Login}>Login</button>
    //   <button onClick={Increment}>Increament</button>
    //   {[1, 2, 3, 4].map(x => <li>{x}</li>)}
    //   <span></span>

    //   {/* <Counter render={x => <button>{x}</button>} />
    //   <Counter render={x => <span>{x}</span>} />
    //   <Counter><input type="date"/></Counter> */}
    // </div>
  );
}

export default App;
