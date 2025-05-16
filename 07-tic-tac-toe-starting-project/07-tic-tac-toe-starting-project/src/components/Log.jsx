export default function Log({turns}){
    return <ol id="log">
        {turns.map(turn =><li>{turn.player} <select name="" id=""></select></li>)}
    </ol>
}