function Form() {
    const registerUser = event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic
    }
  
    return (
      <form onSubmit={registerUser}>
        <label htmlFor="quantity">quantity</label>
        <input id="quantity" type="text" autoComplete="quantity" required />
        <button type="submit">Register</button>
      </form>
    )
  }

  export default Form