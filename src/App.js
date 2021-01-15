import React from 'react'
import './App.css';
//import Counter from './component/counter/Counter';
//import FirstComponent from './component/learning-examples/FirstComponent';
//import SecondComponent from './component/learning-examples/SecondComponent';
//import ThirdComponent from './component/learning-examples/ThirdComponent';
import TodoApp from './component/todo/TodoApp';
import './bootstrap.css';

function App() {
  return (
    <div className="App">

      <TodoApp />

      {/* <Counter /> */}
    </div>
  );
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponent">
//         Hello World!
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//       </div>
//     );
//   }
// }

export default App;
