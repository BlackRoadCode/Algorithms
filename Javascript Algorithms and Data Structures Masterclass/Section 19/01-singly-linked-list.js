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

    push( value ) {
        let node = new Node( value );

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

    unshift( value ){
        let node = new Node( value );

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

    set( index, value ){
        let foundNode = this.get( index );

        if( foundNode ){
            foundNode.value = value;
            return true;
        } else {
            return false;
        }
    }
    
    set( index, value ){
        let foundNode = this.get( index );

        if( foundNode ){
            foundNode.value = value;
            return true;
        }
        
        return false;
    }

    insert( index, value ){
        if ( index < 0 || index > this.length ) return false;

        switch ( index ) {
            case 0:
                return !!this.unshift( value );

            case this.length:
                return !!this.push( value );
        
            default:
                let newNode = new Node( value );
                let firstNodeInsert = this.get( index - 1 );
                let secondNodeInsert = this.get( index );

                firstNodeInsert.next = newNode;
                newNode.next = secondNodeInsert;
                this.length++;
                return true;
        }
    }

    remove( index ){
        if ( index < 0 || index > this.length ) return undefined;
        if ( index === 0 ) return this.shift();
        if ( index >= this.length -1 ) return this.pop();

    }

    
    // - Si el índice es el mayor o igual que el length - 1, pop.
    // - Si el índice es 0, shift.

    // - De otro modo, usar el método get para accesar al nodo en el índice -1.
    // - Setear la propiedad next del nodo ubicado para que sea igual al next del siguiente nodo.
    // - Decrementar el length en 1.
    // - Retornar el valor del nodo removido.

}

let list = new SinglyLinkedList();
list.push('hello');
list.push('world');
list.push('since');

console.log(list);
console.log( list.insert( 3, 'nuevo nodo' ) );
console.log( list );