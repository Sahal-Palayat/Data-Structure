class linearProbbing{
    constructor(size){
        this.size=size
        this.keys=new Array(size)
        this.values=new Array(size)
    }

    hash(key){
        let total =0

        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }


    set(key ,value){
        let  index=this.hash(key)
        while(this.keys[index]!==undefined){
            index=(index+1)%this.size
        }

        this.keys[index]=key
        this.values[index]=value
    }

    get(key){
        let index= this.hash(key)

        while(this.keys[index]!==key){
            index= (index+1)%this.size
            if(this.keys[index]===undefined){
                return null
            }

        }
    
        return this.values[index]
    }

    remove(key){
        let index=this.hash(key)

        while(this.keys[index]!==key){
            index=(index+1)%this.size
            if(this.keys[index]===undefined){
                return null
            }
        }
            this.keys[index]=undefined
             this.values[index]=undefined
    }

    display(){
        for( let i=0;i<this.keys.length;i++){
            if(this.keys[i]){
                console.log(this.keys[i],this.values[i]);
            }
        }
    }
}

const res=new linearProbbing(100)

res.set('au','australia')
res.set('fr','ded')
res.remove('fr')
res.display()