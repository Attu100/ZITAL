import {View,ScrollView,StatusBar,Text} from "react-native"

export function CartScreen(){

  return (
<View style={styles.startAfterStatusBar}>
    <View style={styles.Header}>
      <Text>header</Text>
    </View>
  <ScrollView>
    <View style={styles.container} /* overall view*/>
      <View style={styles.deliveryDate} /* delivery view*/>
        <Text>Delivery date</Text>
      </View>
      <View style={styles.deliveryDetails} /*Details view*/>
      <View style={styles.goodsDetails} /*both properties and delivery option*/>
        <View style={{BackgroundColor:"yellow"}} /* image view*/>
            <Text>image field</Text>
        </View>
        <View style={styles.goodsProperties} /* properties view*/>
        <View style={{BackgroundColor:"gray"}}>
          <Text>name</Text>
        </View>
        
        <View style={{BackgroundColor:"yellow"}}>
          <Text>price</Text>
        </View>
        <View style={{BackgroundColor:"gray"}} >
          <Text>qauntities</Text>
          <Button>update</Button>
          <Button>delete</Button>
        </View>
        </View>
      </View>
      <View style={styles.deliveryOption}/* delivery options*/>
        <Text>choose a deliveryoption:</Text>
        <View style={styles.optons} /*optons*/>
          <View /* to separate check box */>
            <InputText type="check"/>
          </View>
          <View>
            <Text>date</Text>
            <Text>shipping</Text>
          </View>
        </View>
        <View style={styles.optons} /*optons*/>
          <View /* to separate check box */>
            <InputText type="check"/>
          </View>
          <View>
            <Text>date</Text>
            <Text>shipping</Text>
          </View>
        </View>
        <View style={styles.optons} /*optons*/>
          <View /* to separate check box */>
            <InputText type="check"/>
          </View>
          <View>
            <Text>date</Text>
            <Text>shipping</Text>
          </View>
        </View>
      </View>
    </View>
    </View>
  </ScrollView>

</View>
  )
}



const styles= StyleSheet.create({
startAfterStatusBar:{
flex:1,
marginTop:StatusBar.CurrentHeight
},
Header:{
  backgroundColor:"gray",
  height:50
},

container:{
  backgroundColor:"gray",
  width:((Dimension.get("screen").width)-10),
  height:400,
  flex:1
},
deliveryDate:{
height:70
},
deliveryDetails:{
  backgroundColor:"gray",
  height:320,
  flex:1,
  horizontal:"row"
},
goodsDetails:{
  backgroundColor:"gray",
  flex:1,
},
goodsProperties:{
  flex:1,
},
deliveryOption:{
  flex:1
},
optons:{
  flex:1,
  horizontal:"row"
}




})

