/*The user will enter a english paragraph and all that is needed is to just to 
implement counting characters and words without whitespaces.
*/

export function wordCounter ():number {
    var data:string = String(prompt("Please enter a statement or paragraph."));
    data = data.replace(/ /g, "")
    return data.length
}

wordCounter()

