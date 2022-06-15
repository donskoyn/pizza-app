import { useDispatch } from 'react-redux';
import LoginFormWithFormik from '../components/LoginForm';
import WrapperForm from '../components/UI/WrapperForm';

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <WrapperForm>
                <LoginFormWithFormik dispatch={dispatch} />
            </WrapperForm>
        </div>
    );
};

export default Login;
