import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm
                headerText="Sign Up for Unique Experience"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {   //Üstteki kısmı gösterme demek.
    return {
        header: null
    };
};

// SignupScreen.navigationOptions = {   //Bu şekilde de yazılıyor. Bu object, diğeri de function which returns object
//     header: null
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', //vertically ortala
        marginBottom: 200
    },

});

export default SignupScreen;