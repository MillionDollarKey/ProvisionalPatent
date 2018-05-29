import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataService } from '../../Services/data.service';
import {AddElementType,PatentType} from "../add-element-type";
import { Router,ActivatedRoute} from "@angular/router";
import { NewPatentComponent } from '../new-patent/new-patent.component';
import { AddElementComponent } from '../add-element/add-element.component';
import {AddSubElementComponent} from '../add-sub-element/add-sub-element.component';
import {MatDialog, MatDialogConfig , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ITreeState, ITreeOptions,TreeModel, TreeNode, IActionHandler, TreeComponent} from 'angular-tree-component';
import { v4 } from 'uuid';
declare var $ : any ;

@Component({
  selector: 'app-edit-patent',
  templateUrl: './edit-patent.component.html',
  styleUrls: ['./edit-patent.component.css']
})
export class EditPatentComponent implements OnInit {
  index : any ;
  constructor(public dialog: MatDialog ,private dataSVC : DataService,private route : ActivatedRoute,private router : Router ) { }
  data : PatentType [];
  @Input() Datas : AddElementType [];
  available : boolean  ;
  parentId : number ;

  ngOnInit() {

    $(document).ready(function() {
      // $(".sortable").nestedSortable({
      //   forcePlaceholderSize: true,
      //   items: "li",
      //   handle: "a",
      //   placeholder: "menu-highlight",
      //   listType: "ul",
      //   opacity: 0.6,
      //   isAllowed: function(item,parent){
      //     console.log(item);
      //     console.log(parent);

      //     return true;
      //   }
      // });

    var li= $('.idClass').closest('li');

    });



    this.dataSVC.editPatent = true;

    this.index = this.route.snapshot.params['id'];
    this.parentId = this.index;
     this.dataSVC.data  = JSON.parse( localStorage.getItem('patents') );
     console.log(this.dataSVC.data);
     this.Datas = this.dataSVC.data[this.index].Elements;
     console.log(this.Datas);
     console.log( "parent id" + this.parentId);

     this.buildList($('#pageContent').empty(), this.Datas);
     $(".sortable").nestedSortable({
      forcePlaceholderSize: true,
      items: "li",
      handle: "a",
      placeholder: "menu-highlight",
      listType: "ul",
      opacity: 0.6,
      isAllowed: function(item,parent){
        console.log(item);
        console.log(parent);

        return true;
      }
    });

  }

  buildList(parentElement, items) {
    var i, l, list, li;
    if( !items || !items.length ) { return; } // return here if there are no items to render
    list = $("<ul class='submenu-list'></ul>").appendTo(parentElement); // create a list element within the parent element
    for(i = 0, l = items.length ; i < l ; i++) {
        li = $("<li></li>").html("<a>"+items[i].title+"</a>");  // make a list item element
        this.buildList(li, items[i].subElement);          // add its subpoints
        list.append(li);
    }
}

  done(){
    var array = $('.sortable').nestedSortable('toArray');
     console.log(array);

    //  var arraied = $('.sortable').nestedSortable('toArray', {startDepthCount: 0});
    //  	arraied = this.dump(arraied);

		// 	console.log(arraied)

    // this.dataSVC.avail = true;

    // this.dataSVC.software = false;
    // this.dataSVC.composition = false;
    // this.router.navigateByUrl('/');
    // this.dataSVC.editPatent = false;
    //  localStorage.setItem( "patents",JSON.stringify(this.dataSVC.data) );
  }

  dump(arr,level?:any) {
    var dumped_text = "";
    if(!level) level = 0;

    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";

    if(typeof(arr) == 'object') { //Array/Hashes/Objects
      for(var item in arr) {
        var value = arr[item];

        if(typeof(value) == 'object') { //If it is an array,

          dumped_text += level_padding + "'" + arr[item] + "' ...\n";
          dumped_text += this.dump(value,level+1);
        } else {
          dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
        }
      }
    } else { //Strings/Chars/Numbers etc.
      dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
  }

  addElement(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.parentId;
    this.dialog.open(AddElementComponent, dialogConfig);
  //  this.router.navigate(['/addElement']);
  }

  addSubElement(parentID ?: string,order?:number){
    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.data = [this.parentId,parentID,order];
    console.log( dialogConfigs.data);
    this.dialog.open(AddSubElementComponent, dialogConfigs);
   // this.router.navigate(["/addSubElement",parentID]);

  }

  //Added By haresh varsani 29052018
  @ViewChild(TreeComponent)
  private tree: TreeComponent;
  state: ITreeState = {
    expandedNodeIds: {
      1: true,
      2: true
    },
    hiddenNodeIds: {},
    activeNodeIds: {},
    
  };

  options: ITreeOptions = {
    allowDrag: true,
    getNodeClone: (node) => ({
      ...node.data,
      id: v4(),
      name: `copy of ${node.data.name}`
    }),
    // actionMapping: {
    //   mouse: {
    //     drop: (tree:TreeModel, node:TreeNode, $event:any, {from, to}) => {
    //       // use from to get the dragged node.
    //       // use to.parent and to.index to get the drop location
    //       // use TREE_ACTIONS.MOVE_NODE to invoke the original action
    //       console.log(from);
    //       console.log(to);
    //       console.log(tree);
    //       console.log(node);
    //       return true;
    //     }   
    //   }
    // }
  };

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      id: 2,
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
          {name: 'grandchild2.2.1'}
        ] }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];

  addNode() {
    this.nodes.push({ name: 'another node' });
    this.tree.treeModel.update();
  }

  onMoveNode($event) {
    console.log($event.treeModel.nodes);
    // console.log(
    //   "Moved",
    //   $event.node.name,
    //   "to",
    //   $event.to.parent.name,
    //   "at index",
    //   $event.to.index);
  }


}
