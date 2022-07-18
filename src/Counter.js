
export default function Counter({ render, children }) {

    return (<>
        <div>
            <span>{children}</span>
            {/* {(render ? render("sagar"): <h1>sagar</h1>)} */}
        </div></>)
}


// export const Counter  = props =>{
//     return (<>{props.children}</>)
// }