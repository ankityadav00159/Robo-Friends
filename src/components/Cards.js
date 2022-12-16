import React from 'react'

const Cards = (props) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={`https://robohash.org/${props.id}`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )    
}

export default Cards

// SECOND METHOD we can do by this as well destructring

// const Cards = (props) =>{
//     const {name , email, id} = props
//     return(
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt="robots" src={`https://robohash.org/${id}`}/>
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )    
// }

// export default Cards

// THIRD METHOD

// const Cards = ({name,email.id}) =>{
//     return(
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt="robots" src={`https://robohash.org/${id}`}/>
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )    
// }

// export default Cards