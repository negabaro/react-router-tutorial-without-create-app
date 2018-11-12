import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import { Home, About } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
              Hello React-Router
              <Route exact path="/" component={Home} />
               {/* exact 가 붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여줍니다. */}
               {/* exact 를 하지 않으면, /about 에도 / 가 있기 때문에, 매칭이 되어서 Home,About 다 표시   */}
               
              <Switch>
                <Route path="/about/:name" component={About}/>
                <Route path="/about" component={About} />
              </Switch> 
            </div>
        );
    }
}



export default App;