
const QuoteBox = React.createClass({
  getInitialState(){
    return{
      quote: ''
    }
  },
  getQuote(){
    const api =fetch('http://api.icndb.com/jokes/random',{mode: 'no-cors'}).
      then((res)=> res.json()).then((json)=>  json.value.joke.replace(/&quot;/g, '\"'))
    api.then((quote)=> this.setState({quote: quote}))
  },

  render(){
    const encodedQuote = encodeURIComponent(this.state.quote)
    const url = `https://twitter.com/intent/tweet?text=${encodedQuote}`

    return (

      <div  className='is-flex' style={styles.container}>
        <div className='is-flex' style={styles.quote}>
          <i className="fa fa-quote-left" style={styles.quotes}></i>
          <div  className="box container" >
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p className='title is-1'>
                     {this.state.quote}
                  </p>
                </div>
                <nav className="navbar">
                  <div className="navbar-left">

                    <a className="navbar-item"
                      href= {url}
                      data-size="large">
                      {this.state.quote?  <span className="icon is-large"><i className="fa fa-twitter"></i></span>:null}
                    </a>

                  </div>
                </nav>
              </div>
            </article>
          </div>
          <i className="fa fa-quote-right" style={styles.quotes}></i>
        </div>
        <button onClick={this.getQuote} className="button is-primary">{this.state.quote? 'get another' : 'click to start' }</button>
      </div>



    );
  }
});

const styles = {
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  },
  quote:{
    flexDirection: 'row',
    borderColor: 'black',
    alignItems: 'center',
  },
  quotes:{
    margin: 30,
    fontSize: 50
  }
}








ReactDOM.render(
<QuoteBox/>,
  document.getElementById('root')
);
