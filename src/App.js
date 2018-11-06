import React from 'react'
import AppRouter from './AppRouter'
import TopNav from './components/TopNav'
import './App.css'
import Spinner from './components/Spinner'

class App extends React.Component {
  state = {
    isLoading: true,
    error: false,
  }

  async componentDidMount() {
    const delay = 700;
    const delayedPromise = new Promise(resolve => setTimeout(resolve, delay));
    const testFetch = fetch(process.env.REACT_APP_API_URL);
    try {
      await Promise.all([ testFetch, delayedPromise ]);
    }
    catch (err) {
      this.setState({error: `Error fetching API`})
    }
    this.setState({ isLoading: false });
  }

  render () {

    const error = (
      <div className="container mt-4">
        <h3>{this.state.error}</h3>
      </div>
    );

    return (
      <div>
        <TopNav />
        { this.state.isLoading ? <Spinner /> : this.state.error ? error : <AppRouter />}
      </div>
    )
  }
}

export default App
