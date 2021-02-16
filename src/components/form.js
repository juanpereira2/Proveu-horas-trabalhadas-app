import { React, Component } from "react";
import M from "materialize-css";
// ref can only be used on class components
class Form extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <div class="container center-align">
        <div className="Form">
          <label>Escolha sua hora de entrada</label>
          <input type="text" class="timepicker" />
          <label>Escolha sua hora de saida</label>
          <input type="text" class="timepicker" />
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    );
  }
}
export default Form;
