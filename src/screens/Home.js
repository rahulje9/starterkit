import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { startAuth } from '../ducks/auth';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <View>
            <Text>Home
            </Text>
         </View>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      authReducer: state
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      startAuth: (count) => dispatch(startAuth(count))
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);