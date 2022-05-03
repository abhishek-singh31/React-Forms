import React from "react"

export default function App(){
    const [formData,setFormData] = React.useState({
      email:"",
      password:"",
      confirmPassword:"",
      join:false
    })

    function handleChange(event) {
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value
          }
      })
    }

    function handleSubmit(event){
      event.preventDefault();
      const password=formData.password
      const confirmPassword=formData.confirmPassword
      if(password===confirmPassword){
        console.log("Successfully signed up")
        if(formData.join){
          console.log("Thanks for signing up for our newsletter")
        }
      }
      else{
        console.log("passwords do not match")
      }

      
    }

    return (
        <form onSubmit={handleSubmit}>
           <input 
                type="text"
                placeholder="Email address"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <br/>
            <br/>
            <input 
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <br/>
            <br/>
            <input 
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
            />
            <br/>
            <br/>
            <input
                name="join"
                type="checkbox"
                id="join"
                checked={formData.join}
                onChange={handleChange}
            />
            <label htmlFor="join">I want to join the newsletter</label>
            <br/>
            <br/>
            <center><button>Sign Up</button></center>
        </form>
    )
}