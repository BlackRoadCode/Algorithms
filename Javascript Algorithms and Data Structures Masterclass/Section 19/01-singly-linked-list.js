class Node {
    constructor( value ) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push( val ) {
        let node = new Node( val );

        if ( !this.head ) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop(){
        if( !this.head ) return undefined;

        let current = this.head;
        let newTail = current;

        while( current.next ){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if( this.length === 0 ){
            this.head = null;
            this.tail = null;
        }
        return current;    
    }

    shift(){
        if( !this.head ) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length--;
        if( this.length === 0 ) this.tail = null;
        
        return current;
    }

    unshift( val ){
        let node = new Node( val );

        if ( !this.head ){
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get( index ){
        if ( index < 0 || index >= this.length ) return null;

        let current = this.head;

        for ( let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }
    
    // get( index ){
    //     if ( index < 0 || index >= this.length ) return null;

    //     let counter = 0;
    //     let current = this.head;

    //     while ( counter !== index) {
    //         current = current.next;
    //         counter++;
    //     }

    //     return current;
    // }

}

let list = new SinglyLinkedList();
list.push('hello');
list.push('world');
list.push('since');

console.log(list);

console.log( list.get(1) );