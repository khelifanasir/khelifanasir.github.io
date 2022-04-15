"use strict";
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   };

   function printingNamevalue(node){
       if(node.children == null){
           console.log(node.name + ": "+ node.value)
       } else 
       {
        console.log(node.name + ": "+ node.value)  
        for (let each of node.children){        
           
            printingNamevalue(each)  
                       
        }
       }
   }
    printingNamevalue(node1)

    let result = []

   function collectNameValue(node){
       if(node.children == null){           
          result.push(`${node.name} : ${node.value}`)          
       }
       else {           
           result.push(`${node.name} : ${node.value}`)
           for (let each of node.children){
               let abe = collectNameValue(each)             
           }
       }
      return result
   }
  console.log(collectNameValue(node1))

  function TreeNode(value) { 
    this.value = value; 
    this.descendents = [];
    }
    const abe = new TreeNode("Abe");     
    const homer = new TreeNode("Homer"); 
    const bart = new TreeNode("Bart");
    const lisa = new TreeNode("Lisa");
    const maggie = new TreeNode("Maggie");
    abe.descendents.push(homer); 
    homer.descendents.push(bart, lisa, maggie);

    function LinkedList(value,next){
        this.value = value;
         this.next = next;
    }
    const maggie1 = new LinkedList("Maggie",null);
    const lisa1 = new LinkedList("Lisa",maggie1);
    const bart1 = new LinkedList("Bart",lisa1);
    const homer1 = new LinkedList("Homer",bart1); 
    const abe1 = new LinkedList("Abe",homer1);
    
    
    console.log(treeCollector(abe1));
    displayNames(abe);
    
    function findListNode(list,str){
         if(list.value === str){
            return list;
    
        }else if(list.next!==null){
            return (findListNode(list.next,str));   
        }   
    }
  
    function allCaps(list){
      list.value = list.value.toUpperCase();
    
    }
   
    function addStars(list){
         list.value = "***" + list.value + "***";
    }
  
    function reverseNode(list){
           let reversed = "";
        for(let i= list.value.length-1; i>=0;i--){
            reversed+= list.value.charAt(i);
        }
        list.value = reversed;
        
    }
    
    function treeModifier(list,modifierFun){
            modifierFun(list);
             if(list.next!==null){
            treeModifier(list.next,modifierFun);
        }
    }
    
//    let TREE_COLLECTOR = [];
  
//     function treeCollector(list){
//         TREE_COLLECTOR.push(list.value);
//         if(list.next!==null){
//             treeCollector(list.next);
//         }
//         return TREE_COLLECTOR;
//     }

  
    function treeCollector(node){
        let trecollection = []
        while(!node.next ==null){
            trecollection.push(node.value);
            node.next
        }
    }
    
    function displayNames(simpsons){
        if(simpsons.descendents===[]){
            console.log(`${simpsons.value}`);
        }else{
            for(const simpson of simpsons.descendents){
                displayNames(simpson);
            }
            console.log(`${simpsons.value}`);
        }  
    }
    
    function findTarget(tree,str){
        if(tree.value===str){
                return true;
             }
         if(tree.descendents!==[]){
            for(const subTree of tree.descendents){
           if(findTarget(subTree,str)){
               return true;
           }
        }
    
     }
     return false;
    }
    
    function findSubtree(tree,str){
        if(tree.value===str){
            return tree;
    
        } else if(tree.descendents.length!==0){
            for(const subTree of tree.descendents){
                if(findTarget(subTree,str)){
                return findSubtree(subTree,str);
                }
               
            }
        }
         return null;
    }
    
    
     