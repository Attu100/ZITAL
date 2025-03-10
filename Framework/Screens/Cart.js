
import {View,ScrollView,StatusBar,Text, StyleSheet, TouchableOpacity, Image, Button} from "react-native"
import { Caption } from "react-native-paper"
import { Checkout } from "./CheckOut"
export function CartScreen({navigation}){
  return (

    
 

  <View style={styles.startAfterStatusBar}>
    <View style={styles.container} /* overall view*/>
      
      <View style={styles.Header}>
          <Text style={styles.headerText}>cart summary</Text>
      </View>
      
      <View style={styles.cartCount} /* delivery view*/>
        <Text style={styles.cartCountText}>Count : 0 </Text>
      </View>
      <View style={styles.cartCount} /* delivery view*/>
        <Text style={styles.subtotal}>Subtotal : $300</Text>
      </View>
      
      <ScrollView style={styles.deliveryDetails} /*Details view*/>
        <View style={styles.goodsDetails} /*both properties and delivery option*/>
          <View style={styles.goodsImage} /* image view*/>
            <Image source={require("../assets/exclusive-shoes-@-affordable-price.jpg")} style={styles.goodsImage} resizeMode="contain"/>
          </View> 

          <View style={styles.nameAndOtherDetails} >
            <View>
              <Text>exclusive shoes at affordable price for mens</Text>
            </View>

            <View style={{ marginVertical:5}}>
              <Text>size: M</Text>
            </View>
            <View>
              <Text style={styles.price}>$:100</Text>
            </View>
          </View>



          <View style={styles.goodsProperties} /* properties view*/>
            
            <View style={styles.removeButton}>
              <Button title="remove" color={"#ffd700"}/>
            </View>
            <View style={styles.qauntity}>
              <Text style={{fontSize:30}}>1</Text>
            </View>
            
            <View style={styles.incrementContainer}>
            <TouchableOpacity style={styles.incrementButton}>
                <Text style={styles.incrementAndDecrementButton}>+</Text>
            </TouchableOpacity>
            
              <TouchableOpacity style={styles.decrementButton}>
              <Text style={styles.incrementAndDecrementButton}>-</Text>
              </TouchableOpacity>
            </View>
            
           
          </View>

        </View>




        <View style={styles.goodsDetails} /*both properties and delivery option*/>
          <View style={styles.goodsImage} /* image view*/>
            <Image source={require("../assets/jeans.jpg")} style={styles.goodsImage} resizeMode="contain"/>
          </View> 

          <View style={styles.nameAndOtherDetails} >
            <View>
              <Text>exclusive shoes at affordable price for mens</Text>
            </View>

            <View style={{ marginVertical:5}}>
              <Text>size: M</Text>
            </View>
            <View>
              <Text style={styles.price}>$:100</Text>
            </View>
          </View>



          <View style={styles.goodsProperties} /* properties view*/>
            
            <View style={styles.removeButton}>
              <Button title="remove" color={"#ffd700"}/>
            </View>
            <View style={styles.qauntity}>
              <Text style={{fontSize:30}}>1</Text>
            </View>
            
            <View style={styles.incrementContainer}>
            <TouchableOpacity style={styles.incrementButton}>
              <Text style={styles.incrementAndDecrementButton}>+</Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.decrementButton}>
              <Text style={styles.incrementAndDecrementButton}>-</Text>
              </TouchableOpacity>
            </View>
            
           
          </View>

        </View>

        <View style={styles.goodsDetails} /*both properties and delivery option*/>
          <View style={styles.goodsImage} /* image view*/>
            <Image source={require("../assets/portable ware.jpg")} style={styles.goodsImage} resizeMode="contain"/>
          </View> 

          <View style={styles.nameAndOtherDetails} >
            <View>
              <Text>exclusive shoes at affordable price for mens</Text>
            </View>

            <View style={{ marginVertical:5}}>
              <Text>size: M</Text>
            </View>
            <View>
              <Text style={styles.price}>$:100</Text>
            </View>
          </View>



          <View style={styles.goodsProperties} /* properties view*/>
            
            <View style={styles.removeButton}>
              <Button title="remove" color={"#ffd700"}/>
            </View>
            <View style={styles.qauntity}>
              <Text style={{fontSize:30}}>1</Text>
            </View>
            
            <View style={styles.incrementContainer}>
            <TouchableOpacity style={styles.incrementButton}>
              <Text style={styles.incrementAndDecrementButton}>+</Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.decrementButton}>
              <Text style={styles.incrementAndDecrementButton}>-</Text>
              </TouchableOpacity>
            </View>
            
           
          </View>

        </View>
       
      </ScrollView> 
      <View style={styles.checkOutBus}>
         <TouchableOpacity style={styles.checkOutButton} onPress={() => navigation.navigate("Checkout")}>
           <Text style={{fontSize:30, fontWeight:500}}>checkout</Text>
         </TouchableOpacity>
       </View>
    </View>

  </View> 
  )
}



const styles= StyleSheet.create({
startAfterStatusBar:{
flex:1,
marginTop:StatusBar.currentHeight
},


container:{
  width:"97%",//((Dimension.get("screen").width)-10),
   height:"100%",
  flex:1,
  margin:4,
  padding:3,
  backgroundColor:"#dddcdc",
  borderRadius:10,
},
Header:{
  height:40,
  alignItems:"center",
  justifyContent:"center",
  borderWidth:2,
  borderColor:"#ffd700",
  backgroundColor:"#f3f2f2",
  borderRadius:10
},
headerText:{
  fontWeight:500,
  fontSize:30
},
cartCount:{
  height:40,
  alignItems:"center",
  justifyContent:"center",
  borderRadius:10,
  backgroundColor:"#f3f2f2",
  position:"relative",
  margin:2
}, 
cartCountText:{
  position:"absolute",
  left:10
},
subtotal:{
  position:"absolute",
  left:10
},
deliveryDetails:{
  borderRadius:15,
  margin:7,
  flexDirection:"column",

},
goodsDetails:{
  height:250,
  padding:4,
  borderRadius:8,
  margin:2,
  backgroundColor:"#f3f2f2",
  position:"relative"
},
goodsImage:{
  width:118,
  height:120,
 
 
 
  objectFit:"contain",
  justifyContent:"center",
  resizeMode:"contain",

  },
goodsProperties:{
  
  borderRadius:10,
  height:70,
  position:"absolute",
  bottom:0,
  width:"100%",
  flex:1,flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-around",
  marginLeft:2.5,
  marginBottom:2
},
checkOutButton:{
  backgroundColor:"#ffd700", 
  borderRadius:20,
  alignItems:"center",
  justifyContent:"center"
},
optons:{
  flex:1,
 
},
removeButton:{
position:"absolute",
left:5, 
},

qauntity:{
  width:50,
  height:35,
  position:"absolute",
  left:120,
  backgroundColor:"#cacac8",
  borderRadius:20,
  alignItems:"center"
},
nameAndOtherDetails:{
  width:"59%",
  height:138,
  position:"absolute",
  top:5,
  right:2,

},
price:{
fontSize:15,
fontWeight:"900",

},
checkOutBus:{
  height:40, 
  borderRadius:20,
   marginBottom:2
},
incrementContainer:{
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  position:"absolute",
  right:5
},
incrementButton:{
  width:40,
  margin:5,
  backgroundColor:"#ffd700",
  borderRadius:10
},
decrementButton:{
  width:40,
  backgroundColor:"#ffd700",
  borderRadius:10

},
incrementAndDecrementButton:{
  fontSize:40, 
  padding:4,
  textAlign:"center",
  color:"white"}
})

 
