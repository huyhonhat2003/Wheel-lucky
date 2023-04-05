import {Schema,model} from 'mongoose'
const userSchema= new Schema({
    Username:{
    type:String,
    require:true,
    }
})
export default model('user',userSchema)