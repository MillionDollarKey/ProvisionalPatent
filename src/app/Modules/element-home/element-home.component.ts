import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Router } from '@angular/router';
import {AddElementType} from "../add-element-type";
import { NewPatentComponent } from '../new-patent/new-patent.component';
import { AddElementComponent } from '../add-element/add-element.component';
import {AddSubElementComponent} from '../add-sub-element/add-sub-element.component';
import {MatDialog, MatDialogConfig , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ITreeState, ITreeOptions, TreeModel, TreeNode, IActionHandler, TreeComponent} from 'angular-tree-component';
import { v4 } from 'uuid';
import {SelectElementComponent} from '../select-element/select-element.component';

declare var $: any ;
@Component({
  selector: 'app-element-home',
  templateUrl: './element-home.component.html',
  styleUrls: ['./element-home.component.css']
})
export class ElementHomeComponent implements OnInit {

  @Input() Datas: AddElementType [];
  index: any ;
  nodes: any ;
  params: any ;
  constructor( private datasvc: DataService , private router: Router , public dialog: MatDialog) { }

  ngOnInit() {
    this.Datas  = this.datasvc.data[this.datasvc.CountPatent - 1].Elements;
    console.log(this.datasvc.data);

  }

  done() {
    console.log($('.sortable').toArray() + "array");
    this.datasvc.avail = true;
    this.datasvc.software = false;
    this.datasvc.composition = false;
    this.router.navigateByUrl('/');
    localStorage.setItem('patents', JSON.stringify(this.datasvc.data));
  }

  addElement() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AddElementComponent, dialogConfig);
    this.tree.treeModel.update();
    this.tree.updateData();

  }

  addSubElement(parentID ?: string, order?: number) {
    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.data = [parentID, order];
    this.dialog.open(AddSubElementComponent, dialogConfigs);
   // this.router.navigate(["/addSubElement",parentID]);
   this.tree.treeModel.update();
   this.tree.updateData();

  }

  dropDown() {
    const dialogConfig1 = new MatDialogConfig();
    dialogConfig1.data = this.index;
    console.log(this.index);
    let parameters = this.dialog.open(SelectElementComponent, dialogConfig1);
    parameters.afterClosed().subscribe((value) => {
      this.params = value
      console.log(this.params);
      this.addSubElement(this.params[0], this.params[1]);
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
