class DynamicArray{
    
    constructor(){
        this.array = [];
        this.size = 0;
    }

    getElement(index) {
        return this.array[index];
    }

    push(element){
        this.array[this.size] = element;
        this.size++;
    }

    unshift(element){
        for(let i = this.size; i > 0; i--){
            this.array[i - 1] = this.array[i];
        }

        this.array[0] = element;
        this.size++;
    }

    pop(){
        this.array[this.size - 1] = null;
        this.size--;
    }

    shift(){
        for(let i = 0; i < this.size; i++){
            this.array[i] = this.array[i + 1];
        }

        this.array[this.size - 1] = null;
        this.size--;
    }

    splice(element, index){
        for(let i = this.size; i > index; i--){
            this.array[i] = this.array[i - 1];
        }

        this.array[index] = element;
        this.size++;
    }

    search(element){
        const result = {"contains": false, index: -1};
        for(let i = 0; i < this.size; i++){
            if(this.array[i] === element){
                result["contains"] = true;
                result["index"] = i;
                break;
            }
        }

        return result;
    }
}

