
import { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WheelComponent from 'react-wheel-of-prizes'
import { delUsers } from '../../redux/reducer/usersSlice';
import winnerSlice from '../../redux/reducer/winnerSlice';
function WheelLucky({className,users}) {
  const dispatch=useDispatch()
  const [data,setData]=useState([])
    const usersName=users.map(user=>user.Username)
  useEffect(()=>{
    setData(users.map(item=>item.Username))
  },[users])
  console.log(winnerSlice)
      const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000'
      ]
      const onFinished = (winner) => {
        const id=users.find((user)=>user.Username===winner)._id
        console.log(id)
        alert(`Chúc mừng ${winner} là người được chọn 🎉🎉`);
        dispatch(winnerSlice.actions.addWinner(users.find((user)=>user.Username===winner)))
        dispatch(delUsers({_id:id}))
      }
    return (

    <div className={className} key={data.length}>
    <WheelComponent
      segments={data}
      segColors={segColors}
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={300}
      upDuration={50}
      downDuration={1000}
      fontFamily='Arial'
    />
        </div>
        
    );
}

export default WheelLucky;