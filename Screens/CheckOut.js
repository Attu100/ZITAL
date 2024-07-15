import { Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Checkout(){

return (
<View style={styles.container}>

    <View style={styles.OderDetails}>
        <View>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}> Order summary</Text>
                </View>
            </View>
            
            <View style={styles.orderSummary}>
                <View style={ styles.orderSummaryDetails}>
                    <Text>items (3)</Text>
                </View>
                <View style={ styles.orderSummaryDetails}> 
                    <Text>shipping</Text>
                </View>
                <View style={ styles.orderSummaryDetails}>
                    <Text>total before tax</Text>
                </View>
                <View style={styles.orderSummaryDetails}>
                    <Text>estimated tax (10%)</Text>
                </View>
            </View>
            
            
        </View>

        <View style={{height:100}}>
            <View style={ styles.totalAmount}>
                <Text style={ styles.totalAmountText}>Order total :</Text>
            </View>
            <View style={{ margin:3,flex:1, borderRadius:10}}>
                <TouchableOpacity style={ styles.placeOrderButtoon}>
                    <Text style={{fontSize:30}}>place oder</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</View>
)
}


const styles = StyleSheet.create({
container:{
    marginTop:StatusBar.currentHeight,
    flex:1, 
    justifyContent:"center",
     padding:5
},
OderDetails:{
    height:"55%", 
    backgroundColor:"#d4d4d4",
     borderRadius:10, 
     padding:3
},
header:{  
    height:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f3e1e1"
},
headerText:{
    fontSize:30,
     padding:4
},
orderSummary:{
    height:200,
     marginVertical:4,
      justifyContent:"space-around",
       padding:4
},
orderSummaryDetails:{ 
    height:40, 
    justifyContent:"center",
    backgroundColor:"#f3f2f2",
    borderRadius:10,
    padding:2
},
totalAmount:{
    margin:4, 
    flex:1,
    paddingHorizontal:4,
    justifyContent:"center",
    backgroundColor:"#f3f2f2"
},
totalAmountText:{
    fontSize:20,
    color:"red"
},
placeOrderButtoon:{
    height:30,
     alignItems:"center",
     justifyContent:"center",
     backgroundColor:"gold",
      borderRadius:10,flex:1

}


})