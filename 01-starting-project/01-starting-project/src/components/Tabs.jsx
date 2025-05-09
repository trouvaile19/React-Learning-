export default function TabButton({children, buttons}){
    return(
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}  