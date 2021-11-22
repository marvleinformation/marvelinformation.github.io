import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundry extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if ( this.state.error) {
            return <ErrorMessage/>
        }
        
        return this.props.children;
    }
}

export default ErrorBoundry;

// Везде ловить ошибки не возможно они ловят ошибки только в методе render, в методах жизненого цикла и в конструкторах дочерных компонентов
// Предохранители не ловят ошибки которые произошли внутри обработчика событий потому что события происходят вне компонента render