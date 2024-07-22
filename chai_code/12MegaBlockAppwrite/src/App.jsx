import './App.css'

function App() {

  return (
    <div>
      {console.log(import.meta.env.VITE_APPWRITE_URL)}
      A BLOG React APP
    </div>
  )
}

export default App
