export const randomNumberGenerator = (min, max) => Math.random() * (max - min) + min;


const getElementPosition = (arr, item) => {
    let low = 0, high = arr.length - 1, mid = Math.round((low + high) / 2);
    while(low<high) {
        if(arr[mid].volume < item.volume){
            low = mid + 1;
        } else if(arr[mid].volume > item.volume) {
            high = mid -1;
        }
        mid = Math.round((low + high) / 2);
    }
    return low;
}

export const sortedElements = (currentElements, newItem) => {
    if(currentElements.length === 0) return [newItem]; 
    
    const elementSet = [...currentElements];
    if(elementSet[0].price > newItem.price){
        elementSet.splice(0, 0, newItem);
        return elementSet;
    }
    if(elementSet[elementSet.length-1].price < newItem.price){
        elementSet.push(newItem);
        return elementSet;
    };
    const position =  getElementPosition(elementSet, newItem);
    elementSet.splice(position, 0, newItem);
    return elementSet;
}
