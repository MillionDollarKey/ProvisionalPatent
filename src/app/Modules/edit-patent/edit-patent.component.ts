import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataService } from '../../Services/data.service';
import {AddElementType,PatentType} from "../add-element-type";
import { Router,ActivatedRoute} from "@angular/router";
import { NewPatentComponent } from '../new-patent/new-patent.component';
import { AddElementComponent } from '../add-element/add-element.component';
import {AddSubElementComponent} from '../add-sub-element/add-sub-element.component';
import {SelectElementComponent} from '../select-element/select-element.component';
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
  nodes : any ;
  params : any ;

  ngOnInit() {
    this.dataSVC.editPatent = true;
    this.index = this.route.snapshot.params['id'];
    this.parentId = this.index;
     this.dataSVC.data  = JSON.parse( localStorage.getItem('patents') );
     console.log(this.dataSVC.data);
     this.Datas = this.dataSVC.data[this.index].Elements;
     console.log(this.Datas);
     console.log( "parent id" + this.parentId);
     this.nodes = this.Datas ;
}

  done() {
    this.dataSVC.avail = true;
    this.dataSVC.software = false;
    this.dataSVC.composition = false;
    this.router.navigateByUrl('/');
    this.dataSVC.editPatent = false;
     localStorage.setItem( "patents",JSON.stringify(this.dataSVC.data) );
  }


  addElement() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.parentId;
   let params = this.dialog.open(AddElementComponent, dialogConfig);
   params.afterClosed().subscribe((vlaue)=>{
    this.tree.treeModel.update();
    this.onMoveNode(Event);
  });
  }

  dropDown() {
    const dialogConfig1 = new MatDialogConfig();
    dialogConfig1.data = this.index;
    console.log(this.index);
    let parameters = this.dialog.open(SelectElementComponent,dialogConfig1);
    parameters.afterClosed().subscribe((value)=>{
      this.params = value
      console.log(this.params);
      this.addSubElement(this.params[0],this.params[1]);
      
    });
  }

  addSubElement(parentID ?: string, order?: number) {
    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.data = [this.parentId, parentID, order];
    console.log( dialogConfigs.data);
     let params = this.dialog.open(AddSubElementComponent, dialogConfigs);
     params.afterClosed().subscribe((vlaue)=>{
      this.tree.treeModel.update();
      this.onMoveNode(Event);
    });
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

  addNode() {
    this.nodes.push({ id: "xghdfh" , name: 'another node' });
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
