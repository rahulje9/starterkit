import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Splash from '../screens/Splash'


const Navigator = createStackNavigator({
    HOME: Home,
    SPLASH: Splash,

}, {
    initialRouteName: 'HOME',
    defaultNavigationOptions: {
        headerTitle: ''
        // headerShown: false

    }
})

const Router = createAppContainer(Navigator);
export default Router