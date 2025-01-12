import React from 'react'

interface ILoadingProps{
    loading: Boolean
}



const Loading: React.FC<ILoadingProps> = (props) => {
    const {loading}=props
    if(loading){
        return <>Loading...</>
    }



  return (
    <>
    {props.children}
    </>
    )
}

export default Loading