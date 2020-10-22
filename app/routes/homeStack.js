import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen'
import NumScreen from '../screens/NumScreen'
import CalcScreen from '../screens/CalcScreen'
import FinalPage from '../screens/FinalPage'

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen
    },
    NumScreen: {
        screen: NumScreen
    },    
    CalcScreen: {
        screen: CalcScreen
    },
    FinalPage: {
        screen: FinalPage
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);