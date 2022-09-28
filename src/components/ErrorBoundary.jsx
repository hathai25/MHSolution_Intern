import { withErrorBoundary } from "react-error-boundary";

function ErrorFallBack({error, resetErrorBoundary}) {
    return(
        <div role="alert">
            <p>Something went wrong: </p>
        </div>
    )
}

function TestErrorBoundary({name}) {
    return(
        <>
            <input 
                type="text" 
                placeholder="Error Boundary Test" 
                style={{marginTop: "10px", padding: "10px", borderRadius: "20px", width: "160px"}} 
            />
        </>
    )
}

export default withErrorBoundary(TestErrorBoundary, {
    FallbackComponent: ErrorFallBack,
})